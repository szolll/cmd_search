if (typeof commandsData !== 'undefined') {
    const processManagementCommands = [
        {
            command: 'ps aux',
            description: 'Report a snapshot of current processes',
            examples: [
                'ps aux - List all running processes with detailed information.',
                'ps aux | grep apache - List all Apache processes.'
            ],
            category: 'Process Management'
        },
        {
            command: 'kill',
            description: 'Send a signal to a process',
            examples: [
                'kill 1234 - Send the default signal (TERM) to process with PID 1234.',
                'kill -9 1234 - Send the KILL signal to forcibly terminate the process.'
            ],
            category: 'Process Management'
        }
    ];
    commandsData.push(...processManagementCommands);
    console.log('Process Management Commands Loaded:', processManagementCommands);
} else {
    console.error('Error: commandsData is not defined. Ensure that script.js is loaded first.');
}
