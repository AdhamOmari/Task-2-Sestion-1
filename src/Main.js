import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import {Row} from 'react-bootstrap'


class Main extends Component {
    render() {
        return (
            <Row>
                {
                    this.props.data.map(item=>{
                        return(
                            <HornedBeasts 
                             title = {item.title}
                             image_url={item.image_url}
                             description= {item.description}
                             showModal= {this.props.selectedModel}
                             />
                        )
                    })
                }



            </Row>
        )
    }
}
export default Main


// beastsData.map((beast, ind) => {
//     return <HornedBeasts clicks={0} title={beast.title} image_url={beast.image_url} description={beast.description} />