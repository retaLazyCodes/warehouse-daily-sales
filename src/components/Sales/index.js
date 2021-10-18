import Header from '../Headers/Header'
import CashBoxProvider from "../../context/cashBox/Provider"
import { Card, Container, Row } from "reactstrap"


function Sales() {
    return (
        <>
            <Header />
            <CashBoxProvider>
                <Container className="mt--7" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow border-0">
                                <h1>Acá van las ventas</h1>
                            </Card>
                        </div>
                    </Row>
                </Container>

            </CashBoxProvider>
        </>
    )
}

export default Sales;