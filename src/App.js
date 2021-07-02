import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import beastsData from './data.json';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast ';
import FormHorns from './FormHorns';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hornsData: beastsData,
      show: false,
      modalData: {},
      honsFelter:beastsData
    }
  }

  formFilter =(item)=>{
    this.setState({
      honsFelter:item
    })
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
        <FormHorns hornsData={this.state.hornsData} formFilter= {this.formFilter} />
        <Main selectedModel={this.hanelShow} data={this.state.honsFelter} />
        <SelectedBeast handelClose={this.handelClose} showData={this.state.show} modalData={this.state.modalData} />
        <Footer />
        
      </>


    )
  }
}
export default App
