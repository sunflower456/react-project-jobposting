import react, {Component} from 'react';
import {  Button, Container,Grid,Header,Image,Segment, Card} from "semantic-ui-react";
import '../App.css';
import Slider from "react-slick";
import MenuBar from './MenuBar';
export default class PostingMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }

    componentDidMount(){

        fetch('http://localhost:8080/posts/main')
        .then(function(result){
            return result.json();
        }).then(function(json){
            this.setState({posts:this.state.posts.concat(json.data)});
        }.bind(this));
    }
    render(){
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div className="App">
                <MenuBar />
                <Slider className="slide" {...settings}>
                    
                    <Segment inverted vertical textAlign="center" className="slider-segment-1">
                    
                    <Container text className="active">
                    <Header inverted as="h1">
                        Hongcha co. Tech 전직군 채용중
                    </Header>
                    <p>
                        지금 바로 아래 링크에서 지원하세요 !
                    </p>
                    <Button primary size="huge">
                        지원하기
                    </Button>
                    </Container>
                </Segment> 
                <Segment inverted vertical textAlign="center" className="slider-segment-2">
                    <Container text className="active">
                    <Header inverted as="h1">
                        Hongcha co. Design 전직군 채용중
                    </Header>
                    <p>
                        지금 바로 아래 링크에서 지원하세요 !
                    </p>
                    <Button primary size="huge">
                        지원하기
                    </Button>
                    </Container>
                </Segment>
                <Segment inverted vertical textAlign="center" className="slider-segment-3">
                    <Container text className="active">
                    <Header inverted as="h1">
                        Hongcha co. AI 전직군 채용중
                    </Header>
                    <p>
                        지금 바로 아래 링크에서 지원하세요 !
                    </p>
                    <Button primary size="huge">
                        지원하기
                    </Button>
                    </Container>
                </Segment> 
                </Slider>
                <Container>
                <Segment vertical>
                    <Grid container stackable textAlign="center" columns={3}>
                    {this.state.posts.map(post => (
                        <Grid.Column key={post.id}>
                        <Card>
                            <Card.Content header={post.title} textAlign='center' className="cardcontent1"/>
                            <Card.Content description={post.annoStaDate + ' ~ ' + post.annoEndDate} />
                            <Card.Content description='D - 22' />
                            <Card.Content extra>
                            <Button primary>지원하기 &raquo;</Button>
                            </Card.Content>
                        </Card>
                        </Grid.Column>
                    ))}
                    </Grid>
                    <br/><br/>
                    <Button primary floated='right' onClick={function(){
                        this.props.history.push('/posts');
                    }.bind(this)}>
                        공고 더보기 &raquo;
                    </Button>
                </Segment>
                <Segment vertical>
                    <Grid stackable>
                    <Grid.Column width={10}>
                        <Header as="h1">
                        First featurette heading.{" "}
                        <span className="sub">It'll blow your mind.</span>
                        </Header>
                        <p>
                        Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                        id ligula porta felis euismod semper. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                        ac cursus commodo.
                        </p>
                    </Grid.Column>
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid stackable>
                    <Grid.Column width={10}>
                        <Header as="h1">
                        Oh yeah, <span className="sub">it's that good.</span>
                        </Header>
                        <p>
                        Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                        id ligula porta felis euismod semper. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                        ac cursus commodo.
                        </p>
                    </Grid.Column>
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid stackable>
                    <Grid.Column width={10}>
                        <Header as="h1">
                        And lastly, <span className="sub">this one.</span>
                        </Header>
                        <p>
                        Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                        id ligula porta felis euismod semper. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                        ac cursus commodo.
                        </p>
                    </Grid.Column>
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid columns={2}>
                    <Grid.Column>
                        &copy; 2017 Company, Inc. · <a href="#root">Privacy</a> ·{" "}
                        <a href="#root">Terms</a>
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                        <a href="#root">Back to top</a>
                    </Grid.Column>
                    </Grid>
                </Segment>
                </Container>
            </div>
        )
    }
}