import data from "@/services/data";
import { ref } from "vue";
import useUtils from "./useUtils";

const useUsers = () => {
    const users = ref([]);
    const userDetail = ref({});
    const dialogVisible = ref(false);

    const { loading, error, messageError } = useUtils();
   

    const getUserName = user => `${user.title} ${user.first} ${user.last}`;

    const getRandomUsers = async numberResults => {
        try {
            const res = await data.getRandomUsers(numberResults);
            users.value = res.results.map(user => ({
                clicked: 0,
                ...user,
                name: getUserName(user.name),
            }));
            return users.value;
        } catch (e) {
            console.log;
            error.value = true;
            messageError.value = e.message;
        }
    };

    const showUserDetail = user => {
        dialogVisible.value = true;
        user.clicked++;
        userDetail.value = user;
    };

    return {
        users,
        userDetail,
        dialogVisible,
        loading,
        getRandomUsers,
        showUserDetail,
    };
};
export default useUsers;