import React, { Component } from 'react'
import WorkshopList from './WorkshopList'

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
    console.log("Workshops: ", this.state.workshopList)
    const { match, history } = this.props
    return (
      <WorkshopList workshopList={this.state.workshopList}  match={match} history={history}/>
    );
  }
}

export default WorkshopListContainer
