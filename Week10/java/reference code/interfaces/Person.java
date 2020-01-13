package interfaces;

// only the child class here is implementing the interface - Animal class does not require it
public class Person extends Animal implements Data{
    private String name;
    private int age;


    //constructor - any instance of the Plant class will need to specify avSize and flowers when initialised.
    public Person(String name, int age  ){
        this.name = name;
        this.age = age;
    }

    // required method, due to implementing the interface:
    @Override
    public void showData() {
        System.out.println("I am called " + name + " and I am " + age + " years old.");
    }
}
