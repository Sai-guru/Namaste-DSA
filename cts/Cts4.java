import java.util.*;

public class Cts4 {
    public static void main(String[] args){
        Scanner x = new Scanner(System.in);

        int k = x.nextInt();
        x.nextLine(); //if next ip is string ,use this to prevent from that...
        String s1 = x.nextLine();
        String s2 = x.nextLine();

        Set<String> mySet = new HashSet<>();
        int c = 0;

        for(int i=0;i<=s1.length()-k;i++){
            String curr = s1.substring(i,i+k);
            mySet.add(curr);

        }
        for(int i=0;i<=s2.length()-k;i++){
            
            String curr2 = s2.substring(i,i+k);
            if(mySet.contains(curr2)) {
                c++;
                mySet.remove(curr2);
            }

        }

        System.out.println(c);
        return;
    }
}