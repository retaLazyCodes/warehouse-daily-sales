import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useContext, useEffect, useState } from 'react'
import CashBoxContext from '../../context/cashBox';

function MyModal({ setMadeClick, inputDailyBox, children }) {
    const [show, setShow] = useState(false);
    const { dailyBox, setDailyBox, setCashBoxOpen } = useContext(CashBoxContext)

    const handleClose = () => {
        setShow(false)
        setMadeClick(null)
    };
    const handleShow = () => setShow(true);

    const handleSave = () => {
        const dailyBoxObject = {
            openedDate: new Date(),
            closedDate: null,
            initialBalance: parseFloat(inputDailyBox),
            deposits: 0,
            egress: 0,
        }
        setDailyBox(dailyBox.concat(dailyBoxObject))
        setCashBoxOpen(true)
        handleClose()
    }

    const toggle = () => setShow(!show);

    useEffect(() => {
        handleShow()
    }, [])

    return (
        <>
            {/* <Button color="danger" onClick={handleShow}>Abrir Caja</Button> */}
            <Modal isOpen={show} toggle={show} onHide={toggle}>
                <ModalHeader closeButton>
                    Caja Inicial
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={handleClose}>Cerrar</Button>
                    <Button color="primary" onClick={handleSave}>
                        Guardar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default MyModal;
