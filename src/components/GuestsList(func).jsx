import React from "react";

function GuestsList(props){
    let guests = props.guests;
    return (  <ul>
          {guests.map(guest => 
              <li>{guest.name}{guest.invited ? " " : " no "} está invitadx a la fiesta</li>
          ) }
    </ul>
        
    )
}
export default GuestsList;