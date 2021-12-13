import React, { Component } from "react";
import Card from '@mui/material/Card';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export const UserDetails = props => {
  const { users, userId } = props;
  const download =()=> {

  }
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", marginTop: "200px" }}>
      <Card style={{ height: "200px", width: "400px", backgroundColor: "skyblue"}}>
        <div style={{ textAlign: "center" }}>
          <b>Name:</b>{users[userId].name}<br />
          <b>Email:</b>{users[userId].email}<br />
          <b>Phone:</b>{users[userId].phone}<br />
          <b>City: </b>{users[userId].address.city}<br />
          <b>Details: </b>{users[userId].company.bs}<br />
          <button style={{marginTop:"40px"}}onClick={props.goBack}>Back</button>
          <PictureAsPdfIcon 
          // onClick={download}
          style={{cursor:"pointer"}}
          />
        </div>
      </Card>
    </div>
  );
};
