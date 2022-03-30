import React, {useRef, useState} from 'react';
import { signup, useAuth, login } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form, Container } from 'react-bootstrap';


export default function Signup() {

    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
  

  async function handleSignup() {
    
    setLoading(true);
    try {
     
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/');

    } catch {
      alert("Email in a proper form: xxx@123.com and password at least 6 characters");
    }
    setLoading(false);
  }

  async function handleLogin() {
    
    setLoading(true);
    try {
     
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/');

    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

 

    return (

            <div style={{background:'linear-gradient(to right, rgb(0, 35, 117), rgb(32, 94, 238))'}}>
              <Container className="d-flex align-items-center justify-content-center"
                style={{minHeight: "100vh"}} > 
              <div className="w-100" style={{maxWidth:"400px"}}>  

              <Card> 
                <Card.Body>
                 <h2 className="text-center mb-4"> Sign Up </h2>
                <Form> 
                    <Form.Group id="email"> 
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" required />
                    </Form.Group>

                    <Form.Group id="password"> 
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" required />
                    </Form.Group>
                </Form>


                <Button className="w-50 " type="submit" id="signup" disabled={loading || currentUser} onClick={handleSignup}>Sign up</Button> 
                <Button className="w-50 " type="submit" id="login" disabled={loading || currentUser} onClick={handleLogin}>Log in</Button> 
                </Card.Body>
              </Card>

                 

              

              </div>
              </Container>
            </div>
            )
}



