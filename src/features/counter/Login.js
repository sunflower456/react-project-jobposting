import react, {Component} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default class Login extends Component {
    state = {
        identity : '',
        password : ''
    }
    render(){
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='primary' textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='ID' 
                                    onChange={e => this.setState({identity:e.target.value})}/>
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            onChange={e => this.setState({password:e.target.value})}
                        />
                        <Button color='primary' fluid size='large' onClick={function(){
                            fetch('http://localhost:8080/users/login', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    'identity' : this.state.identity,
                                    'password' : this.state.password
                                })
                            })
                            .then(function(result){
                                return result.json();
                            }).then(function(json){
                                console.log(json.data);
                            }.bind(this));
                        }.bind(this)}>
                            Login
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='/signup'>Sign Up</a>
                    </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}