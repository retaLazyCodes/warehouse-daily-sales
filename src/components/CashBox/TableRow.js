
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

                <button rel="tooltip" className="btn btn-info btn-just-icon btn-sm" data-original-title="" title="">
                    <i className="fas fa-plus" title="Nuevo deposito"></i>

                </button>
                <button type="button" rel="tooltip" className="btn btn-danger btn-just-icon btn-sm" data-original-title="" title="">
                    <i className="fas fa-minus" title="Nueva salida"></i>
                </button>
                <button type="button" rel="tooltip" className="btn btn-success btn-just-icon btn-sm" data-original-title="" title="">
                    <i class="fas fa-dollar-sign" title="Contar efectivo"></i>
                </button>
                <button type="button" rel="tooltip" className="btn btn-warning btn-just-icon btn-sm" data-original-title="" title="">
                    <i className="fas fa-lock" title="Cerrar Caja"></i>
                </button>
            </td>
        </tr>
    )
}

export default TableRow