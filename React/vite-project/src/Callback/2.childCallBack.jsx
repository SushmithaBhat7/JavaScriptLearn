const ChildcallComp = (myProp) => {
  console.log(myProp);
  return (
    <div>
      <button onClick={myProp.handleclick}>Toggle Me</button>
    </div>
  );
};
export default ChildcallComp;
