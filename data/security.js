// data/security.js
const securityCommands = [
    {
        command: 'faillock',
        description: 'Tool for displaying and modifying the authentication failure record files',
        examples: [
            'faillock - Display failed login attempts.',
            'faillock --user john - Reset the failure records for user "john".',
            'faillock --reset - Reset all failure records.'
        ],
        category: 'Security'
    },
];
commandsData.push(...securityCommands);
console.log('Security Commands Loaded:', securityCommands);
