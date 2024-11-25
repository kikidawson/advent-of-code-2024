const fs = require("fs");

fs.readFile("./input.csv", "utf8", function (err, data) {
  const arr = data.split(/\n\n/);

  function sumUp(total, num) {
    return total + num
  }

  for (i = 0; i < arr.length; i += 1) {
    let total = arr[i].split(/\n/).map(Number).reduce(sumUp)
    arr[i] = total
  };

  let highest_total = 0

  for ( i = 1; i < 4; i += 1 ) {
    let highest = Math.max(...arr)

    console.log("number " + i + " = " + highest);
    highest_total += highest
    arr[arr.indexOf(highest)] = 0
  }

  console.log("total of top three elves: ", highest_total)
});
