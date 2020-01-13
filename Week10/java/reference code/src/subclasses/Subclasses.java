package src.subclasses;

// creating a class so that you can declare what you`ll use other places
class Car {
    String name;
    String model;
}



public class Subclasses extends Car {
    public void subCar(){

        Car myCar = new Car();
        // get the declared instance and give it a value
        myCar.name = "BMW";
        myCar.model = "I8";


        System.out.println("The Car is "+myCar.name +" And model is " + myCar.model);

        Car myNewCar = new Car();

        myNewCar.name = "audi";
        myNewCar.model = "RS3";

        System.out.println("The Car is "+myNewCar.name +" And model is " + myNewCar.model);

    }



}
