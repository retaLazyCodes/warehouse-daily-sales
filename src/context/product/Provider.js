import { useEffect, useState } from "react";
import ProductContext from "./index";
import productService from "../../services/products";
import { useGlobalToken } from "../../hooks/useGlobalToken";

export default function ProductProvider({ children }) {
    const token = useGlobalToken()
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts = await productService.getProducts(token)
            console.log(fetchedProducts)
            console.log(products)
            if (fetchedProducts != products) {
                setProducts(fetchedProducts)
            }
        }
        fetchProducts()
    }, [])

    const updateProduct = (updatedProduct) => {
        const productsCopy = [...products];
        const objIndex = productsCopy.findIndex((obj => obj.id == updatedProduct.id));
        productsCopy[objIndex] = updatedProduct

        setProducts(productsCopy)
    }

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct])
    }

    const removeProduct = (id) => {
        const productsLeft = products.filter(p => p.id != id)
        setProducts(productsLeft)
    }


    return (
        <ProductContext.Provider value={{
            products,
            setProducts,
            updateProduct,
            removeProduct,
            addProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}
