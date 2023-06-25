const moveZeroes = (nums) => {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
      if (nums[fast] !== 0) {
        nums[slow] = nums[fast];
        slow++;
      }
    }
    for (let i = slow; i < nums.length; i++) {
      nums[i] = 0;
    }
  };
  const nums1 = [0, 1, 0, 3, 12];
  moveZeroes(nums1);
  console.log(nums1); // Output: [1, 3, 12, 0, 0]
  
  const nums2 = [0];
  moveZeroes(nums2);
  console.log(nums2); // Output: [0]
  