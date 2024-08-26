import serviceDataLeagues from '@/services/data';
import useDataNations from "@/composables/useDataNations";
import useUtils from "@/composables/useUtils";

const useDataLeagues = () =>  {
    const { getDataNation } = useDataNations();
    const { error, messageError } = useUtils();
    
    const getDataLeague = async id => {
        try {
            const dataLeague = await serviceDataLeagues.getLeague(id);
            const image = await getImageLeague(id);
           
            //Get nation and flag
            const nation = await getDataNation(dataLeague.nationId);

            const league = { ...dataLeague, image, nation: nation };
            return league;
        } catch (e) {
            console.log;
            error.value = true;
            messageError.value = e.message;
        }
    };

    const getImageLeague = async id => await serviceDataLeagues.getImageLeague(id);

    return {
        getDataLeague
    };
};

export default useDataLeagues;