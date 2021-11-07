/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.minHeap = nums.sort((a,b) => b - a)
    this.k = k
};


/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let pos = this.minHeap.length
    for(let i = 0;  i < pos ;i++){
        if(val >= this.minHeap[i]){
            pos = i
            break
        } 
    }
    this.minHeap.splice(pos,0,val)
    return this.minHeap[this.k-1]
};