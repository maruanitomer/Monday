import {  TextField } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useEffect, useState } from "react";
import { userService } from "../../modules/user/service/userService";

export const InviteUsers = ({ board, onEditBoard }) => {
  const [usernames, setUsernames] = useState(null);
  const [usernameToDelete] = useState(userService.getLoggedinUser());
  const [filter,setFilter] = useState('')
    useEffect(() => {
      const getUsernames = async () => {
        try {
          let users = await userService.getUsernames(filter);
          users = users.filter((user) => user !== usernameToDelete.username);
          setUsernames(users);
        } catch { }
      };
      getUsernames();
    }, [filter,usernameToDelete]);
  

  const onInvite = (user) => {
    board.members.push(user)
    onEditBoard()
  }


  const inputHandler = (ev) => {
    setFilter(ev.target.value);
  };

  return (

    <div className="user-list-container">
      <TextField
        label="Username"
        InputProps={{
          startAdornment: (
              <AccountCircle />
          ),
        }}
        onClick={(ev) => ev.stopPropagation()}
        onChange={inputHandler}
      />
      <div className="flex column align-center user-list" >
        {usernames &&
          usernames.map((username) => {
            return <button key={username} onClick={() => onInvite(username)}>{username}</button>;
          })}
      </div>
    </div>
  );
};
