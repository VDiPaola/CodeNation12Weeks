package castingValues;

import java.security.PublicKey;

public class CastingValues {

    Tree tree1 = new Tree();
    Plant plant1 = tree1;

    public CastingValues(){

        // ---------------  Casting primitive values  -----------------------
        byte byteVal;
        float floatVal = 123.7f;
        long longVal = 29838;
        int intVal;
        int int2 = 128;

        //doesn't work
        //intVal = longVal;


        System.out.println("=========== long => int Example ===========");

        // works, as this long value can fit in int
        System.out.println(intVal = (int)longVal);

        System.out.println();
        System.out.println();
        System.out.println("=========== float => int Example ===========");

        // works, but DOESN'T ROUND VALUE --- 123 = returned val
        System.out.println(intVal = (int)floatVal);

        System.out.println();
        System.out.println();
        System.out.println("=========== int => byte Example ===========");

        // **** returns -128 --- may byte value is 127 so the value wraps back to minimum byte value (-128)
        System.out.println(byteVal= (byte)int2);

        System.out.println();
        System.out.println();

        // ---------------  Casting Objects  -----------------------

        //Upcasting
        //works, as plant1 has grow method but from Tree subclass --- Output: "Tree is growing!"
        System.out.println("=========== Upcasting Example ===========");
        plant1.grow();

        //Downcasting
        //declaring new plant with ref. to tree variable
        Plant plant2 = tree1;

        // won't work as it needs type that you are casting to
        //Tree tree2 = plant3;

        System.out.println();
        System.out.println();


        // works once type is defined:
        Tree tree2 = (Tree)plant2;
        System.out.println("=========== Downcasting Example ===========");
            tree2.shedLeaves();

        //below give runtime error, as cannot change a tree to a plant
        Plant plant4 = new Plant();
        //Tree tree3 = (Tree)plant4;
        //tree3.grow();

        System.out.println();
        System.out.println();

}

}
