import { useEffect, useState } from "react";
import { userService } from "../../modules/user/service/userService";

export const InviteUsers = () => {
  const [usernames, setUsernames] = useState(null);
  const [usernameToDelete] = useState(userService.getLoggedinUser());
  const OnSetUsernames = () => {
    useEffect(() => {
      const getUsernames = async () => {
        try {
          let users = await userService.getUsernames();
          users = users.filter((user) => user !== usernameToDelete.username);
          setUsernames(users);
        } catch {}
      };
      getUsernames();
    }, []);
  };
  OnSetUsernames();

  return (
    <div className="flex column align-center" style={{ backgroundColor: "salmon" }}>
      <div>
        {usernames &&
          usernames.map((user) => {
            return <button key={user}>{user}</button>;
          })}
      </div>
    </div>
  );
};
