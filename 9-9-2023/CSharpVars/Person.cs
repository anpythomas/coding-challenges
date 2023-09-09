using System;

namespace CSharpVars
{
    public class Person
    {
        // Properties of the Person class.
        public string Name { get; set; }
        public int Age { get; set; }

        // Constructor for the Person class to initialize properties
        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        // A method for the person to introduce themselves.
        public string Introduce()
        {
            return $"Hi, I am {Name} and I am {Age} years old.";
        }
    }
}