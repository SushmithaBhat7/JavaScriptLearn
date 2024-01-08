export const BasicComponent = ({ name }) => {
  console.log("name :", name);
  return (
    <ul>
      <li>{name}</li>
    </ul>
  );
};

const ParentTreeComponent = () => {
  const data = [
    {
      name: "Fruit",
      children: [
        { name: "Apple" },
        { name: "Banana" },
        { name: "Fruit loops" },
      ],
    },
    {
      name: "Vegetables",
      children: [
        {
          name: "Green",
          children: [{ name: "Broccoli" }, { name: "Brussels sprouts" }],
        },
        {
          name: "Orange",
          children: [{ name: "Pumpkins" }, { name: "Carrots" }],
        },
      ],
    },
  ];
  return data.map((item) => {
    return (
      <div key={item.name}>
        <BasicComponent name={item.name} childrens={item.children} />
      </div>
    );
  });
};

export default ParentTreeComponent;
