import { useState } from 'react';
import { Button } from 'reactstrap'
import ModalChildren from './ModalChildren';

function OpenButton() {
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
                <ModalChildren
                    setMadeClick={setMadeClick}
                    handleChange={handleChange}
                    inputDailyBox={inputDailyBox}
                />

            }
        </ >
    );
}

export default OpenButton;