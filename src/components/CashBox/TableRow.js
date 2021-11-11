
function TableRow({ box }) {
    return (
        <tr>
            <td className="text-center">1</td>
            <td>{box.openedDate.toLocaleString()}</td>
            <td>{box.closedDate || ' - '}</td>
            <td>$ {box.initialBalance || 0}</td>
            <td >$ {box.deposits}</td>
            <td >$ {box.egress}</td>
            <td className="td-actions text-right">

                <button rel="tooltip" className="btn btn-info btn-just-icon btn-sm" data-original-title="" title="Nuevo deposito">
                    <i className="fas fa-plus"></i>
                </button>
                <button type="button" rel="tooltip" className="btn btn-danger btn-just-icon btn-sm" data-original-title="" title="Nueva salida">
                    <i className="fas fa-minus" ></i>
                </button>
                <button type="button" rel="tooltip" className="btn btn-success btn-just-icon btn-sm" data-original-title="" title="Contar efectivo">
                    <i class="fas fa-dollar-sign" ></i>
                </button>
                <button type="button" rel="tooltip" className="btn btn-warning btn-just-icon btn-sm" data-original-title="" title="Cerrar Caja">
                    <i className="fas fa-lock" ></i>
                </button>
            </td>
        </tr>
    )
}

export default TableRow