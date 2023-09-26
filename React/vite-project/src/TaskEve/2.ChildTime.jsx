import { useEffect, useState } from "react";

const ChildCompTime = () => {
  const [date, setDate] = useState(0);
  const [time, setTime] = useState(0);
  useEffect(() => {
    console.log("Mounting...");
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    localStorage.setItem("startTime", JSON.stringify(currDate));
    localStorage.setItem("startDate", JSON.stringify(currTime));

    return () => {
      console.log("Unmounting...");
      const endDate = new Date().toLocaleDateString();
      const endTime = new Date().toLocaleTimeString();
      localStorage.setItem("endTime", JSON.stringify(endDate));
      localStorage.setItem("endDate", JSON.stringify(endTime));
    };
  }, []);

  return (
    <div>
      <p>Caluculate my onscreen time..</p>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree&psig=AOvVaw05IOs-7mBQTqHg45ZhGy9a&ust=1695782417525000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJDRjvafx4EDFQAAAAAdAAAAABAE"
        alt="image"
      />
    </div>
  );
};
export default ChildCompTime;

const ChildV4 = () => {
  useEffect(() => {
    // console.log("child mounted", Date.now());
    let mountTime = new Date();

    window.onbeforeunload = function (e) {
      console.log("E: ", e);
      const unMountTime = new Date();
      const elapsedTime = unMountTime - mountTime;
      localStorage.setItem(new Date().getTime(), elapsedTime);
      console.log(`child unmounted at ${unMountTime - mountTime} millisecond`);
    };

    return () => {
      const unMountTime = new Date();
      const elapsedTime = unMountTime - mountTime;
      localStorage.setItem(new Date().getTime(), elapsedTime);
      console.log(`child unmounted at ${unMountTime - mountTime} millisecond`);
    };
  }, []);
  return <p>I am child with current counter:</p>;
};
