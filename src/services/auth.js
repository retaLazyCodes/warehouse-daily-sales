import axios from 'axios'

const { REACT_APP_API_URL, REACT_APP_API_TOKEN } = process.env

const signUp = async credentials => {
    const { data } = await axios.post(REACT_APP_API_URL + "/signup", credentials)
    return data
}

const signIn = async credentials => {
    const config = {
        headers: {
            Authorization: REACT_APP_API_TOKEN
        }
    }
    const { data } = await axios.post(REACT_APP_API_URL + "/signin", credentials, config)
    return data
}


export default {
    signIn,
    signUp
}