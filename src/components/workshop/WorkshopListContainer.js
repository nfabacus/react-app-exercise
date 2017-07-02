import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import WorkshopList from './workshopList'

class WorkshopListContainer extends Component {
  constructor(){
    super()
    this.state= {
      workshopList: []
    }
  }

  componentDidMount() {
    fetch('/data/workshops.js', {
      method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({ workshopList: data })
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    return (
      <WorkshopList workshopList={this.state.workshopList}/>
    );
  }
}

export default WorkshopListContainer
