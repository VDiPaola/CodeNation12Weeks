
#include <iostream>
#include <fstream>
using namespace std;

int main () {
  ofstream myfile;
  myfile.open ("afile.txt");
  myfile << "hello.\n";
  myfile.close();
  return 0;
}