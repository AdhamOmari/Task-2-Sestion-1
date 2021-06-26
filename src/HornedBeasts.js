import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberCliks: 0,

        }
    }
    changeClicks = () => {
        this.setState({
            numberCliks: this.state.numberCliks + 1,
        })
    }
    buttonToClik = () => {
        let data = {
            title: this.props.title,
            image_url: this.props.image_url,
            description: this.props.description,
        }

        this.props.showModal(data)
    }


    render() {
        return (
            <Col xs={12} md={6} sm={9} xl={4} style={{ paddingTop: "10vh", paddingLeft: "10vh" }}>
                <Card style={{ width: '50%', height: '50%' }}>
                    <Card.Img onClick={this.changeClicks} variant="" src={this.props.image_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title >{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button variant="danger" onClick={this.buttonToClik}>open</Button>
                        <img src="https://cdn0.iconfinder.com/data/icons/communication-183/80/like-512.png" width="50px" height="50px"></img>
                        <span>{(this.state.numberCliks)}</span>

                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
export default HornedBeasts