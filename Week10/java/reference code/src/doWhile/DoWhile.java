package src.doWhile;

import java.util.Scanner;

public class DoWhile {
    public static void doWhile(String[] args){

        Scanner scanner = new Scanner(System.in);

        /*
        System.out.println("Enter a number: ");
        int value = scanner.nextInt();

        while(value !=5){
            System.out.println("Enter a number: ");
            value = scanner.nextInt();
        }
         */


        // declaring a value eg so something your going to compare it to the statement.
        int value;

        // do so you asking it to run the code before any checks or anything.

        do{
            System.out.println("Enter a number: ");
            value = scanner.nextInt();
        }

        // while so in this is where you check the code so that if the statement is`nt true it`ll keep running the code.
        while(value !=5);

        System.out.println("Got 5!");


    }

}
