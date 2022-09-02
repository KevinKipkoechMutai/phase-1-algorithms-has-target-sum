function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0; i<array.length; i++) {
    for (let x = i+1; x < array.length; x++) {
      if (array[i] + array[x] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The function has a nested for loop; hence it is of quadratic nature
  O: O(n*n)
*/

/* 
  Add your pseudocode here
  Loop through the array
  Iterate over the array for the second time
  If the sum of two numbers selected from both loops yields the target, return true
  Else, return false
*/

/*
  Add written explanation of your solution here
  The first for loop iterates over all numbers in the array. Each number is assigned to i.
  The nested/second for loop also iterates over all numbers in the array and assigns them to x.
  If i + x yields the target at some point, the function returns true.
  If not, it returns false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 8));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([9, 6, 3, 4, 5], 20));

  console.log("");


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([11, 20, 13, 14, 5], 33));

  console.log("");


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
