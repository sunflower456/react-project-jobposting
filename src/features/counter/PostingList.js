import react, {Component} from 'react';
import {Button,Container,Divider,Form,Grid,Header,Icon,Menu, Message, Item, Table} from "semantic-ui-react";
import '../../App.css';
import MenuBar from './MenuBar';
export default class PostingList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }

    componentDidMount(){

        fetch('http://localhost:8080/posts')
        .then(function(result){
            return result.json();
        }).then(function(json){
            this.setState({posts:this.state.posts.concat(json.data)});
        }.bind(this));
    }

    render(){
        return (
            <div>
                <MenuBar />
                <Message size="massive">
                    <Container>
                        <Header size="huge" as="h1" className='title_header'>
                        Hongcha Co. 채용 정보
                        </Header>
                    </Container>
                </Message>
                <Container>
                <Item.Group divided>
                        <Table color='blue'>
                        <Table.Header>
                            <Table.Row>
                            <Table.HeaderCell textAlign='center'>직군</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>채용공고</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>마감일자</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>D-Day</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>상태</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>상세</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                    {this.state.posts.map(post => (
                        <Table.Body key={post.id}>
                            <Table.Row key={post.id}>
                            <Table.Cell textAlign='center'>{post.jobKind}</Table.Cell>
                            <Table.Cell width='7' textAlign='center'><h4>{post.title}</h4></Table.Cell>
                            <Table.Cell textAlign='center'>{post.annoEndDate.substring(0, 10)}</Table.Cell>
                            <Table.Cell textAlign='center'>D - 11</Table.Cell>
                            <Table.Cell textAlign='center'>{post.postStatus}</Table.Cell>
                            <Table.Cell textAlign='center'>
                                <Button primary size='small' data-index={post.id} onClick={function(e){
                                    this.props.history.push('/posts/'+e.target.getAttribute('data-index'));
                                }.bind(this)}>상세보기 &raquo;</Button>
                            </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}

                </Table>
                </Item.Group>
                    <Divider hidden />
                    <Divider />
                    <footer>&copy; 2017 Company, Inc.</footer>
                </Container>
            </div>
        )
    }
}