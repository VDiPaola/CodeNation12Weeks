package server;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;

public class ChatServer {

    public static void main(String args[]) {
        int port = 4444;
        try {
            ServerSocket serversocket = new ServerSocket(port);
            acceptClients(serversocket);
        } catch (IOException e) {
            System.err.println("error server " + e);
        }

    }

    public static void acceptClients(ServerSocket serversocket) {
        clients = new ArrayList<ClientThread>();
        while (true) {
            try {
                Socket socket = serversocket.accept();
            } catch (IOException e) {
                System.err.println("accept failed " + e);
            }
        }
    }
}
