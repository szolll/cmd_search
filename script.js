// Initialize an empty array for commands data
window.commandsData = [];

// Function to dynamically load all .js files from the data/ folder
async function loadCommandFiles() {
    try {
        // Fetch the list of .js files in the data directory
        const response = await fetch('data/');
        const text = await response.text();
        const files = [...text.matchAll(/href="(.*?)"/g)].map(match => match[1]).filter(file => file.endsWith('.js'));

        console.log('Found files:', files); // Debug: Check loaded files

        // Load each .js file dynamically
        for (const file of files) {
            // Load the script and update the global commandsData array
            await loadScript(`data/${file}`);
            console.log(`Loaded ${file}, commandsData length: ${commandsData.length}`);
        }

        // Debug: Check if all files are loaded and variables are defined
        console.log('Commands Data Loaded:', commandsData);

        // After loading all files, populate categories and load commands
        populateCategories();
        loadCommands();
    } catch (error) {
        console.error('Error loading command files:', error);
    }
}

// Function to dynamically load a script and handle execution errors
async function loadScript(src) {
    try {
        const response = await fetch(src);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const scriptContent = await response.text();

        try {
            // Create a script element and append it to the DOM
            const script = document.createElement('script');
            script.textContent = scriptContent;
            document.head.appendChild(script);
            console.log(`Executed script from ${src}`);
        } catch (e) {
            console.error(`Error executing script from ${src}:`, e);
        }

    } catch (e) {
        console.error(`Error fetching script ${src}:`, e);
    }
}

// Function to populate categories in the dropdown
function populateCategories() {
    const groupedCommands = groupByCategory(commandsData);
    const categoryFilter = document.getElementById('categoryFilter');
    const newCategorySelect = document.getElementById('newCategory');

    // Remove existing options
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    newCategorySelect.innerHTML = '';

    // Add new categories to both dropdowns
    for (const category in groupedCommands) {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);

        const newOption = document.createElement('option');
        newOption.value = category;
        newOption.textContent = category;
        newCategorySelect.appendChild(newOption);
    }

    // Debug: Check populated categories
    console.log('Populated Categories:', categoryFilter.innerHTML);
}

// Group commands by category
function groupByCategory(commands) {
    return commands.reduce((acc, command) => {
        const category = command.category || 'Miscellaneous';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(command);
        return acc;
    }, {});
}

// Load commands data dynamically
function loadCommands() {
    const container = document.getElementById('commandsContainer');
    container.innerHTML = '';

    // Group commands by category
    const groupedCommands = groupByCategory(commandsData);

    // Debug: Check grouped commands
    console.log('Grouped Commands:', groupedCommands);

    // Create sections for each category
    for (const [category, commands] of Object.entries(groupedCommands)) {
        const section = document.createElement('section');
        section.className = 'command-category';
        section.dataset.category = category;

        const header = document.createElement('h2');
        header.textContent = category;
        section.appendChild(header);

        commands.forEach(command => {
            const commandDiv = document.createElement('div');
            commandDiv.className = 'command';
            commandDiv.dataset.command = command.command;

            // Use 'code' element for the command
            const codeElement = document.createElement('code');
            codeElement.textContent = command.command;
            commandDiv.appendChild(codeElement);

            const description = document.createElement('span');
            description.textContent = command.description;
            commandDiv.appendChild(description);

            const copyButton = document.createElement('button');
            copyButton.className = 'copy-btn';
            copyButton.textContent = 'Copy';
            copyButton.addEventListener('click', (event) => {
                event.stopPropagation();
                copyCommand(command.command);
            });
            commandDiv.appendChild(copyButton);

            const detailsDiv = document.createElement('div');
            detailsDiv.className = 'command-details';

            command.examples.forEach(example => {
                const p = document.createElement('p');

                const strong = document.createElement('strong');
                strong.textContent = 'Example: ';
                p.appendChild(strong);

                const codeExample = document.createElement('code');
                codeExample.textContent = example;
                p.appendChild(codeExample);

                detailsDiv.appendChild(p);
            });
            commandDiv.appendChild(detailsDiv);

            commandDiv.addEventListener('click', () => {
                commandDiv.classList.toggle('show-details');
            });

            section.appendChild(commandDiv);
        });

        container.appendChild(section);
    }
}

// Unified filter function
function filterCommands() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;

    const commands = document.querySelectorAll('.command');

    commands.forEach(command => {
        const commandText = command.dataset.command.toLowerCase();
        const descriptionText = command.querySelector('span').textContent.toLowerCase();
        const category = command.parentElement.dataset.category;

        // Check if the command matches the search term and category
        const matchesSearch = commandText.includes(searchTerm) || descriptionText.includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            command.style.display = '';
        } else {
            command.style.display = 'none';
        }
    });

    // Update the display of category sections
    const categories = document.querySelectorAll('.command-category');
    categories.forEach(category => {
        const visibleCommands = category.querySelectorAll('.command:not([style*="display: none"])');
        if (visibleCommands.length > 0) {
            category.style.display = '';
        } else {
            category.style.display = 'none';
        }
    });
}

// Copy to clipboard functionality
function copyCommand(command) {
    navigator.clipboard.writeText(command).then(function () {
        showCopyConfirmation();
        console.log('Command copied:', command);
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}

// Show copy confirmation message
function showCopyConfirmation() {
    const confirmation = document.getElementById('copyConfirmation');
    confirmation.style.opacity = '1';
    setTimeout(function () {
        confirmation.style.opacity = '0';
    }, 2000);
}

// Add custom command modal handling
document.getElementById('addCommandButton').addEventListener('click', function () {
    document.getElementById('addCommandModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('addCommandModal').style.display = 'none';
});

document.getElementById('saveCommand').addEventListener('click', function () {
    const newCommand = document.getElementById('newCommand').value;
    const newDescription = document.getElementById('newDescription').value;
    const newExamples = document.getElementById('newExamples').value.split('\n');
    const newCategory = document.getElementById('newCategory').value;

    if (newCommand && newDescription && newExamples.length > 0 && newCategory) {
        const customCommand = {
            command: newCommand,
            description: newDescription,
            examples: newExamples,
            category: newCategory
        };

        commandsData.push(customCommand);
        localStorage.setItem('commandsData', JSON.stringify(commandsData));
        loadCommands(); // Reload commands with the new addition
        document.getElementById('addCommandModal').style.display = 'none';
        document.getElementById('addCommandForm').reset(); // Reset the form for new entries
        console.log('Custom command added:', customCommand);
    }
});

// Import/Export functionality
document.getElementById('exportData').addEventListener('click', function () {
    const dataStr = JSON.stringify(commandsData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'commandsData.json';
    link.click();
    URL.revokeObjectURL(url);
    console.log('Commands exported');
});

document.getElementById('importData').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                const importedData = JSON.parse(e.target.result);
                commandsData.push(...importedData);
                localStorage.setItem('commandsData', JSON.stringify(commandsData));
                loadCommands();
                console.log('Commands imported:', importedData);
            } catch (err) {
                console.error('Error importing data:', err);
            }
        };
        reader.readAsText(file);
    }
});

// Reset to default data
document.getElementById('resetData').addEventListener('click', function () {
    if (confirm('Are you sure you want to reset to default data? This will remove all custom commands.')) {
        localStorage.removeItem('commandsData');
        location.reload();
        console.log('Data reset to default');
    }
});

// Load commands on page load
document.addEventListener('DOMContentLoaded', function () {
    const savedCommands = localStorage.getItem('commandsData');
    if (savedCommands) {
        commandsData = JSON.parse(savedCommands);
        console.log('Loaded commands from localStorage');
    }
    loadCommandFiles(); // Load command files dynamically

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeToggleText(savedTheme);
        console.log('Loaded theme from localStorage:', savedTheme);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        console.log('Default theme set to light');
    }
});

// Theme toggle functionality
document.getElementById('themeToggle').addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : currentTheme === 'dark' ? 'high-contrast' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleText(newTheme);
    console.log('Theme toggled to:', newTheme);
});

function updateThemeToggleText(theme) {
    const themeToggleButton = document.getElementById('themeToggle');
    themeToggleButton.textContent = theme === 'light' ? '🌙 Dark Mode' : theme === 'dark' ? '🔳 High Contrast' : '☀️ Light Mode';
    console.log('Theme toggle text updated to:', themeToggleButton.textContent);
}

// Event listeners for search and category filters
document.getElementById('searchInput').addEventListener('input', filterCommands);
document.getElementById('categoryFilter').addEventListener('change', filterCommands);

// Ensure the clear search button resets the filters
document.getElementById('clearSearch').addEventListener('click', function () {
    document.getElementById('searchInput').value = '';
    filterCommands();
    console.log('Search cleared');
});
