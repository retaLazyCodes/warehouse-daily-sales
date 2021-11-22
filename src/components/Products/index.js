import Header from '../Headers/Header'
import CashBoxProvider from "../../context/cashBox/Provider"
import { Card, Container, Row } from "reactstrap"
import ProductsTable from './ProductsTable'
import ProductContext from '../../context/product'
import { useContext, useEffect } from 'react'


function Products() {
    const { products } = useContext(ProductContext)

    useEffect(() => {

    }, [products])

    return (
        <>
            <Header />
            <CashBoxProvider>
                <Container className="mt--7" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow border-0">
                                <h1 style={{ textAlign: 'center' }}>Productos</h1>
                                <ProductsTable products={products} />
                            </Card>
                        </div>
                    </Row>
                </Container>

            </CashBoxProvider>
        </>
    )
}

export default Products;