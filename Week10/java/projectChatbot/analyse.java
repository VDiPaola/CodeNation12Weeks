package project;

import java.util.Scanner;
import java.util.Random;

class analyse {
    static String botname = "bot";

    public static void main(String[] args) {

        // temp user input
        Scanner uip = new Scanner(System.in);

        while (true) {

            System.out.print("chat: ");

            String text = uip.nextLine();

            // responds to words in this array with a greeting
            String[] greetings = { "hello", "howdy", "hi", "hey", "hi :)", "greetings" };
            for (int i = 0; i < greetings.length; i++) {
                if (text.matches("(?i).*\\b" + greetings[i] + "\\b.*")) {
                    hello();
                }
            }
            // responds to words in this array by saying bye
            String[] byeArr = { "bye", "goodbye", "cya", "later" };
            for (int i = 0; i < byeArr.length; i++) {
                if (text.matches("(?i).*\\b" + byeArr[i] + "\\b.*")) {
                    bye();
                }
            }

        }

    }

    public static void hello() {
        // picks from random array of greetings
        String[] greetingResponses = { "hello", "howdy", "hi", "hey", "hi :)", "greetings" };
        Random x = new Random();
        System.out.println(botname + ": " + greetingResponses[x.nextInt(greetingResponses.length)]);
    }

    public static void bye() {
        // picks from random array of goodbyes
        String[] greetingResponses = { "bye", "goodbye", "cya", "later" };
        Random x = new Random();
        System.out.println(botname + ": " + greetingResponses[x.nextInt(greetingResponses.length)]);
    }

}