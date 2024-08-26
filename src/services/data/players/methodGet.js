import { http } from "@/setup/http"; 

export default {
    getPlayers: async () => {
        try {
            const response = await http.get("/players");
            return response.data;
        }   catch (e) {
            console.error('Error getting data all players', e);
            throw e;
        }
    },

    getPlayer: async id => {
        const response = await http.get(`/players/${id}`);
        return response.data.player;
    },

    getImagePlayer: async playerId => {
        const url = `/players/${playerId}/image`;
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