/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 function binaryCompare(nums,target,left,right){
    if(left > right){
        return right+1
    }
    let mid  = left + Math.floor((right-left)/2)
    if(nums[mid] == target){
        return mid
    }else if(nums[mid]<target){//[left  mid  target right]
       return binaryCompare(nums,target,mid+1,right)
    }else{//[left target mid right]
        return binaryCompare(nums,target,left,mid-1)
    }
}
var searchInsert = function(nums, target) {
   if(nums[0]>target){
       return 0
   }else if(nums[nums.length-1]<target){
       return nums.length
   }
   return binaryCompare(nums, target,0,nums.length-1)
};