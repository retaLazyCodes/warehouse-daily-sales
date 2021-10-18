import { useState } from 'react';
import { InputGroup, FormControl, Input, Button, InputGroupAddon } from 'reactstrap'
import Modal from './Modal'

function OpenCashBox() {
    const [madeClick, setMadeClick] = useState(false)
    const [inputDailyBox, setInputDailyBox] = useState('')

    const handleOpen = () => {
        setInputDailyBox('')
        setMadeClick(true)
    }

    const handleChange = (event) => {
        setInputDailyBox(event.target.value)
    }

    return (
        <>
            <div class="row justify-content-center mb-3">
                <Button
                    color="success"
                    onClick={handleOpen}
                >
                    Abrir caja
                </Button>
            </div>

            {
                madeClick
                &&

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

            }
        </ >
    );
}

export default OpenCashBox;