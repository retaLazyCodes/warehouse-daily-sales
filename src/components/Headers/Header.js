/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Container, CardImg, CardText, Button, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row className="d-flex justify-content-around" style={{ padding: '0px' }}>
              <Col sm="6" md="6" lg="6" xl="3">
                <Card style={{ width: "14rem" }} >
                  <CardTitle
                    tag="h5"
                    className="text-uppercase text-muted mt-3 ml-3"
                  >
                    Caja del día
                  </CardTitle>
                  <CardImg
                    alt="..."
                    height="200px"
                    src={require("../../assets/img/theme/caja.jpg").default}
                    top
                  />
                  <CardBody>
                    <CardText>
                      Abrir/Cerrar caja del día
                    </CardText>
                    <Container style={{ display: 'flex', justifyContent: 'center' }}>
                      <Link to="/admin/cashbox" className="btn btn-primary">Caja del día</Link>
                    </Container>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6" md="6" lg="6" xl="3">
                <Card style={{ width: "14rem" }}>
                  <CardTitle
                    tag="h5"
                    className="text-uppercase text-muted mt-3 ml-3"
                  >
                    Ventas
                  </CardTitle>
                  <CardImg
                    alt="..."
                    height="200px"
                    src={require("../../assets/img/theme/sales.jpg").default}
                    top
                  />
                  <CardBody>
                    <CardText>
                      Historial de ventas
                    </CardText>
                    <Container style={{ display: 'flex', justifyContent: 'center' }}>
                      <Link to="/admin/sales" className="btn btn-primary">Ventas</Link>
                    </Container>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6" md="6" lg="6" xl="3">
                <Card style={{ width: "14rem" }}>
                  <CardTitle
                    tag="h5"
                    className="text-uppercase text-muted mt-3 ml-3"
                  >
                    Administrar productos
                  </CardTitle>
                  <CardImg
                    alt="..."
                    height="200xp"
                    src={require("../../assets/img/theme/producto.jpg").default}
                    top
                  />
                  <CardBody>
                    <CardText>
                      Gestionar productos
                    </CardText>
                    <Container style={{ display: 'flex', justifyContent: 'center' }}>
                      <Link to="/admin/products" className="btn btn-primary">Productos</Link>
                    </Container>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6" md="6" lg="6" xl="3">
                <Card style={{ width: "14rem" }}>
                  <CardTitle
                    tag="h5"
                    className="text-uppercase text-muted mt-3 ml-3"
                  >
                    Administrar Categorias
                  </CardTitle>
                  <CardImg
                    alt="..."
                    height="200px"
                    src={require("../../assets/img/theme/categorias.jpg").default}
                    top
                  />
                  <CardBody>
                    <CardText>
                      Gestionar categorías
                    </CardText>
                    <Container style={{ display: 'flex', justifyContent: 'center' }}>
                      <Link to="/admin/categories" className="btn btn-primary">Categorias</Link>
                    </Container>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
