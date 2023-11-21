import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../Users/users.Slice";

const UsersList = () => {
  const users = useSelector((state) => state.myUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  return (
    <div>
      {users.isLoading && <h1>Loading..!!</h1>}

      {Array.isArray(users.data) &&
        users.data.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
};
export default UsersList;
