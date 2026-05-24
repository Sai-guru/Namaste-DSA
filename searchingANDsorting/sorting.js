
//Merge sort 
const mergeSort = (arr)=> {
    if(arr.length<=1) return arr;
    const mid = Math.floor(arr.length / 2);
    let left  = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

const merge=(arr1,arr2)=> {  //this helper function already we learnt in leetcode 88 (Merge Sorted arrays)...
    let arr = [];
    let p1 = arr1.length-1;
    let p2 = arr2.length-1;
    for(let i=(arr1.length+arr2.length)-1 ; i>=0;i--) {
        if(p1>=0 && (p2<0 || arr1[p1]>arr2[p2])) {
            arr[i] = arr1[p1];
            p1--;
        }else {
            arr[i] = arr2[p2];
            p2--;
        }
    }return arr;
}
console.log("merge sort result :"+mergeSort([5, -2, 9, 1, 5, 6]));



