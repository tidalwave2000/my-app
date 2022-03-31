
import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID xWqbmdnDkW4zTdqKxbKh17wGiig0itE8zKdsjwpl4t0",
	},
});
