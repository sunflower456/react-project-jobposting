import react, {Component} from 'react';
import {Container,Segment, Visibility, Menu, Button} from 'semantic-ui-react';

export default class MenuBar extends Component {

    render(){
        return(
            <div>

            <Visibility
                once={false}
                >
                <Segment
                    inverted
                    textAlign='center'
                    style={{padding: '1em 0em' }}
                    vertical
                >
                    <Menu
                    inverted={true}
                    pointing={true}
                    secondary={true}
                    >
                    <Container>
                        <Menu.Item as='a' active>
                        Home
                        </Menu.Item>
                        <Menu.Item as='a'>Work</Menu.Item>
                        <Menu.Item as='a'>Company</Menu.Item>
                        <Menu.Item as='a'>Careers</Menu.Item>
                        <Menu.Item position='right'>
                        <Button as='a' inverted={true}>
                            Log in
                        </Button>
                        <Button as='a' inverted={true} primary={false} style={{ marginLeft: '0.5em' }}>
                            Sign Up
                        </Button>
                        </Menu.Item>
                    </Container>
                    </Menu>
                </Segment>
                </Visibility>
            </div>
        )
    }
}