// linear search 
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if target is found
        }
    }
    return -1; // Return -1 if target is not found
}
// console.log(linearSearch([1, 2, 3, 4, 5,345], 3)); 

// Binary Search
const binarySearch = (arr, tar) => {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === tar) return mid;

        if (tar > arr[mid]) l = mid + 1;
        else r = mid - 1;
    }
    return -1; // Return -1 if target is not found
}
// console.log(binarySearch([1, 2, 3, 4, 5, 45, 345], 3));



const binarySearchAdv = (arr, tar) => {
    // Sort the array before performing binary search
    // For numbers, arr.sort() without a compare function sorts as strings:

    // For strings, arr.sort() sorts lexicographically:
    // ["banana", "apple", "cherry"].sort() => ["apple", "banana", "cherry"]

    // To sort numbers correctly, use a compare function:
    const sortedArr = [...arr].sort((a, b) => a - b);

    let l = 0;
    let r = sortedArr.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (sortedArr[mid] === tar) return mid;

        if (tar > sortedArr[mid]) l = mid + 1;
        else r = mid - 1;
    }
    return -1; // Return -1 if target is not found
}
// console.log(binarySearchAdv([1, 2, 3, 4, 5, 45, 345], 3));