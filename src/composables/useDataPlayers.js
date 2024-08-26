import serviceDataPlayers from "@/services/data";
import useUtils from "@/composables/useUtils";
import useDataClubs from "@/composables/useDataClubs";
import useDataLeagues from "@/composables/useDataLeagues";
import useDataNations from "@/composables/useDataNations";
import { reactive } from "vue";
import router from '@/router';

const usePlayersData = () => {
    const { getDataClub } = useDataClubs();
    const { getDataLeague } = useDataLeagues();
    const { getDataNation } = useDataNations();
    const { error, messageError } = useUtils();

    const dataPlayers = reactive({
        pagination: {},
        players: []
    });

    const getDataPlayers = async () => {
        try {
            await getPlayers();
            await addImageToPlayers();
        } catch (e) {
            console.error('Error getting data all players', e);
            error.value = true;
            messageError.value = e.message;
            throw e;
        }
    };

    const addImageToPlayers = async () => {
        dataPlayers.players.forEach(async player => {
            const imgUrl = await getImagePlayer(player.id);
            player.image = imgUrl;
        });
    };

    const getPlayers = async () => {
        try {
            const res = await serviceDataPlayers.getPlayers();
            dataPlayers.pagination = res.pagination;
            dataPlayers.players = res.items.map(player => ({
                ...player,
                image: null
            })); 
        } catch (e) {
            error.value = true;
            messageError.value = e.message;
            throw e;
        }
    };

    const getDataPlayer = async id => {
        try {
            const dataPlayer = await serviceDataPlayers.getPlayer(id);
            const image = await getImagePlayer(id);

            //Get data club
            const club = await getDataClub(dataPlayer.club);

            //Get data league
            const league = await getDataLeague(dataPlayer.league);

            //Get data nation
            const nation = await getDataNation(dataPlayer.nation);
            
            const player = { ...dataPlayer, image, club: club, league: league, nation: nation };
            return player;
        } catch (e) {
            console.log;
            error.value = true;
            messageError.value = e.message;
        }
    };
    
    const getImagePlayer = async playerId => {
        try {
            const imgUrl = await serviceDataPlayers.getImagePlayer(playerId);
            return imgUrl;
        } catch (e) {
            console.log(e);
        }
    };

    const showPlayerDetail = id => router.push({ name: "PlayerDetail", params: { id } });
    
    return { dataPlayers, getPlayers, getDataPlayers, getDataPlayer, getImagePlayer, showPlayerDetail };
    };
    export default usePlayersData;