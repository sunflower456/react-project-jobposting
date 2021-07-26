import react, {Component} from 'react';
import {Container,Icon,Header,Table,Button} from 'semantic-ui-react';
import MenuBar from './MenuBar';
import Footer from './Footer';
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
                <br/><br/>
                <Button primary floated='right' onClick={function(){
                    this.props.history.push({
                        pathname : '/appl',
                        state : {
                            uri : this.state.uri,
                            title : this.state.posts.title
                        }
                    });
                }.bind(this)}>지원하기</Button>
            </Container>
            
            <Footer />
            </div>
        )
    }
}