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
            if (fetchedCategories != categories) {
                setCategories(fetchedCategories)
            }
        }
        fetchCategories()
    }, [])

    const updateCategory = (updatedCategory) => {
        const categoriesCopy = [...categories];
        const objIndex = categoriesCopy.findIndex((obj => obj.id == updatedCategory.id));
        categoriesCopy[objIndex] = updatedCategory

        setCategories(categoriesCopy)
    }

    const addCategory = (newCategory) => {
        setCategories([...categories, newCategory])
    }

    const removeCategory = (id) => {
        const categoriesLeft = categories.filter(c => c.id != id)
        setCategories(categoriesLeft)
    }


    return (
        <CategoryContext.Provider value={{
            categories,
            setCategories,
            updateCategory,
            removeCategory,
            addCategory
        }}>
            {children}
        </CategoryContext.Provider>
    )
}
