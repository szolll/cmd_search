// data/systemAdministration.js
const systemAdministrationCommands = [
        // IPMItool Commands
        {
            command: 'ipmitool',
            description: 'Utility for IPMI control',
            examples: [
                'ipmitool sensor # Display sensor readings.',
                'ipmitool user list 1 # List users in channel 1.',
                'ipmitool chassis power status # Check the power status of the chassis.',
                'ipmitool sel elist # Display the system event log (SEL).',
                'ipmitool fru print # Display Field Replaceable Unit (FRU) information.'
            ],
            category: 'System Administration'
        },
        {
            command: 'ipmitool chassis power cycle',
            description: 'Power cycle the chassis (reboot)',
            examples: [
                'ipmitool -I lanplus -H 192.168.1.100 -U admin -P password chassis power cycle # Reboot a remote machine via IPMI.',
                'ipmitool chassis power off # Turn off the chassis power.',
                'ipmitool chassis power on # Turn on the chassis power.'
            ],
            category: 'System Administration'
        },
        // System Monitoring
        {
            command: 'top',
            description: 'Display Linux tasks in real-time',
            examples: [
                'top # Show an overview of the system and running processes.',
                'top -u user # Show processes for a specific user.',
                'top -p PID # Show only the process with the specified PID.'
            ],
            category: 'System Administration'
        },
        {
            command: 'htop',
            description: 'Interactive process viewer for Unix systems',
            examples: [
                'htop # Start htop with a visual representation of CPU, memory, and swap usage.',
                'htop -u user # Show processes for a specific user in htop.',
                'htop --sort-key PERCENT_CPU # Start htop sorted by CPU usage.'
            ],
            category: 'System Administration'
        },
        {
            command: 'vmstat',
            description: 'Report virtual memory statistics',
            examples: [
                'vmstat 5 # Display memory and CPU statistics every 5 seconds.',
                'vmstat -s # Display a summary of memory statistics.'
            ],
            category: 'System Administration'
        },
        {
            command: 'iostat',
            description: 'Report CPU and I/O statistics',
            examples: [
                'iostat # Display CPU and I/O statistics.',
                'iostat -d 5 # Display disk I/O statistics every 5 seconds.',
                'iostat -x # Display extended statistics.'
            ],
            category: 'System Administration'
        },
        {
            command: 'lsof',
            description: 'List open files',
            examples: [
                'lsof # List all open files.',
                'lsof -i :80 # List all files opened by processes listening on port 80.',
                'lsof +D /path/to/dir # List all files opened in the specified directory.'
            ],
            category: 'System Administration'
        },
        {
            command: 'dmidecode',
            description: 'DMI table decoder for hardware information',
            examples: [
                'sudo dmidecode # Display detailed hardware information.',
                'sudo dmidecode -t memory # Display memory-related information.',
                'sudo dmidecode -t system # Display system information (manufacturer, model, etc.).'
            ],
            category: 'System Administration'
        },
        // Package Management (Debian/Ubuntu)
        {
            command: 'apt update',
            description: 'Update the package index',
            examples: [
                'sudo apt update # Update the package index to reflect the latest package versions.'
            ],
            category: 'System Administration'
        },
        {
            command: 'apt upgrade',
            description: 'Upgrade all installed packages',
            examples: [
                'sudo apt upgrade # Upgrade all installed packages to their latest versions.',
                'sudo apt full-upgrade # Upgrade all packages, handling dependencies and removing old packages if necessary.'
            ],
            category: 'System Administration'
        },
        {
            command: 'apt install',
            description: 'Install new packages',
            examples: [
                'sudo apt install package-name # Install a specific package.',
                'sudo apt install apache2 # Install the Apache2 web server.'
            ],
            category: 'System Administration'
        },
        {
            command: 'apt remove',
            description: 'Remove installed packages',
            examples: [
                'sudo apt remove package-name # Remove a specific package.',
                'sudo apt remove --purge package-name # Remove a package and its configuration files.'
            ],
            category: 'System Administration'
        },
        {
            command: 'mandb',
            description: 'Create or update the manual page index database',
            examples: [
                'sudo mandb # Update the man-page index database.',
                'mandb -c # Force re-creation of the database from scratch.'
            ],
            category: 'System Administration'
        },
        {
            command: 'tldr',
            description: 'Simplified and community-driven man pages',
            examples: [
                'tldr tar # Show simplified usage examples for the tar command.',
                'tldr -u # Update the tldr database.'
            ],
            category: 'System Administration'
        },
        // Package Management (RedHat/CentOS/Fedora)
        {
            command: 'yum update',
            description: 'Update the system and installed packages',
            examples: [
                'sudo yum update # Update all installed packages to the latest version.',
                'sudo yum update --security # Update only security-related packages.'
            ],
            category: 'System Administration'
        },
        {
            command: 'yum install',
            description: 'Install new packages',
            examples: [
                'sudo yum install package-name # Install a specific package.',
                'sudo yum install httpd # Install the Apache HTTP server.'
            ],
            category: 'System Administration'
        },
        {
            command: 'yum remove',
            description: 'Remove installed packages',
            examples: [
                'sudo yum remove package-name # Remove a specific package.',
                'sudo yum remove httpd # Remove the Apache HTTP server package.'
            ],
            category: 'System Administration'
        },
        {
            command: 'yum history rollback',
            description: 'Rollback to a previous state using the yum history',
            examples: [
                'sudo yum history rollback last # Rollback to the previous transaction.',
                'sudo yum history rollback 10 # Rollback to a specific transaction ID 10.',
                'sudo yum history info 10 # Show details of transaction ID 10.'
            ],
            category: 'System Administration'
        },
        // Package Management (Fedora/DNF)
        {
            command: 'dnf update',
            description: 'Update all installed packages',
            examples: [
                'sudo dnf update # Update all installed packages to the latest version.',
                'sudo dnf update --security # Update only security-related packages.'
            ],
            category: 'System Administration'
        },
        {
            command: 'dnf install',
            description: 'Install new packages',
            examples: [
                'sudo dnf install package-name # Install a specific package.',
                'sudo dnf install nginx # Install the NGINX web server.'
            ],
            category: 'System Administration'
        },
        {
            command: 'dnf remove',
            description: 'Remove installed packages',
            examples: [
                'sudo dnf remove package-name # Remove a specific package.',
                'sudo dnf remove nginx # Remove the NGINX web server package.'
            ],
            category: 'System Administration'
        },
        // Package Management (Arch Linux)
        {
            command: 'pacman -Syu',
            description: 'Synchronize and update all packages',
            examples: [
                'sudo pacman -Syu # Synchronize and update all installed packages to the latest version.',
                'sudo pacman -Syuu # Perform a downgrade if necessary to resolve dependencies.'
            ],
            category: 'System Administration'
        },
        {
            command: 'pacman -S',
            description: 'Install new packages',
            examples: [
                'sudo pacman -S package-name # Install a specific package.',
                'sudo pacman -S vim # Install the Vim text editor.'
            ],
            category: 'System Administration'
        },
        {
            command: 'pacman -R',
            description: 'Remove installed packages',
            examples: [
                'sudo pacman -R package-name # Remove a specific package.',
                'sudo pacman -R vim # Remove the Vim text editor.'
            ],
            category: 'System Administration'
        },
        // Disk and SMART Tools
        {
            command: 'smartctl',
            description: 'Control and monitor storage devices using SMART',
            examples: [
                'sudo smartctl -a /dev/sda # Display all SMART information for /dev/sda.',
                'sudo smartctl -t short /dev/sda # Run a short self-test on /dev/sda.',
                'sudo smartctl -H /dev/sda # Check the health status of /dev/sda.'
            ],
            category: 'System Administration'
        }
];
commandsData.push(...systemAdministrationCommands);
console.log('System Administration Commands Loaded:', systemAdministrationCommands);
