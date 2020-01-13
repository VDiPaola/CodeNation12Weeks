import java.io.File;

// public class CreateFile {
//   public static void main(String[] args) {
//     int i = 0;
//     while(true){
//       try {
//         File myObj = new File(i + "filename");
//         if (myObj.createNewFile()) {
//           System.out.println("File created: " + myObj.getName());
//         } else {
//           System.out.println("File already exists.");
//         }
//       } catch (IOException e) {
//         System.out.println("An error occurred.");
//         e.printStackTrace();
//       }
//       i++;
//     }

//   }
// }


public class CreateFile {
  public static void main(String[] args) {
    int i = 0;
    while(true){
        File myObj = new File(i + "filename");
        if (myObj.delete()) {
          System.out.println("File deleted: " + myObj.getName());
        } else {
          System.out.println("cant delete file.");
        }
      i++;
    }

  }
}
