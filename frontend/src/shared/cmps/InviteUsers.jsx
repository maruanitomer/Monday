import { useEffect, useState } from "react";
import { userService } from "../../modules/user/service/userService";

export const InviteUsers = ({ board, onEditBoard }) => {
  const [usernames, setUsernames] = useState(null);
  const [usernameToDelete] = useState(userService.getLoggedinUser());
  const OnSetUsernames = () => {
    useEffect(() => {
      const getUsernames = async () => {
        try {
          let users = await userService.getUsernames();
          users = users.filter((user) => user !== usernameToDelete.username);
          setUsernames(users);
        } catch { }
      };
      getUsernames();
    }, []);
  };
  OnSetUsernames();

  const onInvite = (user) => {
    console.log(user)
    board.members.push(user)
    onEditBoard()
  }

  return (
    <div className="flex column align-center" style={{ backgroundColor: "salmon" }}>
      <div>
        {usernames &&
          usernames.map((username) => {
            return <button key={username} onClick={() => onInvite(username)}>{username}</button>;
          })}
      </div>
    </div>
  );
};
