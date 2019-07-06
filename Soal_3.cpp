#include <iostream>

using namespace std;

int main(){
	
int bil;
int ganjil,genap;

bil = 12;

genap = bil/2;
ganjil = (3*bil) + 1;

if (bil% 2==0)
{

	cout << "Bilangan asli dengan operasi sebanyak 		: " << genap;	
}
else {

	cout << "Bilangan asli dengan operasi sebanyak 		: " << ganjil;	
}
}
