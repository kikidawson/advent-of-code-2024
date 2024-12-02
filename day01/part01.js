const fs = require("fs");

fs.readFile("./data.csv", "utf8", function (err, data) {
  const arr = data.split(/\n/)
  let left_col = []
  let right_col = []

  for (i = 0; i < arr.length; i+= 1) {
    // split into 2
    const length = arr[i].length
    let left = arr[i].slice(0, length/2)
    let right = arr[i].slice((length/2 + 1), length)
    // remove whitespaces
    left_col.push(left.trim())
    right_col.push(right.trim())
  }

  const ordered_left = left_col.sort()
  const ordered_right = right_col.sort()
  let distance_arr = []

  for (i = 0; i < arr.length; i+= 1) {
    const distance = Math.abs(ordered_left[i] - ordered_right[i])
    distance_arr.push(distance)
  }

  console.log(distance_arr.reduce((a, b) => a + b, 0))
});
