import React, { Component } from 'react';



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
            <div>
                <h2>{this.props.title}</h2>
                <img onClick={this.changeClicks} src={this.props.image_url} alt={this.props.title}></img>
                <p>{this.props.description}</p>
                <img src="https://cdn0.iconfinder.com/data/icons/communication-183/80/like-512.png" width="50px" height="50px" ></img>
                <span>{this.state.clicks}</span>

            </div>
        )
    }
}
export default HornedBeasts