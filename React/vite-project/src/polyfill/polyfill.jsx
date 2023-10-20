<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>

<script>
  // Polyfill of ankitMap inside an array
  if (!Array.prototype.ankitMap) {
    // Write custom logic

    Array.prototype.ankitMap = function (cb) {
      console.log("This: ", this, cb);
      const result = [];

      for (let i = 0; i < this.length; i++) {
        const newData = cb(this[i]);
        result.push(newData);
      }

      return result;
    };
  }
</script>

<script>
  const arr = [1, 2, 3, 4, 5, 6]; // [2,3,4,5,6,7]

  const newArr = arr.map((item) => (item = item + 1));
  const newArr2 = arr.ankitMap((item) => (item = item + 1));

  console.log({ newArr, newArr2 });
</script>

<script>
  String.prototype.toMeraLowerCase = function () {
    console.log("This: ", this);
  };

  console.log("Sanket".toMeraLowerCase());
</script>
