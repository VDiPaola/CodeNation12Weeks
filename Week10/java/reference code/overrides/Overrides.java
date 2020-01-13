package overrides;

public class Overrides {

    public Overrides() {
        // ---------------  Overriding Object Methods  -----------------------

        //All objects created extend the original Object class (built into Java). You can add Overrides to edit these:

        System.out.println("=========== Object method override ===========");
        new Plant().toString();


        System.out.println();
        System.out.println();


        // ---------------  Overriding Parent Class Methods  -----------------------


        //You can Override methods that are inherited from parent classes to customise a child's methods:

        System.out.println("=========== Parent class method override ===========");
        new Tree().grow();

        System.out.println();
        System.out.println();

    }
}
