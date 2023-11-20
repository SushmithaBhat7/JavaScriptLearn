import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div ref={componentRef}>
        <h1>Print Me</h1>
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </>
  );
};

export default Example;
