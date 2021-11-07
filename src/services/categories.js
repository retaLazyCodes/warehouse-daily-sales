const { REACT_APP_API_URL } = process.env

const BASE_URL = `${REACT_APP_API_URL}/categories`

const getCategories = async (token) => {

    const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });
    const data = response.json()

    console.log(data)
    return data
}


export default {
    getCategories
}