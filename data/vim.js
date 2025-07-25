const vimCommands = [
    {
        command: 'vim',
        description: 'A highly configurable, powerful text editor',
        examples: [
            'vim filename - Open "filename" in Vim.',
            'vim -R filename - Open "filename" in read-only mode.',
            'vim +10 filename - Open "filename" and move cursor to line 10.'
        ],
        category: 'Text Editing'
    },
    {
        command: ':w',
        description: 'Save the current file',
        examples: [
            ':w - Save the current file.',
            ':w newfile - Save the current file as "newfile".',
            ':w! - Force save the current file, overwriting if necessary.'
        ],
        category: 'File Operations'
    },
    {
        command: ':q',
        description: 'Quit the Vim editor',
        examples: [
            ':q - Quit Vim if no changes were made.',
            ':q! - Force quit Vim, discarding unsaved changes.',
            ':wq - Save and quit Vim.'
        ],
        category: 'File Operations'
    },
    {
        command: ':e',
        description: 'Edit or reload a file',
        examples: [
            ':e filename - Open "filename" for editing.',
            ':e! - Reload the current file, discarding changes.',
            ':e - Reload the current file.'
        ],
        category: 'File Operations'
    },
    {
        command: 'i',
        description: 'Enter insert mode to add text',
        examples: [
            'i - Enter insert mode before the cursor.',
            'I - Enter insert mode at the start of the current line.',
            'a - Enter insert mode after the cursor.'
        ],
        category: 'Editing'
    },
    {
        command: 'dd',
        description: 'Delete the current line',
        examples: [
            'dd - Delete the current line and copy it to the clipboard.',
            '3dd - Delete three lines starting from the current line.',
            'd$ - Delete from the cursor to the end of the line.'
        ],
        category: 'Editing'
    },
    {
        command: '/pattern',
        description: 'Search for a pattern in the file',
        examples: [
            '/word - Search forward for "word".',
            '?word - Search backward for "word".',
            'n - Move to the next match of the search.'
        ],
        category: 'Navigation'
    },
    {
        command: ':s',
        description: 'Substitute text in the file',
        examples: [
            ':s/old/new - Replace the first occurrence of "old" with "new" on the current line.',
            ':%s/old/new/g - Replace all occurrences of "old" with "new" in the entire file.',
            ':s/old/new/c - Replace with confirmation for each occurrence.'
        ],
        category: 'Editing'
    },
    {
        command: 'yy',
        description: 'Yank (copy) the current line',
        examples: [
            'yy - Copy the current line to the clipboard.',
            '3yy - Copy three lines starting from the current line.',
            'y$ - Copy from the cursor to the end of the line.'
        ],
        category: 'Editing'
    },
    {
        command: 'p',
        description: 'Paste copied or deleted text',
        examples: [
            'p - Paste after the cursor.',
            'P - Paste before the cursor.',
            '2p - Paste the copied text twice after the cursor.'
        ],
        category: 'Editing'
    },
    {
        command: 'u',
        description: 'Undo the last change',
        examples: [
            'u - Undo the most recent change.',
            '3u - Undo the last three changes.',
            'Ctrl-r - Redo the last undone change.'
        ],
        category: 'Editing'
    },
    {
        command: 'gg',
        description: 'Move the cursor to the first line',
        examples: [
            'gg - Go to the first line of the file.',
            'G - Go to the last line of the file.',
            '5gg - Go to line 5.'
        ],
        category: 'Navigation'
    },
    {
        command: ':set',
        description: 'Set editor options',
        examples: [
            ':set number - Display line numbers.',
            ':set nonumber - Hide line numbers.',
            ':set tabstop=4 - Set tab width to 4 spaces.'
        ],
        category: 'Configuration'
    },
    {
        command: 'v',
        description: 'Enter visual mode for text selection',
        examples: [
            'v - Start visual mode to select text character by character.',
            'V - Start visual line mode to select entire lines.',
            'Ctrl-v - Start visual block mode for column editing.'
        ],
        category: 'Editing'
    },
    {
        command: ':sp',
        description: 'Split the window horizontally',
        examples: [
            ':sp - Split the current window horizontally.',
            ':sp filename - Open "filename" in a new horizontal split.',
            'Ctrl-w j - Move to the split below.'
        ],
        category: 'Window Management'
    },
    {
        command: ':vsp',
        description: 'Split the window vertically',
        examples: [
            ':vsp - Split the current window vertically.',
            ':vsp filename - Open "filename" in a new vertical split.',
            'Ctrl-w l - Move to the split to the right.'
        ],
        category: 'Window Management'
    },
    {
        command: 'h',
        description: 'Move the cursor left',
        examples: [
            'h - Move one character left.',
            '5h - Move five characters left.',
            '0 - Move to the start of the current line.'
        ],
        category: 'Navigation'
    },
    {
        command: 'j',
        description: 'Move the cursor down',
        examples: [
            'j - Move one line down.',
            '5j - Move five lines down.',
            'Ctrl-f - Scroll down one full screen.'
        ],
        category: 'Navigation'
    },
    {
        command: 'k',
        description: 'Move the cursor up',
        examples: [
            'k - Move one line up.',
            '5k - Move five lines up.',
            'Ctrl-b - Scroll up one full screen.'
        ],
        category: 'Navigation'
    },
    {
        command: 'l',
        description: 'Move the cursor right',
        examples: [
            'l - Move one character right.',
            '5l - Move five characters right.',
            '$ - Move to the end of the current line.'
        ],
        category: 'Navigation'
    },
    {
        command: 'w',
        description: 'Move the cursor to the next word',
        examples: [
            'w - Move to the start of the next word.',
            '5w - Move forward five words.',
            'e - Move to the end of the current or next word.'
        ],
        category: 'Navigation'
    },
    {
        command: 'b',
        description: 'Move the cursor to the previous word',
        examples: [
            'b - Move to the start of the previous word.',
            '5b - Move backward five words.',
            'ge - Move to the end of the previous word.'
        ],
        category: 'Navigation'
    },
    {
        command: '{',
        description: 'Move the cursor to the previous paragraph',
        examples: [
            '{ - Move to the start of the previous paragraph.',
            '5{ - Move backward five paragraphs.',
            '} - Move to the start of the next paragraph.'
        ],
        category: 'Navigation'
    },
    {
        command: ':',
        description: 'Jump to a specific line',
        examples: [
            ':1 - Jump to the first line of the file.',
            ':$ - Jump to the last line of the file.',
            ':50 - Jump to line 50.'
        ],
        category: 'Navigation'
    }
];
commandsData.push(...vimCommands);
console.log('Vim Commands Loaded:', vimCommands);
