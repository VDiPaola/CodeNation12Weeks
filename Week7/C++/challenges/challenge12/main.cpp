#include <iostream>
#include <stdlib.h>
#include <iomanip>
#include "tool1.h"
#include "tool2.h"


using namespace std;

//prototypes
long double factorial(long double n);
long double factorialLoop(long double n);

int main()
{
    //using tool1 
   cout << "tool1: " << TOOL1::calculate(10,20) << endl;

    //using tool2
   cout << "tool2: " << TOOL2::calculate(10,20) << endl;

    //using tool1 
   cout << "tool1: " << TOOL1::calculate(500,1234) << endl;

    //using tool2
   cout << "tool2: " << TOOL2::calculate(423,3) << endl;


   return 0;
}

