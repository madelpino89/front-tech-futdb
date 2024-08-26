import dataClubs from "./clubs/methodGet";
import dataPlayers from "./players/methodGet";
import dataLeagues from "./leagues/methodGet";
import dataNations from "./nations/methodGet";
import dataUsers from "./users/methodGet";
export default { ...dataClubs, ...dataPlayers, ...dataLeagues, ...dataNations, ...dataUsers };
