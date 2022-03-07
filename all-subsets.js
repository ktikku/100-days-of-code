var subsets = function(nums) {
    let res = new Array()
    function rescursive(arr,index) {
        let tempArr = arr.slice(0)
        if (index === nums.length){
            res.push(tempArr)
            return;
        }
        tempArr.push(nums[index])
        rescursive(tempArr,index+1)
        tempArr.pop()
        rescursive(tempArr,index+1)
        return;
    }
    rescursive([],0)
    return res;
};
