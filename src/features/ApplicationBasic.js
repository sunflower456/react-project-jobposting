import react, {Component} from 'react';
import {Form} from 'semantic-ui-react';


export default class ApplicationBasic extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Form.Field>
                <label>성명</label>
                <input placeholder='성명' name='name' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>영문 성명</label>
                <input placeholder='영문성명' name='englishName' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>주소</label>
                <input placeholder='주소' name='address' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>전화 번호</label>
                <input placeholder='전화 번호' name='phoneNumber'  onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>국가</label>
                <input placeholder='국가' name='nation' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
            </div>
        )
    }
}