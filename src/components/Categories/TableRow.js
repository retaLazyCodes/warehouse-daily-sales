import ActionCategory from "./ActionCategory";
import {
    Badge,
} from "reactstrap";

const boldFont = { fontWeight: 'bold' }

function TableRow({ name, description }) {
    return (
        <tr>
            <td>
                <Badge color="" className="badge-dot mr-4" style={boldFont}>
                    <i className="bg-warning" />
                    {name}
                </Badge>
            </td>

            <td>
                <Badge color="" className="badge-dot mr-4" style={boldFont}>
                    <i className="bg-warning" />
                    {description}
                </Badge>
            </td>

            <ActionCategory />
        </tr>
    );
}

export default TableRow;