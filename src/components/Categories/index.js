import Header from '../Headers/Header'
import { Card, Container, Row } from "reactstrap"
import { useContext, useEffect } from 'react'
import CashBoxProvider from "../../context/cashBox/Provider"
import CategoryContext from '../../context/category/'
import CategoriesTable from './CategoriesTable'


function Categories() {
    const { categories } = useContext(CategoryContext)

    useEffect(() => {

    }, [categories])

    return (
        <>
            <Header />
            <CashBoxProvider>
                <Container className="mt--7" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow border-0">
                                <CategoriesTable categories={categories} />
                            </Card>
                        </div>
                    </Row>
                </Container>

            </CashBoxProvider>
        </>
    )
}

export default Categories;