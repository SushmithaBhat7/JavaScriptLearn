const OutputChild = (myProps) => {
  console.log(myProps);
  return <p className="displayName">name:{myProps.uName.parent}</p>;
};
export default OutputChild;
