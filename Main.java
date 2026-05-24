import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // 1. Read the size of the array
        int n = sc.nextInt();
        
        // 2. Create the array
        int[] arr = new int[n];
        
        // 3. Read each number one by one
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt(); // Automatically grabs the next space-separated integer
        }


        
        // YOUR LOGIC HERE
        int sum = 0;

        for(int i=0;i<n;i++){
            sum+=arr[i];
        }

        System.out.println("sum is "+sum);
    }
}

// CHARACTER ARRAY

// char[] arr = sc.next().toCharArray();

// System.out.println(Arrays.toString(arr));


// next and nextLine(see at bottom) - https://chatgpt.com/share/6a129971-0118-83e9-98a0-bf2d0f14edbc