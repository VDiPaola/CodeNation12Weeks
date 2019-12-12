#include "person.h"
#include <iostream>

person::person(){
	std::cout << "person created\n";
}

void person::printHealth(){
	std::cout << "I am a human. hello. my health points is currently at: " << health << std::endl;
}
