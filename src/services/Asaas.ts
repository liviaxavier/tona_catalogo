import axios from "axios";

// const API_KEY = import.meta.env.VITE_ASAAS_API_TOKEN;
export default {
    getUser: async () => { // user: any
        // ?email=${user.name}
        try {
            const response = await axios.get(`https://api.asaas.com/v3/customers`, {
                headers: {
                    accept: 'application/json',
                    access_token: ''
                    // 'User-Agent': 'tona_catalogo'
                }
            })
            console.log(response)
        } catch (error) {
            throw 'Ocorreu um erro ao buscar os dados do usuário.';
        }
    }
}