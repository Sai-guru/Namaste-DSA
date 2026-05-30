import java.util.Scanner;

public class Cts2 {
    public static void main (String[] args){
        Scanner x = new Scanner(System.in);

        int[] arr = new int[4];

        for(int i=0;i<4;i++){
            arr[i] = x.nextInt();
        }

        for(int i=0;i<arr.length;i++){
            int curr = arr[i];

            char res = (char)curr;

            System.out.println(curr +"-"+res);


            // or 
            // Check if the number falls in the lowercase ASCII range (97 to 122)
            // if (num >= 97 && num <= 122) {
            //     // Subtract 32 to shift it to the uppercase range, then convert to char
            //     char upperChar = (char) (num - 32);
            //     System.out.println(num + "-" + upperChar);
            // } else {
            //     // If it is already uppercase or another symbol, print normally
            //     char normalChar = (char) num;
            //     System.out.println(num + "-" + normalChar);
            // }
        }


    }
}


// Problem Statement – Ritik wants a magic board, which displays a character for a corresponding number for his science project. Help him to develop such an application.
// For example when the digits 65,66,67,68 are entered, the alphabet ABCD are to be displayed.
// [Assume the number of inputs should be always 4 ]

// Sample Input 1:

// Enter the digits:
// 65
// 66
// 67
// 68
// Sample Output 1:

// 65-A
// 66-B
// 67-C
// 68-D

// Sample Input 2:

// Enter the digits:
// 115
// 116
// 101
// 112
// Sample Output 2:

// 115-s
// 116-t
// 101-e
// 112-p