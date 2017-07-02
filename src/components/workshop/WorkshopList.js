import React, { Component } from 'react'
import View from '../layout/View'

class WorkshopList extends Component {

  render(){
    return(
      <View style={{ display: 'flex' }}>
        <View>
          { this.props.workshopList.map(workshop => (
            <ListItem key={workshop.title} style={{color: "black"}}
              primaryText={workshop.instructors.name} }
              leftIcon={<ActionGrade color={pinkA200} />}
              rightAvatar={<Avatar src={`images/${workshop.instructors.avator}`} />}
            />
          ))}
        </View>
      </View>
    );
  }
}

export default WorkshopList
