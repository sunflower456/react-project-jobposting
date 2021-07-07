import react,{Component} from 'react';
import { Button, Form, Grid, Header, Message, Segment , Icon} from 'semantic-ui-react'


export default class SignUp extends Component {
    render(){
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Sign Up
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='ID' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='name' />
                        <Form.Input fluid iconPosition='left' placeholder='Email'>
                            <Icon name='at' />
                                <input />
                        </Form.Input>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='phone number'>
                            <Icon name='phone' />
                                <input />
                        </Form.Input>
                        <Button color='teal' fluid size='large'>
                            Login
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