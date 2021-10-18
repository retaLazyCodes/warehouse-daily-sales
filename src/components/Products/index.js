import Header from '../Headers/Header'
import CashBoxProvider from "context/cashBox/Provider"
import { Card, Container, Row } from "reactstrap"


function Products() {
    return (
        <>
            <Header />
            <CashBoxProvider>
                <Container className="mt--7" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow border-0">
                                <h1>Acá van los productos</h1>
                            </Card>
                        </div>
                    </Row>
                </Container>

            </CashBoxProvider>
        </>
    )
}

export default Products;