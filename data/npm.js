// data/npm.js

if (typeof commandsData !== 'undefined') {
    const npmCommands = [
        {
            command: 'npm init',
            description: 'Create a package.json file',
            examples: [
                'npm init # Create a package.json file interactively.',
                'npm init -y # Create a package.json file with default values.'
            ],
            category: 'NPM'
        },
        {
            command: 'npm install',
            description: 'Install packages from the package.json file',
            examples: [
                'npm install # Install all dependencies listed in package.json.',
                'npm install lodash # Install a specific package (lodash).'
            ],
            category: 'NPM'
        },
        {
            command: 'npm update',
            description: 'Update all packages to the latest version',
            examples: [
                'npm update # Update all dependencies to the latest version.',
                'npm update express # Update a specific package (express) to the latest version.'
            ],
            category: 'NPM'
        },
        {
            command: 'npm uninstall',
            description: 'Uninstall a package',
            examples: [
                'npm uninstall lodash # Remove lodash package.',
                'npm uninstall -g npm # Remove the globally installed npm package.'
            ],
            category: 'NPM'
        },
        {
            command: 'npm run',
            description: 'Run a script defined in package.json',
            examples: [
                'npm run build # Run the build script defined in package.json.',
                'npm run start # Run the start script defined in package.json.'
            ],
            category: 'NPM'
        },
        {
            command: 'npm list',
            description: 'List installed packages',
            examples: [
                'npm list # List all installed packages in the current project.',
                'npm list -g # List all globally installed packages.'
            ],
            category: 'NPM'
        },
        {
            command: 'npm outdated',
            description: 'Check for outdated packages',
            examples: [
                'npm outdated # Show outdated packages in the current project.',
                'npm outdated -g # Show outdated global packages.'
            ],
            category: 'NPM'
        },
        {
            command: 'npm audit',
            description: 'Perform a security audit of installed packages',
            examples: [
                'npm audit # Show security vulnerabilities in the current project.',
                'npm audit fix # Automatically fix security vulnerabilities if possible.'
            ],
            category: 'NPM'
        }
    ];

    // Debugging: Verify the array content
    console.log('npmCommands:', npmCommands);

    // Check if each command is pushed correctly
    npmCommands.forEach((cmd, index) => {
        console.log(`Pushing command ${index + 1}: ${cmd.command}`);
        commandsData.push(cmd);
    });

    console.log('NPM Commands Loaded:', npmCommands);
    console.log('Total Commands in commandsData after NPM:', commandsData.length);
} else {
    console.error('Error: commandsData is not defined. Ensure that script.js is loaded first.');
}
