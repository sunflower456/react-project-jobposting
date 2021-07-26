import react, {Component} from 'react';
import {Form} from 'semantic-ui-react';


export default class ApplicationIntroduce extends Component {
    

    render(){
        console.log(this.props.questions);
        return(
            <div>
                {this.props.questions.map((question, index) => (
                    <Form.Field key={index}>
                    <label>introduce</label>
                    <input placeholder='조직명' name='orgName' onChange={function(e){
                        this.props.onChange(e.target);
                    }.bind(this)}/>
                    </Form.Field>
                ))}
            </div>
        )
    }
}