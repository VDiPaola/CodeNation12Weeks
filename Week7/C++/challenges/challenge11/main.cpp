#include <iostream>
#include <stdlib.h>
#include <iomanip>



using namespace std;

//prototypes
long double factorial(long double n);
long double factorialLoop(long double n);

int main()
{

   long double inp;
   cout << "enter a number: ";
   cin >> inp;
   cout << fixed << setprecision(0) << factorial(inp) << endl;

   cout << fixed << setprecision(0) << factorialLoop(inp) << endl;

   return 0;
}

//recursive function
long double factorial(long double n)
{
    if(n > 1){
        return n * factorial(n - 1);
    }else{
        return 1;
    }
}

//loop
long double factorialLoop(long double n)
{
    long double factorial = 1;
     for (long double i = 1; i <= n; ++i) {
        factorial *= i;   // factorial = factorial * i;
    }
    return factorial;
}