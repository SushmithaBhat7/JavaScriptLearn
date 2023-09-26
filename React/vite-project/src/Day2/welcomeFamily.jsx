import { useState } from "react";

const WelcomeComponent = () => {
  const { family, setFamily } = useState({ firstName: "", lastName: "" });
  const handleWelcome = (e) => {
    const { name, value } = e.target;
    setFamily((item) => ({
      ...item,
      [name]: value,
    }));
  };
  console.log(``);
  return (
    <div className="Container">
      <input
        type="text"
        name="firstName"
        value={family.firstName}
        onChange={handleWelcome}
      />
      <input
        type="text"
        name="lastName"
        value={family.lastName}
        onChange={handleWelcome}
      />
    </div>
  );
};
export default WelcomeComponent;
