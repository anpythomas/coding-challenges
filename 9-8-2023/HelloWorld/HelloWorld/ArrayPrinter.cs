using System;

public class Program
{
    public static void Main()
    {
        Console.WriteLine(PrintArrayElements(new int[] {11, 14,  16, 19, 20}));
    }

    public static string PrintArrayElements(int[] myNumArray)
    {
        // Declare and assign array
        // int[] myNumArray = {11, 14,  16, 19, 20};

        foreach (int element in myNumArray)
        {
            Console.WriteLine(element);
        }

        return "Hello";
    }
}