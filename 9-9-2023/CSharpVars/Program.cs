using System;

namespace CSharpVars
{
    // This is our main program class
    class Program
    {
        static void Main(string[] args)
        {
            // Create instance of the Greeting class
            Greeting greet = new Greeting();

            // Use the intance to call the Hello method
            Console.WriteLine(greet.Hello("Andy"));

            // Use the instance to call the Hola method
            Console.WriteLine(greet.Hola("Andres"));
        }
    }

    // A new class called greeting
    class Greeting
    {
        // A method that returns "Hello" followed by the name
        public string Hello(string name)
        {
            return "Hello,  " + name + "!";
        }

        // A method that returns "Hola" followed by the name
        public string Hola(string name)
        {
            return "Hola, " + name + "!";
        }
    }
}