import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
export class FormHorns extends Component {


    afterFilter = (e) => {
       let eventData=e.target.value;
       let  data={};
       if (eventData != 'all'){
            data =this.props.hornsData.filter(item=>{
                if(eventData==item.horns)
                return item
            })
       }
       else 
       data=this.props.hornsData;

        this.props.formFilter(data)
        
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" onChange={this.afterFilter }>
                            <option value="all">all</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>

                </Form>
            </div>
        )
    }
}

export default FormHorns
