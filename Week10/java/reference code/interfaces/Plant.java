package interfaces;

public class Plant implements Data {
    private int avSizeCm;
    private boolean flowering;

    //constructor - any instance of the Plant class will need to specify avSize and flowers when initialised.
    public Plant(int avSize, boolean flowers ){
        this.avSizeCm = avSize;
        this.flowering = flowers;
    }

    @Override
    public void showData() {
        //concatenates a string using values from constructor.
        System.out.println("Average size: " + avSizeCm + "cm");

        //uses boolean value to determine which to print to console.
        if(flowering==true){
            System.out.println("This plant has flowers.");
        } else {
            System.out.println("This Plant does not flower.");
        }

    }
}
