// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = firstOccur(nums, target);
    let last = lastOccur(nums, target);
    return[first, last];

};

function firstOccur(nums, target)
{
    let start = 0, end = nums.length - 1;
    let first = -1;

    while(start <= end)
    {
        let mid = Math.floor((start + end) / 2)
        if(nums[mid] === target)
        {
            first = mid;
            end = mid - 1;
        }

        else if(nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }

    return first;
}

function lastOccur(nums, target)
{
    let start = 0, end = nums.length - 1;
    let last = -1;

    while(start <= end)
    {
        let mid = Math.floor((start + end) / 2)
        if(nums[mid] === target)
        {
            last = mid;
            start = mid + 1;
        }

        else if(nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }

    return last;
}

nums = [5,7,7,8,8,10], target = 8;
console.log(searchRange(nums, target));