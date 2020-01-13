package polymorphism;

public class Polymorphism {
    public Polymorphism() {

        Tree tree = new Tree();

        //can declare plant2 as a reference to plant or tree (same parent class) - ** polymorphism **
        //Plant plant2 = plant;
        Plant plant1 = tree;

        System.out.println("=========== Tree Methods Example ===========");
        tree.grow();
        tree.shedLeaves();

        System.out.println();
        System.out.println();

        System.out.println("=========== .grow() called by Plant class pointed at Tree instance ===========");
        //works, plant has grow method "Plant is growing!" but plant1 is pointed at a Tree class instance
        // so it does the Tree class grow: "Tree is growing!"
        plant1.grow();

        //doesn't work, as plant2 is declared as Plant class (though it points to tree instance)
        //plant1.shedLeaves();

        System.out.println();
        System.out.println();

    }
}
