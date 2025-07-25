function isSameType(value1, value2) {
  // Check if both values are NaN
  if (Number.isNaN(Number(value1)) && Number.isNaN(Number(value2))) {
    return true;
  }

  // Compare the types of both values
  return typeof value1 === typeof value2;
}

// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value));



