import java.util.*;

public class Cts5 {
    public static void main (String[] args) {
        Scanner ip = new Scanner(System.in);

        int x = ip.nextInt();
        int len = ip.nextInt();

        int[] arr= new int[len];
        for(int i=0;i<len;i++) {
            arr[i] = ip.nextInt();
        }

        //actual code....
        ArrayList<Integer> barr = new ArrayList<>();
        int res = 0;

        for(int i=0;i<len;i++){

           int sum = arr[i]+arr[(i+1)%len];
           barr.add(sum);

            if(sum%x == 0) res+=sum;
        }
        System.out.println("Final Sum is "+res); 

        // A very common interview pattern is:
        // nextIndex = (i + 1) % n;     // next element
        // prevIndex = (i - 1 + n) % n; // previous element

    }
}