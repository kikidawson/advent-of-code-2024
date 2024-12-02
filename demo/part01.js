// Puzzle from 2022 "Day 1: Calorie Counting"
// https://adventofcode.com/2022/day/1

const fs = require("fs");

fs.readFile("./input.csv", "utf8", function (err, data) {
  console.log("raw data: ", data)
  console.log()

  const arr = data.split(/\n\n/);
  console.log("array before: ", arr)
  console.log()

  function sumUp(total, num) {
    return total + num
  }

  for (i = 0; i < arr.length; i += 1) {
    let total = arr[i].split(/\n/).map(Number).reduce(sumUp)
    arr[i] = total
  };

  console.log("array after: ", arr)
  console.log()

  let highest = Math.max(...arr)

  console.log("highest total number of calories: ", highest)
});
