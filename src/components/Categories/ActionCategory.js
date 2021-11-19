import { useContext } from "react";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { useGlobalToken } from "../../hooks/useGlobalToken";
import CategoryContext from "../../context/category";
import categoriesService from "../../services/categories";
import Alert from "../alertService/AlertService";

function ActionCategory({ id }) {
    const token = useGlobalToken()
    const { updateCategory, removeCategory } = useContext(CategoryContext)

    const handleEdit = async (e) => {
        e.preventDefault()
        const newName = await Alert.inputText("Editar categoría", "Ingrese el nuevo nombre")
        if (newName) {
            console.log(newName)
            const newDesc = await Alert.inputText("Editar categoría", "Ingrese la nueva descripcion")
            if (newDesc) {
                console.log(newDesc)
                const sendCategory = {
                    name: newName,
                    description: newDesc
                }
                const editedCategory = await categoriesService.editCategory(token, id, sendCategory)

                if (editedCategory) {
                    updateCategory(editedCategory)
                    Alert.success("Resultado", "Categoría actualizada")
                } else {
                    Alert.error("Resultado", "No se ha podido actualizar la categoría")
                }
            }
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        const newName = await Alert.confirm("Eliminar categoría", "¿Seguro que quieres eliminar la categoría?")
        if (newName) {
            const deletedCategory = await categoriesService.deleteCategory(token, id)
            if (deletedCategory.message === "deleted") {
                removeCategory(id)
                Alert.success("Resultado", "Categoría Eliminada")
            } else {
                Alert.error("Resultado", "No se ha podido eliminar la categoría")
            }
        }
    }



    return (
        <td className="text-right">
            <UncontrolledDropdown>
                <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                >
                    <i className="fas fa-ellipsis-v" style={{ color: '#fb6340' }} />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                        href="#pablo"
                        onClick={handleEdit}
                    >
                        Editar
                    </DropdownItem>
                    <DropdownItem
                        href="#pablo"
                        onClick={handleDelete}
                    >
                        Eliminar
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </td>
    );
}

export default ActionCategory;