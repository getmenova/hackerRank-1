//Day 0 Problem:
Read from stdin and print the message in stdout


//py-----------------------
input_string = input()   #typed: "Hello there, Big World!"
print(input_string)





//js-----------------------
process.stdin.resume();
process.stdin.setEncoding("ascii");

function processData(inputString) {
    process.stdout.write("Hello, World, " + inputString);
}

_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});





//c#-----------------------
using System;

String inputString;
inputString = Console.ReadLine(); //typed "Hello, World."
Console.WriteLine(inputString); //print it to stdout





//java-----------------------
import java.util.Scanner;

Scanner scan = new Scanner(System.in);
String inputString = scan.nextLine();  //typed "Hello, World."
scan.close();
System.out.println("Hello, World.");
System.out.println(inputString);
