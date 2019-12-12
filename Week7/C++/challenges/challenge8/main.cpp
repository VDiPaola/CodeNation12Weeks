#include <iostream>
#include <stdlib.h>
#include "myMacros.h"

using namespace std;



int main()
{
   int val;
   
   val= -10;
   cout<<"Absolute value of "<<val<<" is "<<ABS(val)<<endl;
   
   int num1 = 35;
   int num2 = 20;
   cout << "the bigger number is: " << MAX(num1,num2) << endl;


   return 0;
}