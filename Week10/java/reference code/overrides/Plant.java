package overrides;

public class Plant {

    public void grow(){
        System.out.println("Plant is growing...");
    }

    @Override
    public String toString() {
        System.out.println("Plant class:");
        System.out.println("Override of .toString()");
        return null;
    }
}

