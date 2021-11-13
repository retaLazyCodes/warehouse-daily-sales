import { useEffect, useState } from "react";
import CategoryContext from "./index";
import categoriesService from "../../services/categories";
import { useGlobalToken } from "../../hooks/useGlobalToken";

export default function CategoryProvider({ children }) {
    const token = useGlobalToken()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchCategories() {
            const fetchedCategories = await categoriesService.getCategories(token)
            console.log(categories)
            setCategories(fetchedCategories)
        }
        fetchCategories()
    }, [])

    const updateCategory = (updatedCategory) => {
        const categoriesCopy = [...categories];
        const objIndex = categoriesCopy.findIndex((obj => obj.id == updatedCategory.id));
        categoriesCopy[objIndex] = updatedCategory

        setCategories(categoriesCopy)
    }


    return (
        <CategoryContext.Provider value={{
            categories,
            setCategories,
            updateCategory,
        }}>
            {children}
        </CategoryContext.Provider>
    )
}
