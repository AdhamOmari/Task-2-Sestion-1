import React, { Component } from 'react'
import { Card, Button, Modal } from 'react-bootstrap';

export class SelectedBeast extends Component {
    render() {
        return (
            <>
           
            <Modal show = {this.props.showData}>
                <Modal.Header >
                    <Modal.Title>{this.props.modalData.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Card onClick={this.changeClicks} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.modalData.image_url} />
                        <Card.Body>
                        
                            <Card.Text>
                                {this.props.modalData.description}
                            </Card.Text>

                            
                        </Card.Body>
                    </Card>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick= {this.props.handelClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}

export default SelectedBeast
