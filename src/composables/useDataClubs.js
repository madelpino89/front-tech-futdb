import serviceDataClubs from "@/services/data";
import { reactive } from "vue";
import useUtils from "./useUtils";
import router from '@/router';
//const router = useRouter();

const useDataClubs = () => {
    const resp = reactive({
        pagination: {},
        clubs: []
    });
    const { loading, error, messageError } = useUtils();

    const getPremierLeagueData = async () => {
        try {
            await getClubs();
            await addImagesToClubs(resp.clubs);
        } catch (e) {
            console.log;
            error.value = true;
            messageError.value = e.message;
        }
    };

    const addImagesToClubs = async players => {
        players.forEach(async player => {
            const imgUrl = await getImageClub(player.id);
            player.image = imgUrl;
        });
    };

    const getImageClub = async id => await serviceDataClubs.getImageClub(id);

    const getClubs = async () => {
        try {
            const res = await serviceDataClubs.getClubs();
            resp.pagination = res.pagination;
            resp.clubs = res.items;
        } catch (e) {
            console.log;
            error.value = true;
            messageError.value = e.message;
        }
    };

    const getDataClub = async id => {
        try {
            const dataClub = await serviceDataClubs.getClub(id);
            const image = await getImageClub(id);
            const club = { ...dataClub, image };
            return club;
        } catch (e) {
            console.log;
            error.value = true;
            messageError.value = e.message;
        }
    };

    const showClubDetail = club => router.push({ name: "DetailClub", params: { id: club.id } });

    return {
        resp,
        getPremierLeagueData,
        getImageClub,
        showClubDetail,
        getDataClub,
        loading
    };
};
export default useDataClubs;