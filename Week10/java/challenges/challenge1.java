import java.io.File;

public class challenge1 {

    // recursive function
    static int factorial(int n) {
        if (n == 0)
            return 1;
        else
            return (n * factorial(n - 1));
    }

    public static void main(String args[]) {
        // number to find the factorial of
        int number = 5;
        int fact = factorial(number);
        System.out.println("Factorial of " + number + " is: " + fact);
    }
}
