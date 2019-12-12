#include <iostream>

using namespace std;

template <class customT>

customT addition(customT a, customT b){
	return a+b;
}

int main(){

	cout << addition(5.23,7.5) << endl;
	cout << addition(10,5) << endl;
	

	return 0;
}
