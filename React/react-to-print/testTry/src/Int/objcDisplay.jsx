import { useState } from "react";

const FormDisplay = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
  });

  //   const handleFirstNameChange = (e) => {
  //     setFormDetails((prev) => ({ ...prev, firstName: e.target.value }));
  //   };
  //   const handleSecondNameChange = (e) => {
  //     setFormDetails((prev) => ({ ...prev, secondName: e.target.value }));
  //   };
  const handleChange = (e) => {
    setFormDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div>
        <input
          value={formDetails.firstName}
          placeholder="Enter First Name"
          onChange={handleChange}
          name="firstName"
        />
        <input
          value={formDetails.secondName}
          placeholder="Enter Second Name"
          onChange={handleChange}
          name="lastName"
        />
      </div>
      <div>
        <p>FirstName : {formDetails.firstName}</p>
        <p>LastName : {formDetails.lastName}</p>
      </div>
    </div>
  );
};
export default FormDisplay;
