import { render } from "@testing-library/react";
import React from "react";

export default class TaskList extends React.Component {
render() {
    let guests = this.props.guests;
    return (  <ul>
          {guests.map(guest => 
              <li>{guest.name} traerá {guest.food} </li>
          ) }
    </ul>    
    )
}
}
