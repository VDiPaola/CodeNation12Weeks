package overrides;

public class Tree extends Plant{

    @Override
    public void grow(){
        System.out.println("Override of .grow() from Plant parent class");
        System.out.println("Tree is growing...");
    }

    public void shedLeaves() {

        System.out.println("Leaves shedding!");
    }
}
