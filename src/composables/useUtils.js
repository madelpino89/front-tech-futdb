import { ref } from 'vue';

const useUtils = () => { 
    const capitalizeGender = gender => gender.charAt(0).toUpperCase() + gender.slice(1);
    const loading = ref(false);
    const error = ref(null);
    const messageError = ref(null);

    return {
        loading,
        error,
        messageError,
        capitalizeGender,
    };
};
export default useUtils;