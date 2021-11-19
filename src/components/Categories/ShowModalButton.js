import { Button } from "reactstrap";
import categoriesService from "../../services/categories";
import Alert from "../alertService/AlertService";
import CategoryContext from "../../context/category";
import { useContext } from "react";
import { useGlobalToken } from "../../hooks/useGlobalToken";

function ShowModalButton() {
    const token = useGlobalToken()
    const { addCategory } = useContext(CategoryContext)

    const handleShowModal = async () => {
        const name = await Alert.inputText("Crear categoría", "Ingrese el nombre")
        if (name) {
            const desc = await Alert.inputText("Crear categoría", "Ingrese una descripcion")
            if (desc) {
                const newCategory = {
                    name: name,
                    description: desc
                }
                const createdCategory = await categoriesService.createCategory(token, newCategory)

                if (createdCategory) {
                    addCategory(createdCategory)
                    Alert.success("Resultado", "Categoría creada")
                } else {
                    Alert.error("Resultado", "No se ha podido crear la categoría")
                }
            }
        }
    }

    return (
        <>
            <div class="row justify-content-center mb-3">
                <Button
                    color="success"
                    onClick={handleShowModal}
                >
                    Crear categoría
                </Button>
            </div>
        </ >
    );
}

export default ShowModalButton