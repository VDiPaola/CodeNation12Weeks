#include <iostream>

using namespace std;

bool primeCheck(int num);

int getPrime(int startNum){
	bool prime = false;
	startNum+=2;
	while(!prime){
		bool isPrime = primeCheck(startNum);
		if(isPrime){
			return startNum;
		}else{
			startNum+=2;
		}
	}
}

bool primeCheck(int num){
	for(int x=3;x<num ;x+=2){
        if(num  % x == 0){
            return false;
        }
    }
	return true;
}

int main(){

	string word;
	int primeNum = 1;
	int i = 0;

	while(word != "ENOUGH"){
		cout << "enter a word" << endl;
		cin >> word;

		//print every other prime number
		if(i==0){
			cout << "2" << endl;
		}else{
			primeNum = getPrime(primeNum);
			cout << primeNum << endl;
			
		}
		i++;
	}

	return 0;
}
