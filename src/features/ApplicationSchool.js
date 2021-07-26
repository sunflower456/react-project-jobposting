import react, {Component} from 'react';
import {Form} from 'semantic-ui-react';


export default class ApplicationSchool extends Component {
    render(){
        return(
            <div>
                <Form.Field>
                <label>조직명</label>
                <input placeholder='조직명' name='orgName' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>시작일</label>
                <input placeholder='시작일' name='orgStaDate' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                <label>종료일</label>
                <input placeholder='종료일' name='orgEndDate' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>전공</label>
                <input placeholder='전공' name='schoolMajor' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>조직구분</label>
                <input placeholder='조직구분' name='schoolStatus' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>맡은 역할</label>
                <input placeholder='맡은 역할' name='jobTask' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
            </div>
        )
    }
}