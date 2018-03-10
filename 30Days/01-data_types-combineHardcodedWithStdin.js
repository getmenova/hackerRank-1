//Day 1 Problem:
  declare my own 3 variables: int, double, Str.
  Read 3 lines of input from stdin (in the buffer we have: i, d, s)
  print each on a new line:
  	i + int
  	d+ double (format: 0.1)
  	s + Str


//py-----------------------
//my values:
myInt, myDouble, myStr= 4, 2.3, 'Hello there. '


//add my values to the valeus I get from the stdin buffer:
def input_data():
	return input("enter next item to the buffer: ")
def p1(myInt, myDouble, myStr):
	results= [myInt+ int(input_data()), myDouble+ round(float(input_data()),1), myStr+ input_data()]
	for i in results:
		print(i)
p1(4, 2.3, 'How are you?')





//js-----------------------
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0; //index

//1 long str of user input;each value separated by \n
process.stdin.on('data', function (data) {
    input_stdin += data;
});

//put those values into array
process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});


//look up value from array by its index
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    //hardcorded values
    var i = 4;
    var d = 4.0;
    var s = "HackerRank ";

    //values obtained from stdin
    var i2 = readLine();
    var d2 = readLine();
    var s2 =readLine();

    console.log(i+Number(i2) +"\n"+(Number(d2)+d).toFixed(1)+"\n"+s+s2);
}





//c#-----------------------
using System;
class Solution
{
static void Main(String[] args)
{
    //my vars
    int i = 1;
    double d = 1.2;
    string s = "HackerRank ";

    //declare vars i will receive from stdin
    int i2;
    double d2;
    string s2;

    //read them in
    i2 = int.Parse(Console.ReadLine());   //=Convert.ToInt32(strHere)
    d2 = double.Parse(Console.ReadLine());
    s2 = Console.ReadLine();

    //print sum of ints. String.Format("{0:0}"... = take 0st arg and 0=do not round it
        //=Console.WriteLine($"{i + i2}");
        //Console.WriteLine("{0} {1}", x, y));
    Console.WriteLine(String.Format("{0}", i + i2));
    //print sum of doubles. String.Format("{0:0.0}"... = take 0st arg and 0.0=round it to 1st decimal point
    Console.WriteLine(String.Format("{0:0.0}", d + d2));
    //print strs
    Console.WriteLine(s + s2);
}}





//java-----------------------
import java.util.Scanner;

int, double, String  //declare & initialize vars
Scanner scan = new Scanner(System.in);

i2 = scan.nextInt();
d2 = scan.nextDouble();

scan.nextLine(); // go to a next line
s2 = scan.nextLine();


System.out.println(i + i2); //print on a new line
System.out.println(s.concat(s2)); //join 2 strings
scan.close();
