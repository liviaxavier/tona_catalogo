import axios from "axios";

const baseURL = 'https://tona-backend-b3642472084a.herokuapp.com/'
interface IgetUser{
    email: string | undefined
}
export default {
    getUser: async ({email}:IgetUser) => {
        const response = await axios.get(baseURL + `asaas?email=${email}`)
        return response
    }
}