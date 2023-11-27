import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsersDetailList } from "./userDetails.Slice";

const UserDetails = () => {
  const { id } = useParams();
  const userDetails = useSelector((state) => state.myUserDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersDetailList({ id }));
  }, [dispatch, id]);
  console.log("userDetails :", userDetails);
  return (
    <>
      <h1>User Details</h1>
      <div>Hi Im User Details</div>
      <h2>{id}</h2>
      {userDetails.isLoading === true ? (
        <h1>Loading ..!!</h1>
      ) : (
        <div key={userDetails?.data?.id}>
          <div>{userDetails?.data?.phone}</div>
          <div>{userDetails?.data?.email}</div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
