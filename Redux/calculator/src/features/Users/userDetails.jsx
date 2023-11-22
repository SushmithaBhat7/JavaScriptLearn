import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  return (
    <>
      <h1>User Details</h1>
      <div>Hi Im User Details</div>
      <h2>{id}</h2>
    </>
  );
};

export default UserDetails;
