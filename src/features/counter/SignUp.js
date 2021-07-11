import react,{Component} from 'react';
import { Button, Form, Grid, Header, Message, Segment , Icon} from 'semantic-ui-react'


export default class SignUp extends Component {
    state = {
        identity : "",
        password : "",
        name : "",
        email : "",
        phoneNumber : ""
    }
    render(){
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='primary' textAlign='center'>
                        Sign Up
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='ID' name='identity' onChange={function(e){
                            this.setState({ identity : e.target.value });
                        }.bind(this)}/>
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            name='password'
                            onChange={function(e){
                                this.setState({password:e.target.value});
                            }.bind(this)}
                        />
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='name' name='name' onChange={function(e){
                            this.setState({name:e.target.value});
                        }.bind(this)}/>
                        <Form.Input fluid iconPosition='left' placeholder='Email' name='email' onChange={function(e){
                            this.setState({email:e.target.value});
                        }.bind(this)}>
                            <Icon name='at' />
                                <input />
                        </Form.Input>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='phone number' name='phonenumber' onChange={function(e){
                            this.setState({phoneNumber:e.target.value});
                        }.bind(this)}>
                            <Icon name='phone' />
                                <input />
                        </Form.Input>
                        <Button color='primary' fluid size='large' onClick={function(){
                            
                            fetch('http://localhost:8080/users', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    'identity' : this.state.identity,
                                    'password' : this.state.password,
                                    'name' : this.state.name,
                                    'email' : this.state.email,
                                    'phoneNumber' : this.state.phoneNumber,
                                    'userStatus' : 'NORMAL'
                                })
                            })
                            .then(function(result){
                                return result.json();
                            }).then(function(json){
                                console.log('success');
                            }.bind(this));


                        }.bind(this)}>
                            Sign In
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already in ? <a href='/'>Sign In</a>
                    </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}