import React from 'react'
import './list.css'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader
  } from 'mdb-react-ui-kit';


function List(props){
    return(
      <div dept="list-item">
          <MDBCard alignment='center'>
      <MDBCardHeader>{props.dept}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{props.name}</MDBCardTitle>
        <MDBCardText>{props.contact}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
      </div>
    )
}

export default List