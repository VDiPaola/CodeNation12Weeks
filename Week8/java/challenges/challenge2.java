import java.io.File;

public class challenge2 {

    static void rice(int ones, int fives, int goal) {

        for (int i = 0; i < fives; i++) {
            if (goal - 5 > 0) {
                goal = goal - 5;
            }
        }
        if (goal <= ones) {
            System.out.println("true");
        } else {
            System.out.println("false");
        }
    }

    public static void main(String args[]) {
        rice(2, 3, 13);
    }

}

/*
 * Provided that you have a given number of small rice bags (1 kilo each) and
 * big rice bags (5 kilo each), write a method that returns true if it is
 * possible to make a package with goal kilos of rice.
 */
