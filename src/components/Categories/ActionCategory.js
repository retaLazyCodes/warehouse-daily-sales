import { useContext } from "react";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { useGlobalToken } from "../../hooks/useGlobalToken";
import CategoryContext from "../../context/category";
import categoriesService from "../../services/categories";
import Alert from "../alertService/AlertService";

function ActionCategory({ id }) {
    const token = useGlobalToken()
    const { updateCategory } = useContext(CategoryContext)

    const handleEditClick = async (e) => {
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
                        onClick={handleEditClick}
                    >
                        Editar
                    </DropdownItem>
                    <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        Eliminar
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </td>
    );
}

export default ActionCategory;