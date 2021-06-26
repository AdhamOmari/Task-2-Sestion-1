import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import beastsData from './data.json';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast ';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hornsData: beastsData,
      show: false,
      modalData: {},
    }
  }

  hanelShow = (data) => {
    this.setState({
      show: true,
      modalData: data,
    })
  }
  handelClose = () => {
    this.setState({
      show: false,
    })
  }
  render() {
    return (
      <>
        <Header />
        <Main selectedModel={this.hanelShow} data={this.state.hornsData} />
        <SelectedBeast handelClose={this.handelClose} showData={this.state.show} modalData={this.state.modalData} />
        <Footer />
      </>


    )
  }
}
export default App
