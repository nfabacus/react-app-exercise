import React, { Component } from 'react'

import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import { pinkA200 } from 'material-ui/styles/colors'

import View from '../layout/View'


class WorkshopList extends Component {

  render(){
    console.log("this.props.workshopList:", this.props.workshopList)
    return(
      <View style={{ display: 'flex' }}>
        <View>
          { this.props.workshopList.map(workshop => (
            <ListItem key={workshop.title} style={{color: "black"}}
              primaryText={workshop.title}
              leftIcon={<ActionGrade color={pinkA200} />}
              rightAvatar={<Avatar src={`images/${workshop.instructors[0].avator}`} />}
            />
          ))}
        </View>
      </View>
    );
  }
}

export default WorkshopList
