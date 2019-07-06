/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
function is_email_valid(email) {
    var test = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return test.test(String(email).toLowerCase());
}

function is_phone_valid(phone){
    var test = /^[+62][0-9_]{8,15}$/;
    return test.test(String(phone));
}

/*
Format username: merupakan kombinasi huruf dari huruf kecil,
huruf besar dan angka dengan panjang 5-9 karakter. Username 
tidak boleh diawali dengan angka
*/
function is_username_valid(username){
    var test = /^(?=.{5,9})(?=.*[a-z])(?=.*[A-Z]).*$/;
    return test.test(String(username));
}

/*
    Format password: merupakan kombinasi dari huruf kecil, 
    huruf besar minimal satu karakter, angka minimal satu karakter,
    dan karakter spesial minimal satu karakter 
    dan harus memiliki karakter simbol “@” dan panjang minimal 8 karakter.
    
*/
function is_password_valid(password){
    var test = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*@).*$/;
    return test.test(String(password));
}

print(is_email_valid('dianeka.pertiwi97@gmail.com'));
print(is_phone_valid('+6288225105791'));
print(is_username_valid('zeronull'));
print(is_username_valid('Ayu99v'));
print(is_password_valid('p@ssW0rd#'));
print(is_password_valid('C0d3YourFuture!#'));
