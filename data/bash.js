// data/bash.js

if (typeof commandsData !== 'undefined') {
    const bashCommands = [
        {
            command: 'if [ condition ]; then ...',
            description: 'Basic if statement in bash',
            examples: [
                'if [ -f /path/to/file ]; then echo "File exists"; fi # Check if a file exists.',
                'if [ "$VAR" = "value" ]; then echo "Value is correct"; fi # Check if a variable equals a value.'
            ],
            category: 'Bash'
        },
        {
            command: 'for variable in list; do ...; done',
            description: 'Basic for loop in bash',
            examples: [
                'for i in 1 2 3; do echo $i; done # Loop through numbers 1 to 3 and print each.',
                'for file in *.txt; do echo $file; done # Loop through all .txt files and print each filename.'
            ],
            category: 'Bash'
        },
        {
            command: 'while [ condition ]; do ...; done',
            description: 'Basic while loop in bash',
            examples: [
                'while [ "$VAR" != "value" ]; do sleep 1; done # Loop until VAR equals "value".',
                'while [ $(date +%H) -lt 12 ]; do echo "Good morning!"; sleep 3600; done # Print message until noon.'
            ],
            category: 'Bash'
        },
        {
            command: 'case expression in pattern)',
            description: 'Basic case statement in bash',
            examples: [
                'case $VAR in 1) echo "One";; 2) echo "Two";; esac # Match variable to patterns and execute code.',
                'case $INPUT in start) echo "Starting...";; stop) echo "Stopping...";; esac # Match input to commands.'
            ],
            category: 'Bash'
        },
        {
            command: 'function name() { ... }',
            description: 'Define a function in bash',
            examples: [
                'function greet() { echo "Hello, $1!"; } # Define a function named greet with one argument.',
                'function backup() { tar -czf backup.tar.gz $1; } # Define a function to create a backup of a given directory.'
            ],
            category: 'Bash'
        }
    ];

    // Debugging: Verify the array content
    console.log('bashCommands:', bashCommands);

    // Check if each command is pushed correctly
    bashCommands.forEach((cmd, index) => {
        console.log(`Pushing command ${index + 1}: ${cmd.command}`);
        commandsData.push(cmd);
    });

    console.log('Bash Commands Loaded:', bashCommands);
    console.log('Total Commands in commandsData after Bash:', commandsData.length);
} else {
    console.error('Error: commandsData is not defined. Ensure that script.js is loaded first.');
}
