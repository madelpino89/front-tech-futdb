import { http } from "@/setup/http"; 

export default {
    getNation: async id => {
        const response = await http.get(`/nations/${id}`);
        return response.data.nation;
    },

    getImageNation: async nationId => {
        const url = `/nations/${nationId}/image`;
        const response = await http.get(
            url,
            { responseType: "blob"}
        );

        let blob = new Blob(
            [response.data],
            { type: response.headers['content-type'] }
        );
        let imgUrl = URL.createObjectURL(blob);
        return imgUrl;
    }
};