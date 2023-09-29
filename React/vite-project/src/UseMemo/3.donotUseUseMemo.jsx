import { useMemo, useState } from "react";

const NotUseUseMemo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = useMemo(() => {
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  const _fullName = `${firstName} ${lastName}`;

  return (
    <div>
      <p>
        {fullName} {_fullName}
      </p>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter last name"
      />
    </div>
  );
};
