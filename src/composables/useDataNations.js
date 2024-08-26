import serviceDataNations from '@/services/data';

const useDataNations = () => {
    const getDataNation = async nationId => {
        try {
            const dataNation = await serviceDataNations.getNation(nationId);
            const image = await serviceDataNations.getImageNation(nationId);
            return { ...dataNation, image }; 
        } catch (e) {
            console.log(e);
        }
    };

    return {
        getDataNation
    };
};

export default useDataNations;