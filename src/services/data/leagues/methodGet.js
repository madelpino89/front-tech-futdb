import { http } from "@/setup/http"; 
//import serviceDataNation from "@/services/data";

export default {
    getLeagues: async () => {
        const response = await http.get("/leagues");
        return response.data;
    },

    getLeague: async id => {
        const response = await http.get(`/leagues/${id}`);
        return response.data.league;
    },

    getImageLeague: async leagueId => {
        const url = `/leagues/${leagueId}/image`;
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