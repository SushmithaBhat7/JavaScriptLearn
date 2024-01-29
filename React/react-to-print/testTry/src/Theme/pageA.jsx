import { useState } from "react";
import { UserProfileProvider } from "./context";

import PageB from "./pageB";

const light = "#fff";
const dark = "#000";

const PageA = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme((prev) => (prev === light ? dark : light));
  };

  console.log("light :", light);
  console.log("dark :", dark);

  return (
    // <UserProfileProvider value={{ theme, toggleTheme }}>
    //   <PageB />
    // </UserProfileProvider>
    <div>
      <PageB theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};
export default PageA;
