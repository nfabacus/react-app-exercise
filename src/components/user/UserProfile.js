import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle
} from 'material-ui/Card'

import View from '../layout/View'

class UserProfile extends Component {

  render() {
    let user = this.props.user
    let username = this.props.match.params.username
    if (user && user.username !== username) {
      this.props.fetchUser(username)
    }
    let fullname = ''
    let email = ''

    if (user){
      fullname = `${user.name.title} ${user.name.first} ${user.name.last}`
      email = user.email
    }

    return (
      <View>
        <Card>
          <CardHeader
            title={fullname}
            subtitle={username}
            avatar={`/images/${username}_sm.jpg`}
          />
          <CardMedia
            overlay={<CardTitle title={email} />}
          >
            <img alt={username} src={`/images/${username}_lg.jpg`} />
          </CardMedia>
          <CardActions />
        </Card>
      </View>
    )
  }
}

UserProfile.propTypes = {
  match: PropTypes.object.isRequired
}

export default UserProfile
