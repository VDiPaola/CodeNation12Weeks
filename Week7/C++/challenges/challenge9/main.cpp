#include <iostream>
#include <stdlib.h>

using namespace std;



int main()
{
   //strings
  string s1 = "as time by ...";
  string s2 = "goes";

  cout << s1 << endl;

// insert string s2 in front of “by” in string s1,
  int x = s1.find("by");
  s1 = s1.insert(x, s2 + " ");
  cout << s1 << endl;

//erase the remainder of string s1 after the substring “by”,
   x = s1.find("by");
   s1 = s1.substr(0, x+2);
   cout << s1 << endl;

//replace the substring “time” in s1 with “Bill”.
   s1 = s1.replace(s1.find("time"), 4, "Bill");
   cout << s1 << endl;

   return 0;
}