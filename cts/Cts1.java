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