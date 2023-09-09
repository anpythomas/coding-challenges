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

            // Create instance of the Person class
            Person person = new Person("Andy", 24);

            // Create instanc of the Alien class
            Alien alien = new Alien("Zandaar", "Peanut M&M", 23);

            // Use the intance to call the Hello method
            Console.WriteLine(greet.Hello("Andy"));

            // Use the instance to call the Hola method
            Console.WriteLine(greet.Hola("Andres"));

            // Use the instance to call the Introduce method
            Console.WriteLine(person.Introduce());

            // Use the instance to call the SayHi method
            Console.Write(alien.SayHi());
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