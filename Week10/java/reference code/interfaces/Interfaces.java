package interfaces;

public class Interfaces {
    public Interfaces(){

        System.out.println("=========== Direct implementation of interface Example ===========");
        new Plant(21, true).showData();
        new Person("Bob", 37).showData();

        System.out.println();
        System.out.println();

        System.out.println("=========== Inherited interface Example ===========");
        new Tree(5, false).showData();

        System.out.println();
        System.out.println();

        System.out.println("=========== No interface for Parent Example ===========");

        // doesn't work, as interface is not implemented
        //new Animal().showData();

        System.out.println();
        System.out.println();

    }


}
