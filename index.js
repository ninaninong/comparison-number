//LEVEL 0

let x = 5
let y = 7

console.log("x greater than y", (x > y));
console.log("y greater than x", (y > x));

if (x < y) {
  console.log(x = "x less than y");
} else if (x > y) {
  console.log(x = "x greater than y");
}

//LEVEL 1
var a = 2
var b = 3
var c = 4

if (a < b) {
  console.log("a less than b");
} else if (a > c) {
  console.log("a less than than c");
} else {
  console.log("a greater than b and c")
}

//LEVEL 2

a < b ? (
  console.log("a less than b")
) : a > c ? (console.log("a less than than c")) : (
  console.log("a greater than b and c")
);

//LEVEL 3

var ipk = 4

if (ipk = 4) {
  console.log("cumlaude")
} else if ((ipk >= 3) && (ipk <= 4)) {
  console.log("pintar")
} else if ((ipk >= 2) && (ipk < 3)) {
  console.log("standar")
} else if (ipk <= 2) {
  console.log("dropout")
}

//LEVEL 4

function ipkCalculator(ipk) {
  if (ipk === 4) {
    return "cumlaude"
  } else if (ipk < 4 && ipk >= 3) {
    return "pintar"
  } else if (ipk < 3 && ipk >= 2) {
    return "standar"
  } else if (ipk < 2) {
    return "dropout"
  }
}
console.log(ipkCalculator(4));
console.log(ipkCalculator(3));
console.log(ipkCalculator(2));
console.log(ipkCalculator(1));

//LEVEL 5