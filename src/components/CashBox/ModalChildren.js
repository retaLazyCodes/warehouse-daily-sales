import Modal from "./Modal";
import { InputGroup, Input, InputGroupAddon } from 'reactstrap'

function ModalChildren({ setMadeClick, inputDailyBox, handleChange }) {
    return (
        <Modal
            setMadeClick={setMadeClick}
            inputDailyBox={inputDailyBox}
        >
            <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input
                    value={inputDailyBox}
                    onChange={handleChange}
                    placeholder="Cantidad"
                    min={0}
                    max={100000}
                    type="number"
                    step="1" />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
        </Modal>
    );
}

export default ModalChildren;