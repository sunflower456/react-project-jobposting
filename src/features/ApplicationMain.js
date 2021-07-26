import react, {Component} from 'react';
import {Container,Icon,Header,Form,Button} from 'semantic-ui-react';
import MenuBar from './MenuBar';
import Footer from './Footer';
import ApplicationBasic from './ApplicationBasic';
import ApplicationSchool from './ApplicationSchool';
import ApplicationQualify from './ApplicationQualify';
import ApplicationIntroduce from './ApplicationIntroduce';

export default class ApplicationMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            uri : this.props.location.state.uri,
            title : this.props.location.state.title,
            applicationTag : <ApplicationBasic onChange={function(value){
                this.setState({basic:{...this.state.basic, [value.name]:value.value}, status:'basic'})
            }.bind(this)}/>,
            posts : {},
            basic : {},
            school : {},
            qualify : {},
            appId : '',
            basicMethod : '',
            schoolMethod : '',
            questions : []
            
        }
    }

    // click 'tempSave' button
    tempSaveApplication(){

        console.log(this.state.appId);

        if(this.state.status == 'basic'){
            // basic
            // 1. save application table
            fetch('http://localhost:8080/apps', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'post_app_id' : this.state.uri,
                    'user_app_id' : '1'
                })
            })
            .then(function(result){
                // 2. get application id
                return result.json();
            }).then(function(json){
                this.setState({appId:json});
                // 3. save basicInfo table

                fetch('http://localhost:8080/apps/basic', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'applicationId' : this.state.appId,
                        'address': this.state.basic.address,
                        'englishName': this.state.basic.englishName,
                        'name': this.state.basic.name,
                        'nation': this.state.basic.nation,
                        'phoneNumber': this.state.basic.phoneNumber
                    })
                })
                .then(function(result){
                    return null;
                }).then(function(json){
                    // tempSave -> not change tag
                    alert('저장되었습니다.');
                }.bind(this));
            }.bind(this)); 
        } else if (this.state.status === 'school'){
            
            fetch('http://localhost:8080/apps/school', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'applicationId' : this.state.appId,
                    'jobTask': this.state.school.jobTask,
                    'orgName': this.state.school.orgName,
                    'schoolMajor': this.state.school.schoolMajor,
                    'schoolStatus': "HIGH"
                })
            })
            .then(function(result){
                return null;
            }).then(function(json){
                // tempSave -> not change tag
                alert('저장되었습니다.');
            }.bind(this));

        }
        
    }


    // click 'next' button
    saveNextApplication(){
        console.log(this.state.appId);

        if(this.state.status == 'basic'){
            // basic

            // 1. save application table
            fetch('http://localhost:8080/apps', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'post_app_id' : this.state.uri,
                    'user_app_id' : '1'
                })
            })
            .then(function(result){
                // 2. get application id
                return result.json();
            }).then(function(json){
                this.setState({appId:json});
                // 3. save basicInfo table

                fetch('http://localhost:8080/apps/basic', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'applicationId' : this.state.appId,
                        'address': this.state.basic.address,
                        'englishName': this.state.basic.englishName,
                        'name': this.state.basic.name,
                        'nation': this.state.basic.nation,
                        'phoneNumber': this.state.basic.phoneNumber
                    })
                })
                .then(function(result){
                    return null;
                }).then(function(json){
                    // 4. change tag
                    this.setState({applicationTag : <ApplicationSchool onChange={function(value){
                        this.setState({school:{...this.state.school, [value.name]:value.value}, status:'school'})
                    }.bind(this)}/>})

                    alert('저장되었습니다.');
                }.bind(this));
            }.bind(this));    
        } else if(this.state.status == 'school'){

            fetch('http://localhost:8080/apps/school', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'applicationId' : this.state.appId,
                    'jobTask': this.state.school.jobTask,
                    'orgName': this.state.school.orgName,
                    'schoolMajor': this.state.school.schoolMajor,
                    'schoolStatus': "HIGH"
                })
            })
            .then(function(result){
                return null;
            }).then(function(json){
                this.setState({applicationTag : <ApplicationQualify onChange={function(value){
                    this.setState({qualify:{...this.state.qualify, [value.name]:value.value}, status:'qualify'})
                }.bind(this)}/>})
                alert('저장되었습니다.');
            }.bind(this));   
        } else if (this.state.status == 'qualify'){

            fetch('http://localhost:8080/apps/qualify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "applicationId": this.state.appId,
                    "qualiEndDate": "2021-07-23T10:53:14.636Z",
                    "qualiName": this.state.qualify.qualiName,
                    "qualiNumber": this.state.qualify.qualiNumber,
                    "qualiOrg": this.state.qualify.qualiOrg,
                    "qualiStaDate": "2021-07-23T10:53:14.636Z"
                })
            })
            .then(function(result){
                return null;
            }).then(function(json){
                fetch('http://localhost:8080/posts/'+this.state.uri)
                .then(function(result){
                    return result.json();
                }).then(function(json){
                    this.setState({questions:json.data[0].questions});
                    this.setState({applicationTag : <ApplicationIntroduce questions={this.state.questions} 
                        onChange={function(value){
                        this.setState({qualify:{...this.state.qualify, [value.name]:value.value}, status:'introduce'})
                    }.bind(this)}/>})
                    alert('저장되었습니다.');
                }.bind(this));
            }.bind(this));   
        }
    }
    render(){
        return(
            <div>
            <MenuBar />
            <Container text style={{ marginTop: '7em' }}>
            <Header as='h1' textAlign="center">{this.state.title + ' 입사지원'}</Header>
            <Form>
                {this.state.applicationTag}
                <br/><br/>
                <Button type='tempSave' onClick={function(){
                    this.tempSaveApplication();
                }.bind(this)}>임시저장</Button>
                <Button type='nextSave' onClick={function(e){
                    this.saveNextApplication();
                }.bind(this)}>다음</Button>
            </Form>
            </Container>
            <Footer />
            </div>
        )
    }
}
 