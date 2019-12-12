/*
Left-justify the number 0.123456 in an output field with a width of 15.
Output the number 23.987 as a fixed point number rounded to two dec- imal places, right-justifying the output in a field with a width of 12.
Output the number –123.456 as an exponential and with four decimal spaces. How useful is a field width of 10?
*/

#include <iostream>
#include <math.h>

#include <iomanip>

using namespace std;

int main(){
	float num1 = 0.123456;
	float num2 = 23.987;
	double num3 = exp (-123.456);

	//cout << num3 << endl;

	//num1
	cout << setw(15) << num1 << endl;

	//num3 - outputs as 0 if below num2 for some reason setting precision or manually setting decimal number still returns zero
	cout << setw(10) << num3 << endl;

	//num2
	cout << right << setw(12) << setprecision(2) << fixed << num2 << endl;




	return 0;
}