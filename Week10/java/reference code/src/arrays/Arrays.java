package src.arrays;

public class Arrays {
    public static void arrays(String[] args) {

        int value = 7;
        // [] is used to tell java that the values will be in a array.
        int[] values;

        //[3] so you telling the code how many things youll have in that array
        values = new int[3];

        System.out.println(values[2]);

        // declare what them values will equal to:

        values[0] = 10;
        values[1] = 20;
        values[2] = 30;

        System.out.println(values[0]);
        System.out.println(values[1]);
        System.out.println(values[2]);

        // for loop to go through the array and print the values

        for (int i = 0; i < values.length; i++) {
            System.out.println(values[i]);
        }

        // an easier way to just declare and give the values and print the values
        int[] numbers = {1, 2, 4, 5, 77, 8};
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}
