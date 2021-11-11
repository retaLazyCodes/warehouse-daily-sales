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
import { useHistory } from "react-router";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
import AuthContext from "../context/auth"
import Spinner from "../components/Spinner"
import authService from '../services/auth'
import Alert from "../components/alertService/AlertService";

const Register = () => {
  const { handleLogin, handleLogout } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const HandleRegisterSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    try {
      const user = await authService.signUp({
        name,
        email,
        password
      })

      if (user) {
        handleLogin(user)
        setLoading(false)
        history.push("/admin")
      }
    } catch (e) {
      Alert.error("Ocurrió un error :(")
      setLoading(false)
    }
  }


  return (
    <>
      {
        loading
          ? <Spinner />
          : <Col lg="6" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Sign up with credentials</small>
                </div>
                <Form role="form">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        placeholder="Name"
                        type="text"
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
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
                    <Button className="mt-4"
                      color="primary"
                      type="button"
                      onClick={HandleRegisterSubmit}>
                      Create account
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
      }

    </>
  );
};

export default Register;
