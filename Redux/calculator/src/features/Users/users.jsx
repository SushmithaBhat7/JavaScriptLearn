import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../Users/users.Slice";
import { Navigate, useNavigate } from "react-router-dom";
import "./users.css";

const UsersList = () => {
  const users = useSelector((state) => state.myUsers);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  const handleOnclick = (user) => {
    navigate(`/${user.id}`);
  };

  return (
    <div className="userList">
      {users.isLoading && <h1>Loading..!!</h1>}

      {Array.isArray(users.data) &&
        users.data.map((user) => {
          return (
            <div key={user.id}>
              <div className="users" onClick={() => handleOnclick(user)}>
                {user.name}
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default UsersList;
