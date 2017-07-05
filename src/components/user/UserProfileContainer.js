import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import UserProfile from './UserProfile'
// import { Route } from 'react-router-dom'

class UserProfileContainer extends Component {
  constructor() {
    super()
    this.state = { user: null }
  }

  componentDidMount() {
    console.log("params: ", this.props.match)
    this.fetchUser(this.props.match.params.username)
  }

  fetchUser(username) {
    fetch(`/data/users/${username}.json`, {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({user : data})
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {

    const { match, history } = this.props
    return (
      //you need to render the UserList component and pass the users
      <UserProfile fetchUser={ this.fetchUser.bind(this)} user={this.state.user} match={match} history={history}/>
    )
  }
}

export default UserProfileContainer
