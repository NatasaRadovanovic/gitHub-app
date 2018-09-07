import axios from 'axios'

export default class GitHub{
    constructor(){
        axios.defaults.baseURL='http://api.github.com/'
        //axios.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`
    }

    getRepos(username){
        return axios.get(`users/${username}/repos`)
    }
}

export const gitService = new GitHub();