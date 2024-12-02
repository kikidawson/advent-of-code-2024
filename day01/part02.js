const fs = require("fs");

fs.readFile("./data.csv", "utf8", function (err, data) {
  const arr = data.split(/\n/)
  let left_col = []
  let right_col = []

  for (i = 0; i < arr.length; i+= 1) {
    const length = arr[i].length
    let left = arr[i].slice(0, length/2)
    let right = arr[i].slice((length/2 + 1), length)

    left_col.push(left.trim())
    right_col.push(right.trim())
  }

  let similarity_scores = []

  for (i = 0; i < left_col.length; i+= 1) {
    let count = 0

    right_col.forEach(ele => {
      if (left_col[i] == ele) {
        count += 1
      }
    })

    similarity_scores.push((left_col[i] * count))
  }

  console.log(similarity_scores.reduce((a, b) => a + b, 0))
});
