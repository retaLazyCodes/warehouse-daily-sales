import {
    Table
} from "reactstrap";
import TableRow from "./TableRow";

function CategoriesTable({ categories }) {

    return (

        <>
            <Table className="align-items-center" responsive>
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col" />
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.length > 0 &&
                        categories.map(c =>
                            <TableRow
                                key={c.id}
                                name={c.name}
                                description={c.description}
                            />
                        )
                    }
                </tbody>
            </Table>
        </>


    );
}

export default CategoriesTable;