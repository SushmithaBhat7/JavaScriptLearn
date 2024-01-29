export const BasicComponent = ({ name, childrens }) => {
  console.log("name :", name);
  console.log("childrens", childrens);
  return (
    <ul>
      <li>{name}</li>
      {childrens.map((item, index) => {
        return (
          <ul key={index}>
            {item.children ? (
              <BasicComponent name={item.name} childrens={item.children} />
            ) : (
              <li>{item.name}</li>
            )}
          </ul>
        );
      })}
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
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map((item, index) => {
        return (
          <BasicComponent
            key={index}
            name={item.name}
            childrens={item.children}
          />
        );
      })}
    </div>
  );
};

export default ParentTreeComponent;
