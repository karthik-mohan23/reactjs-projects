export function generateRandomColor() {
  let colorStr = "#";
  let hexColors = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  for (let i = 0; i < 6; i++) {
    colorStr += hexColors[generateRandomNumber()];
  }
  return colorStr;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 15);
}
