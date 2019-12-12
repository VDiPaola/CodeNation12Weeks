#include <iostream>
#include <math.h>

using namespace std;

float squareRoot(float num){
	return sqrt(num);
}

int main(){
	float nums[] = {4, 12.25, 0.0121};
	for(int i=0;i< (sizeof(nums)/sizeof(nums[0]));i++){
		cout << squareRoot(nums[i]) << endl;
	}

	float userInp;
	cout << "enter a number";
	cin >> userInp;
	cout << squareRoot(userInp) << endl;
	
	return 0;
}