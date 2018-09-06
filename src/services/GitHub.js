import axios from 'axios'

export default class GitHub{
    constructor(){
        axios.defaults.baseURL='http://api.github.com/'
    }

    getRepos(username){
        return axios.get(`users/${username}/repos`)
    }
}

export const gitService = new GitHub();