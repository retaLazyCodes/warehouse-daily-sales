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
    return data
}

const createCategory = async (token, category) => {

    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(category)
    });
    const data = response.json()
    return data
}

const editCategory = async (token, id, category) => {

    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(category)
    });
    const data = response.json()
    return data
}

const deleteCategory = async (token, id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });
    const data = response.json()
    return data
}


export default {
    getCategories,
    editCategory,
    deleteCategory,
    createCategory
}