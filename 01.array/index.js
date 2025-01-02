/**
 * @param {number[]} nums
 * @return {number}
 */
// 需要遍历元素两次
var minMoves = function (nums) {
  // 找到最小值
  function findMin(nums) {
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < min) {
        min = nums[i];
      }
    }
    return min;
  }

  let min = findMin(nums),
    count = 0;
  // 遍历求最小值与各元素的差
  for (let i = 0; i < nums.length; i++) {
    count += nums[i] - min;
  }
  return count;
};

/*
遍历一次即可，不需要求出最小值，先指定任意一个值为最小值，
遍历减去该值，如果后面遇到比该最小值还小的元素，元素下标乘以差值就行了
*/
var minMoves01 = function (nums) {
  let min = nums[0],
    n = nums.length,
    count = 0;

  for (let i = 1; i < n; i++) {
    if (min < nums[i]) {
      count += nums[i] - min;
    } else {
      count += i * (min - nums[i]);
      min = nums[i];
    }
  }

  return count;
};

console.log(minMoves01([83, -14, 77, 15, 93, 35, 86, -8, -51, -79]));
