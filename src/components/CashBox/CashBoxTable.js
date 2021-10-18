import { useContext } from "react";
import CashBoxContext from "../../context/cashBox";
import TableRow from "./TableRow";

function CashBoxTable() {
    const { dailyBox } = useContext(CashBoxContext)

    return (

        <div className="table-responsive">
            <table className="table table-hover">
                <thead >
                    <tr>
                        <th className="text-center">#</th>
                        <th>Fecha Apertura</th>
                        <th>Fecha Cierre</th>
                        <th>Saldo inicial</th>
                        <th>Depositos</th>
                        <th >Salidas</th>
                        <th className="text-right">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dailyBox.length > 0 &&
                        dailyBox.map(box =>
                            <TableRow
                                key={box.openedDate}
                                box={box}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CashBoxTable;