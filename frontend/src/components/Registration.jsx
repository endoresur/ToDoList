import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Input, Container, Button} from "reactstrap";

function Registration() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const addUser = () => {
        fetch('/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
            .then((res) => res.json())
            .catch((err) => console.log('error'))
    }

    return (
        <Container>
            <Form className="w-25">
                <Container>
                    <label htmlFor='username'>Username</label>
                    <Input type='username' id='username' value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                </Container>
                <Container>
                    <label htmlFor='password'>Password</label>
                    <Input type='password' id='password' value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </Container>
                <Button onClick={(e) => addUser()}>Log in</Button>
            </Form>
        </Container>
    );
}

export default Registration;
