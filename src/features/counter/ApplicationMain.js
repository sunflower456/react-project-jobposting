import react, {Component} from 'react';
import {Container,Icon,Header,Form,Button} from 'semantic-ui-react';
import MenuBar from './MenuBar';
import Footer from './Footer';
export default class ApplicationMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            uri : this.props.location.state.uri,
            title : this.props.location.state.title,
            basic : {}
        }
    }
    render(){
        var basicArray = [];
        return(
            <div>
            <MenuBar />
            <Container text style={{ marginTop: '7em' }}>
            <Header as='h1' textAlign="center">{this.state.title + ' 입사지원'}</Header>
            <Form>
                <Form.Field>
                <label>성명</label>
                <input placeholder='성명' onChange={function(e){
                    this.setState({basic:{...this.state.basic, name : e.target.value}})
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>영문 성명</label>
                <input placeholder='영문성명'  onChange={function(e){
                    this.setState({basic : {...this.state.basic, englishName:e.target.value}})
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>주소</label>
                <input placeholder='주소'  onChange={function(e){
                    this.setState({basic : {...this.state.basic, address:e.target.value}})
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>전화 번호</label>
                <input placeholder='전화 번호'  onChange={function(e){
                    this.setState({basic : {...this.state.basic, phoneNumber:e.target.value}})
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>국가</label>
                <input placeholder='국가'  onChange={function(e){
                    this.setState({basic : {...this.state.basic, nation:e.target.value}})
                }.bind(this)}/>
                </Form.Field>
                <br/><br/>
                <Button type='tempSave' onClick={function(){
                    basicArray.push(this.state.basic);
                    fetch('http://localhost:8080/apps', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            'post_app_id' : this.state.uri,
                            'user_app_id' : '1',
                            'basicInfos' : basicArray
                        })
                    })
                    .then(function(result){
                        return null;
                    }).then(function(json){
                        alert('저장되었습니다.');
                    }.bind(this));

                }.bind(this)}>임시저장</Button>
                <Button type='nextSave'>다음</Button>
            </Form>
            </Container>
            <Footer />
            </div>
        )
    }
}
 