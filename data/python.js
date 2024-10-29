// data/python.js

if (typeof commandsData !== 'undefined') {
    const pythonCommands = [
        {
            command: 'def function_name(params):',
            description: 'Define a function in Python',
            examples: [
                'def greet(name):\n    print(f"Hello, {name}!") # Define a function named greet with one argument.',
                'def add(a, b):\n    return a + b # Define a function to add two numbers.'
            ],
            category: 'Python'
        },
        {
            command: 'if condition:',
            description: 'Basic if statement in Python',
            examples: [
                'if x > 0:\n    print("Positive") # Check if x is positive.',
                'if user == "admin":\n    print("Welcome admin") # Check if user is admin.'
            ],
            category: 'Python'
        },
        {
            command: 'for variable in iterable:',
            description: 'Basic for loop in Python',
            examples: [
                'for i in range(5):\n    print(i) # Loop through numbers 0 to 4.',
                'for char in "Hello":\n    print(char) # Loop through each character in a string.'
            ],
            category: 'Python'
        },
        {
            command: 'while condition:',
            description: 'Basic while loop in Python',
            examples: [
                'while x < 10:\n    x += 1 # Increment x until it is no longer less than 10.',
                'while not done:\n    process_data() # Continue processing data until done is True.'
            ],
            category: 'Python'
        },
        {
            command: 'try:\n    ...\nexcept Exception as e:',
            description: 'Exception handling in Python',
            examples: [
                'try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero") # Handle division by zero error.',
                'try:\n    file = open("file.txt")\nexcept FileNotFoundError:\n    print("File not found") # Handle file not found error.'
            ],
            category: 'Python'
        },
        {
            command: 'print(object)',
            description: 'Print objects to the text stream',
            examples: [
                'print("Hello, World!") # Print a string to the console.',
                'print(42) # Print an integer to the console.',
                'print(f"Value of x is {x}") # Print a formatted string with a variable.'
            ],
            category: 'Python'
        },
        {
            command: 'import module',
            description: 'Import a module in Python',
            examples: [
                'import os # Import the os module.',
                'import sys # Import the sys module.',
                'import math\nprint(math.sqrt(16)) # Import the math module and use the sqrt function.'
            ],
            category: 'Python'
        },
        {
            command: 'class ClassName:',
            description: 'Define a class in Python',
            examples: [
                'class Dog:\n    def __init__(self, name):\n        self.name = name # Define a Dog class with an initializer.',
                'class Vehicle:\n    def __init__(self, make, model):\n        self.make = make\n        self.model = model # Define a Vehicle class with two attributes.'
            ],
            category: 'Python'
        }
    ];

    // Debugging: Verify the array content
    console.log('pythonCommands:', pythonCommands);

    // Check if each command is pushed correctly
    pythonCommands.forEach((cmd, index) => {
        console.log(`Pushing command ${index + 1}: ${cmd.command}`);
        commandsData.push(cmd);
    });

    console.log('Python Commands Loaded:', pythonCommands);
    console.log('Total Commands in commandsData after Python:', commandsData.length);
} else {
    console.error('Error: commandsData is not defined. Ensure that script.js is loaded first.');
}
