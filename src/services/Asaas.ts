import axios from "axios";

const baseURL = 'https://tona-backend-b3642472084a.herokuapp.com/'
// const baseURL = 'http://localhost:3000/'

interface IgetUser{
    email: string | undefined
}
export default {
    getUser: async ({email}:IgetUser) => {
        const response = await axios.get(baseURL + `asaas?email=${email}`)
        return response
    }
}