import react, {Component} from 'react';
import {Form} from 'semantic-ui-react';


export default class ApplicationQualify extends Component {
    render(){
        return(
            <div>
                <Form.Field>
                <label>자격증명</label>
                <input placeholder='자격증명' name='qualiName' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>자격번호</label>
                <input placeholder='자격번호' name='qualiNumber' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                <label>발급기관</label>
                <input placeholder='발급기관' name='qualiOrg' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>취득일자</label>
                <input placeholder='취득일자' name='qualiyStaDate' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
                <Form.Field>
                <label>종료일자</label>
                <input placeholder='종료일자' name='qualiyEndDate' onChange={function(e){
                    this.props.onChange(e.target);
                }.bind(this)}/>
                </Form.Field>
            </div>
        )
    }
}