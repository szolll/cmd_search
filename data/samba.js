// data/samba.js

const sambaCommands = [
    {
        command: 'smbpasswd',
        description: 'Change a user\'s SMB password',
        examples: [
            'smbpasswd -a username - Add a new Samba user.',
            'smbpasswd -x username - Delete a Samba user.'
        ],
        category: 'Samba'
    },
    {
        command: 'testparm',
        description: 'Check Samba configuration file for errors',
        examples: [
            'testparm - Validate the smb.conf configuration file.',
            'testparm -s - Display the configuration as read by smbd.'
        ],
        category: 'Samba'
    }
    // Add more Samba commands as needed
];
commandsData.push(...sambaCommands);
console.log('Samba Commands Loaded:', sambaCommands);
