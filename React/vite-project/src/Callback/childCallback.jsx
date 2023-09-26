const ChildCallBackComponent = (myProps) => {
  //   const { inputName } = useState("");
  console.log(myProps);
  return (
    <div className="childContainer">
      <input
        type="text"
        value={myProps.uName}
        onChange={(e) => myProps.handleChangeCallBack(e.target.value)}
      />
    </div>
  );
};
export default ChildCallBackComponent;
