import { useEffect, useState } from "react";
import axios from "axios";
import LoadingWrapper from "./LoadingWrapper";

const UsersWithHOC = () => {
  const [userList, setUserList] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const products = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUserList(products.data);
        setIsLoadingUsers(false);
      } catch (err) {
        console.log("Err: ", err);
        setIsLoadingUsers(false);
        setUserList([]);
      }
    })();
  }, []);

  return (
    <LoadingWrapper
      isLoading={isLoadingUsers}
      message={"No Users Available"}
      data={userList}
    >
      <h1>My Users</h1>
      <ul>
        {userList.map((user) => {
          return (
            <li key={user.id}>
              {user.name} | {user.email}
            </li>
          );
        })}
      </ul>
    </LoadingWrapper>
  );
};

export default UsersWithHOC;
