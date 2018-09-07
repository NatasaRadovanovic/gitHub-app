import axios from 'axios'

export default class GitHub{
    constructor(){
        axios.defaults.baseURL='https://api.github.com/'
        //axios.defaults.headers.common['Authorization'] = 'Bearer 17a823f00ffdebf5b9a11f725fea900796141679'
    }

    getRepos(username){
        return axios.get(`users/${username}/repos`)
    }

    getProfile(username){
        return axios.get(`users/${username}`)
    }
}

export const gitService = new GitHub();