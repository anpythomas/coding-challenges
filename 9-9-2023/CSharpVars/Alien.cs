using System;

namespace CSharpVars
{
    public class Alien
    {
        // Properties of the Alien class
        public string Name { get; set; }
        public string Galaxy { get; set; }
        public int Fingers { get; set; }

        // Constructor for the Alien class to initlize properties
        public Alien(string name, string galaxy, int fingers)
        {
            Name = name;
            Galaxy = galaxy;
            Fingers = fingers;
        }

        public string SayHi()
        {
            return "Hello, earthlings, I'm " + Name + " from the galaxy " + Galaxy + "." + " I have " + Fingers + " fingers.";
        }
    }
}