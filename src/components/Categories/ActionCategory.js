import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

function ActionCategory({ id }) {
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
                        onClick={e => e.preventDefault()}
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