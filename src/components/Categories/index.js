import Header from '../Headers/Header'
import CashBoxProvider from "../../context/cashBox/Provider"
import { Card, Container, Row } from "reactstrap"
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/auth'
import categoriesService from '../../services/categories'
import CategoriesTable from './CategoriesTable'


function Categories() {
    const { token } = useContext(AuthContext)
    const [categories, setCategories] = useState([])

    useEffect(() => {

        console.log(token)
        async function fetchCategories() {
            const categories = await categoriesService.getCategories(token)
            console.log(categories)
            setCategories(categories)
        }

        fetchCategories()
    }, [])

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