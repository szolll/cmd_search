if (typeof commandsData !== 'undefined') {
    const systemInformationCommands = [
        {
            command: 'uname -a',
            description: 'Print all system information',
            examples: [
                'uname -a - Print all available system information.',
                'uname -r - Print the kernel version.'
            ],
            category: 'System Information'
        },
        {
            command: 'df -h',
            description: 'Display disk space usage',
            examples: [
                'df -h - Show disk usage in human-readable format.',
                'df -i - Show inode usage instead of blocks.'
            ],
            category: 'System Information'
        }
    ];
    commandsData.push(...systemInformationCommands);
    console.log('System Information Commands Loaded:', systemInformationCommands);
} else {
    console.error('Error: commandsData is not defined. Ensure that script.js is loaded first.');
}
