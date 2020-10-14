function getSecondLargest(nums) {
    var uniqueNums = Array.from(new Set(nums)); // Remove repeated elements
    var maxNumber = Math.max.apply(null, uniqueNums); // Get the max number
    var maxNumberIndex = uniqueNums.indexOf(maxNumber); // Get the max number index
    uniqueNums.splice(maxNumberIndex, 1); // Remove the max number

    var newMaxNumber = Math.max.apply(null, uniqueNums); // Get the new max number
    return newMaxNumber;
}

const nums = [2, 3, 6, 6, 5];