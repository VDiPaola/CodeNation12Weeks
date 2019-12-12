#include <iostream>
#include <stdlib.h>
#include "sum.cpp"
#include <time.h>

using namespace std;



int main()
{
   srand(time(0));

   //sums with random numbers between 1 and 1000
   
   cout << sum(rand()%(1000-1 + 1) + 1,rand()%(1000-1 + 1) + 1) << endl;
   cout << sum(rand()%(1000-1 + 1) + 1,rand()%(1000-1 + 1) + 1, rand()%(1000-1 + 1) + 1) << endl;
   cout << sum(rand()%(1000-1 + 1) + 1,rand()%(1000-1 + 1) + 1,rand()%(1000-1 + 1) + 1,rand()%(1000-1 + 1) + 1) << endl;

   return 0;
}

