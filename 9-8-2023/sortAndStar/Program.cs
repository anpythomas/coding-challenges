using System;
using System.Linq;

// See https://aka.ms/new-console-template for more information
public class Program 
{
    public static void Main() 
    {
        Console.WriteLine("Hello, World!");
    }
}

public class Kata
{
    public static string TwoSort(string[] s)
    {
        // Sort the array
        Array.Sort(s, StringComparer.Ordinal);

        // Take the first string and put '***' between each of its letters
        return string.Join("***", s[0].ToCharArray());
    }
}
