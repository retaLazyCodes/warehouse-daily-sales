import { useContext } from "react";
import { Button } from "reactstrap";
import CashBoxContext from "../../context/cashBox";

function CloseCashBox({ setNotification }) {
    const { setCashBoxOpen, sales } = useContext(CashBoxContext)

    const handleClose = () => {
        setCashBoxOpen(false)
        {
            const total =
                sales.reduce((total, sale) => total + sale.content, 0);

            setNotification(`El total de efectivo en la caja es de: $${total}`)
            setTimeout(() => {
                setNotification(null)
            }, 10000)
        }
    }

    return (
        <div class="row justify-content-center mb-3">
            <Button
                color="danger"
                onClick={handleClose}
            >
                Cerrar caja
            </Button>
        </div>
    );
}

export default CloseCashBox;