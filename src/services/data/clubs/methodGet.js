import { http } from "@/setup/http";


export default {
    getClubs: async () => {
        const response = await http.get("/clubs");
        return response.data;
    },

    getClub: async id => {
        const response = await http.get(`/clubs/${id}`);
        return response.data.club;
    },

    getImageClub: async clubId => {
        const url = `/clubs/${clubId}/image`;
        //const response = await http.get(URL);
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