import Header from "../Headers/Header"
import CashBoxProvider from "../../context/cashBox/Provider"
import { Card, Container, Row } from "reactstrap"
import Home from "./Home"

const CashBox = () => {
    return (
        <>
            <Header />
            <CashBoxProvider>
                <Container className="mt--7" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow border-0">
                                <Home />
                            </Card>
                        </div>
                    </Row>
                </Container>
            </CashBoxProvider>
        </>
    )
}

export default CashBox