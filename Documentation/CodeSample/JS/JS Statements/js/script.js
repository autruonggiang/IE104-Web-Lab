/*

Keyword	        Description
var	        Declares a variable
let	        Declares a block variable
const	    Declares a block constant

if	        Marks a block of statements to be executed on a condition
switch	    Marks a block of statements to be executed in different cases

for 	    Marks a block of statements to be executed in a loop

function	Declares a function
return  	Exits a function

try	        Implements error handling to a block of statements

*/

/* JavaScript Variables
Có 3 cách khai báo biến:
    var
    let
    const
Ví dụ:
*/
var x = 5;
var y = 6;
var z = x + y;

//1 lệnh khai báo nhiều biến:
var person = "John Doe", carName = "Volvo", price = 200;




//Ví dụ, dùng let 
// Không thể khai báo lại
let x = "John Doe";

let x = 0;  // SyntaxError: 'x' has already been declared

//=> Nếu muốn khai báo lại thì dùng var
var x = "John Doe";
var x = 0;




//Block Scope
{
    let x = 2;
}
// x can NOT be used here

// ===>>>>  Variables declared with the var keyword can NOT have block scope.

{
    var x = 2;
}
// x CAN be used here

//Chú ý, xét ví dụ sau:
var x = 10;
// Here x is 10

{
    var x = 2;
    // Here x is 2
}

// Here x is 2







//Chú y, xét tiếp ví dụ sau:
let x = 10;
// Here x is 10

{
    let x = 2;
    // Here x is 2
}

//Here x is 10



//VỀ NHÀ PHÂN BIỆT THÊM         var       let


//Ví dụ dùng const
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
//=> ko thể thay đổi giá trị





//                  data type
let length = 16;                               // Number
let lastName = "Johnson";                      // String

//Tìm hiểu them các hàm xử lý số và chuỗi w3s
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);

let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);


let x = {firstName:"John", lastName:"Doe"};    // Object

let x1 = 34.00;     // Written with decimals
let x2 = 34;        // Written without decimals

let y = 123e5;      // 12300000     123 x 10^5
let z = 123e-5;     // 0.00123

let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false

//Các số khác O thì true
// 0 -> false


const cars = ["Saab", "Volvo", "BMW"]; //array

var   car  = ["Saab", "Volvo", "BMW"]; //array
//car[0]

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// person[firstName]
// person[lastName]

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"


//Nói đến đây, giới thiệu thêm 1 cách học https://codelearn.io/

//Datetime



/*
Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation (ES2016) 2 ** 3 => 2 lũy thừa 3
/	        Division
%	        Modulus (Division Remainder)
++	        Increment
--	        Decrement
*/

/*

Operator	Example	        Same As
=	        x = y	        x = y
+=	        x += y	        x = x + y       cộng, rồi gán lại
-=	        x -= y	        x = x - y
*=	        x *= y	        x = x * y
/=	        x /= y	        x = x / y
%=	        x %= y	        x = x % y
**=	        x **= y	        x = x ** y

*/

/* so sánh logic
&&
||
!=
==
*/


//                  ĐỊNH NGHĨA function
//Tuân thủ
//Input
//Output
function myFunction(p1, p2, z) {
    //lệnh xử lý
    //viết lệnh nhận các input từ element trong html
    //dùng thuộc tính id để định danh
    console.log();


    return p1 * p2;   // The function returns the product of p1 and p2
}

function myFunction(p1, p2) {
    //lệnh xử lý
    return p1 * p2;   // The function returns the product of p1 and p2
}

//gọi hàm

let h = myFunction(3, 5)



/*

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/