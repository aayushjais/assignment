import React, { useState } from "react";
import { UserDetails } from "./UserDetails.js";
import users from "./UserList.js";
import Box from '@mui/material/Box';

function UserCards(props) {

  const [isListVisible, setisListVisible] = useState(true);
  const [userId, setuserId] = useState("")

  const handleShowDetails = (user, i) => {
    setisListVisible(false);
    setuserId(user.id - 1)
  };
  const handleGoBack = () => {
    setisListVisible(true)
  };
  return (
    <div>
      {isListVisible ? (
        <div className="Userlist">
          {users.map((user, i) => (
            <Box key={i} onClick={() => handleShowDetails(user, i)}
              sx={{
                width: 300,
                height: 80,
                borderRadius: 10,
                justifyItem: "center",
                cursor: 'pointer',
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              mt={2}
            >
              <div style={{ textAlign: "center" }}>
                Name:<b>{user.name}</b><br />
                Email:<b>{user.email}</b><br />
                Country:<b>{user.address.city}</b>
              </div>
            </Box>
          ))}
        </div>
      ) : (
        <UserDetails users={users} userId={userId} goBack={handleGoBack} />
      )}
    </div>
  );
}


export default UserCards;
