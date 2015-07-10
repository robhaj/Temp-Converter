var answer = prompt("F > C or C > F", "Example: F > C");

if (answer == "F > C") {
  var ftemp = prompt("What is the temp in Farenheit?", "Example: 65")
  var newtempc = parseInt((ftemp - 32) * 5 / 9);

document.write(newtempc);
}
else if (answer === "C > F") {
  var ctemp = prompt("What is the temp in Celsius?", "Example: 30");
  var newtempf = parseInt(ctemp * 9 / 5 + 32);

  document.write(newtempf);
}
else {
  document.write("You made an error, try again");
}
