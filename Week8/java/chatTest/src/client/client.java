package client;

import java.io.IOException;
import java.net.Socket;

public class client {

    public static void main(String args[]) {
        int port = 4444;
        try {
            Socket socket = new Socket("localhost", port);
        } catch (IOException e) {
            System.err.println("error " + e);
        }

    }
}
