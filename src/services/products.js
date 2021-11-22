const { REACT_APP_API_URL } = process.env

const BASE_URL = `${REACT_APP_API_URL}/products`

const getProducts = async (token) => {

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

const createProduct = async (token, product) => {

    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(product)
    });
    const data = response.json()
    return data
}

const editProduct = async (token, id, product) => {

    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(product)
    });
    const data = response.json()
    return data
}

const deleteProduct = async (token, id) => {
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
    getProducts,
    editProduct,
    deleteProduct,
    createProduct
}