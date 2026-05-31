
class Solution {
    public int maxSubArray(int[] nums) {
int currSum = 0;
int maxSum = Integer.MIN_VALUE;

for(int i=0;i<arr.length;i++) {

    currSum += arr[i];
    maxSum = Math.max(currSum,maxSum);

    if(currSum<0) currSUm = 0;
}
return maxSum;
    }}

    public class Ct