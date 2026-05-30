import java.util.Scanner;

public class Cts3 {
    public static void main (String args[]){
        int c = 0;

        Scanner x = new Scanner(System.in);
        int n = x.nextInt();
        int[] arr =  new int[n];

        for(int i =0;i<n;i++) {
            arr[i] = x.nextInt();
        }

        for(int i=1;i<n-1;i++){

            if(arr[i]>arr[i-1] || arr[i]>arr[i+1]) c++;
        }

        System.out.println("peak yo,  count is "+c);
        return;


    }
}