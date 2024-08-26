import { httpUsers } from "@/setup/http";
import coupons from "@/services/mocks/coupons.json";

export default {
    getRandomUsers: async numberResults => {
        if (numberResults) {
            if (typeof (numberResults) !== "number") {
                throw new Error("numberResults must be a number");
            }
        }

        const params = numberResults ? `?results=${numberResults}&nat=ES` : "?results=6&nat=ES";
        const response = await httpUsers.get(params);
        return response.data;
    },
    getCouponsData: async () => JSON.parse(JSON.stringify(coupons))
};