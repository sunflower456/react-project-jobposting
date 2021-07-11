import react, {Component} from 'react';
import {Container,Divider,Icon,Grid,Header,List,Table,Segment, Visibility, Menu, Button} from 'semantic-ui-react';
import MenuBar from './MenuBar';
export default class PostingDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            uri : props.match.params.id,
            posts : {
                annoStaDate : '',
                annoEndDate : ''
            }
        }
    }

    componentDidMount(){

        fetch('http://localhost:8080/posts/'+this.state.uri)
        .then(function(result){
            return result.json();
        }).then(function(json){
            this.setState({posts:json.data[0]});
        }.bind(this));
    }


    render(){
        var codes = this.state.posts.desc;
        return (
            <div>
            <MenuBar />
            <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>{this.state.posts.title}</Header>
            <Table>
                <Table.Body>
                <Table.Row>
                    <Table.Cell collapsing textAlign='center' width='3'>
                    <Icon name='folder' />
                    {this.state.posts.jobKind}
                    </Table.Cell>
                    <Table.Cell  textAlign='center'  width='3'>
                        {this.state.posts.postStatus}
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                        {this.state.posts.annoStaDate.substring(0,10) + ' ~ ' + this.state.posts.annoEndDate.substring(0,10)}
                    </Table.Cell>
                    <Table.Cell textAlign='center' width='3'>D - 11</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>  
            </Container>
            <Container text style={{ marginTop: '7em' }}>
                <p><div dangerouslySetInnerHTML={ {__html: codes} }></div></p>
            </Container>
            <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
                <Grid divided inverted stackable>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 1' />
                    <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 2' />
                    <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 3' />
                    <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Header inverted as='h4' content='Footer Header' />
                    <p>
                    Extra space for a call to action inside the footer that could help re-engage users.
                    </p>
                </Grid.Column>
                </Grid>

                <Divider inverted section />
                <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    Site Map
                </List.Item>
                <List.Item as='a' href='#'>
                    Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                    Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                    Privacy Policy
                </List.Item>
                </List>
            </Container>
            </Segment>
            </div>
        )
    }
}