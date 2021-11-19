import { useContext, useState } from 'react';
import CloseButton from './CloseButton'
import OpenButton from './OpenButton'
import Notification from './Notification'
import CashBoxTable from './CashBoxTable'
import CashBoxContext from '../../context/cashBox'

function Home() {
    const [notification, setNotification] = useState(null)
    const { cashBoxOpen } = useContext(CashBoxContext)

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Caja del día</h1>
            <Notification message={notification} />
            <div className="main-content">

                {
                    cashBoxOpen ?
                        <>
                            <CloseButton
                                setNotification={setNotification}
                            />

                        </>

                        : <OpenButton />
                }

            </div>
            <div className="summary">
                <CashBoxTable />
            </div>
        </>
    );
}

export default Home;
