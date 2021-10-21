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
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import AuthContext from "../../context/auth";

import authService from '../../services/auth'

const Login = () => {
  const { handleLogin } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToReferrer, setRedirectToReferrer] = useState(false)
  const history = useHistory()


  const handleLoginButton = async (event) => {
    event.preventDefault()
    console.log('logging in with', email, password)

    try {
      const user = await authService.signIn({
        email,
        password
      })

      if (user) {
        handleLogin(user)
        history.push("/admin")
      }
    } catch (e) {
      console.log("Wrong credentials")
    }
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button
                  type="submit"
                  color="primary"
                  onClick={handleLoginButton}
                >
                  Iniciar Sesión
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col className="text-center" xs="">
            <Link
              to="/auth/register"
            >
              Crear una cuenta
            </Link>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
