import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import { pinkA200 } from 'material-ui/styles/colors'
// import withWidth from 'material-ui/utils/withWidth'

import { Route } from 'react-router-dom'

import View from '../layout/View'
import UserProfileContainer from './UserProfileContainer'

const UserList = ({ match, history, users })=>{
  const showUserProfile = (user)=>{
    history.push(`/users/${user.username}`)
  }

  return (
    <View style={{ display: 'flex' }}>
      <View>
        { users.map(user => (
          <ListItem
            onClick={showUserProfile(user)} key={user.username} style={{color: "black"}}
            primaryText={ `${user.name.first} ${user.name.last}`}
            leftIcon={<ActionGrade color={pinkA200} />}
            rightAvatar={<Avatar src={`images/${user.username}_sm.jpg`} />}
          />
        ))}
      </View>
      {/* <Route path={`${match.url}/:username`} component={UserProfileContainer} /> */}
    </View>
  )

}


export default UserList

UserList.contextTypes = {
  router: PropTypes.object.isRequired
}
