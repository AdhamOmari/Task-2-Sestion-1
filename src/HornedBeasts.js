import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: props.clicks

        }
    }
    changeClicks = () => {
        this.setState({
            clicks: this.state.clicks + 1,
        })
    }

    render() {
        return (

            <Card onClick={this.changeClicks} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image_url} />
                <Card.Body>
                    <Card.Title >{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>

                    <img src="https://cdn0.iconfinder.com/data/icons/communication-183/80/like-512.png" width="50px" height="50px"></img>
                    <span>{this.state.clicks}</span>

                </Card.Body>
            </Card>

        )
    }
}
export default HornedBeasts