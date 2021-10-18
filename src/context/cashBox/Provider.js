import { useState } from "react";
import CashBoxContext from "./index";


export default function CashBoxProvider({ children }) {
    const [sales, setSales] = useState([])
    const [cashBoxOpen, setCashBoxOpen] = useState(false)
    const [dailyBox, setDailyBox] = useState([])


    return (
        <CashBoxContext.Provider value={{
            sales,
            setSales,
            cashBoxOpen,
            setCashBoxOpen,
            dailyBox,
            setDailyBox,
        }}>
            {children}
        </CashBoxContext.Provider>
    )
}
