var chotiBahu = "Diya";
var badiBahu = "Roopa";

function parents() {
  function romesh() {
    console.log("Romesh : Choti Bahu: ", {
      chotiBahu: this.chotiBahu,
      badiBahu: this.badiBahu,
    });
  }

  function inner() {
    function inner2() {
      function inner3() {
        console.log("Romesh se ghar ke andar lekakar pucha : Choti Bahu: ", {
          chotiBahu: this.chotiBahu,
          badiBahu: this.badiBahu,
        });
      }

      const somesh = () => {
        console.log("Somesh  se ghar ke andar lekakar pucha : Badi Bahu: ", {
          chotiBahu: this.chotiBahu,
          badiBahu: this.badiBahu,
        });
      };
      somesh();
      inner3();
    }
    inner2();
  }

  inner();
  const somesh = () => {
    console.log("Somesh : Badi Bahu: ", {
      chotiBahu: this.chotiBahu,
      badiBahu: this.badiBahu,
    });
  };

  romesh();
  somesh();

  return "Done";
}

console.log(
  "Mehman Arrives & ask for GFs: ",
  parents.call({ chotiBahu: "Ritu", badiBahu: "Radha" })
);
