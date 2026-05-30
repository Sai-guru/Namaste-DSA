import java.util.Scanner;

public class Cts1 {
public static void main (String[] args){
     Scanner x = new Scanner(System.in);

    double litRes = 0;
    double milesGall = 0;

    double lit = x.nextInt();
    double dist = x.nextInt();
    if(lit <=0 || dist<=0) {
        System.out.println("Invalid input");
        return ;
    }
    //in liters/100km is, 

    litRes = (lit/dist)*100;
    double t1 = dist*0.6214;
    double t2 = lit*0.2642;
    milesGall = t1/t2;

    // System.out.println("Litres/100km is "+litRes);
    // System.out.println("miles/gallonsis "+milesGall);
    // template with 2 decimals
    System.out.printf("%.2f\n", litRes);
    System.out.printf("%.2f\n", milesGall);
    return;

}
}



// [Note: The US approach of fuel consumption calculation (distance / fuel) is the inverse of the European approach (fuel / distance ). Also note that 1 kilometer is 0.6214 miles, and 1 liter is 0.2642 gallons.]

// The result should be with two decimal place.To get two decimal place refer the below-mentioned print statement :

// float cost=670.23;

// System.out.printf(“You need a sum of Rs.%.2f to cover the trip”,cost);

// Sample Input 1:

// Enter the no of liters to fill the tank
//            20

// Enter the distance covered
//            150

// Sample Output 1:

// Liters/100KM
//           13.33

// Miles/gallons
//           17.64

// Explanation: 

// For 150 KM fuel consumption is 20 liters, 
// Then for 100 KM fuel consumption would be (20/150)*100=13.33,
// Distance is given in KM, we have to convert it to miles (150*0.6214)=93.21,
// Fuel consumption is given in liters, we have to convert it to gallons (20*0.2642)=5.284, 
// Then find (miles/gallons)=(93.21/5.284)=17.64
// Sample Input 2:

// Enter the no of liters to fill the tank
//          -5

// Sample Output 2:

// -5 is an Invalid Input
// Sample Input 3:

// Enter the no of liters to fill the tank
//            25

// Enter the distance covered
//           -21

// Sample Output 3:

// -21 is an Invalid Input