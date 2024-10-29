// data/checkmk.js

// The 'commandsData' array is passed into this script
const checkmkCommands = [
    // Inventory and Monitoring Commands
    {
        command: 'cmk -I',
        description: 'Inventory services on CheckMK agents',
        examples: [
            'cmk -I hostname # Inventory services on "hostname".',
            'cmk -I -v # Verbose inventory of all hosts.',
            'cmk -I @all # Inventory all hosts.'
        ],
        category: 'CheckMK'
    },
    {
        command: 'cmk -R',
        description: 'Restart CheckMK monitoring core',
        examples: [
            'cmk -R # Restart the monitoring core to apply changes.',
            'cmk -O # Apply configuration changes and restart monitoring.'
        ],
        category: 'CheckMK'
    },
    // Backup and Restore Commands
    {
        command: 'omd backup',
        description: 'Create a backup of a CheckMK site',
        examples: [
            'omd backup mysite # Create a backup of "mysite".',
            'omd backup -N mysite /path/to/backup.tar.gz # Create a backup without performance data.'
        ],
        category: 'CheckMK'
    },
    {
        command: 'omd restore',
        description: 'Restore a CheckMK site from a backup',
        examples: [
            'omd restore mysite /path/to/backup.tar.gz # Restore "mysite" from the backup file.',
            'omd restore -b mysite /path/to/backup.tar.gz # Restore and overwrite existing site.'
        ],
        category: 'CheckMK'
    },
    // SNMP Commands
    {
        command: 'snmpwalk',
        description: 'Retrieve a subtree of management values using SNMP GETNEXT requests',
        examples: [
            'snmpwalk -v2c -c public 192.168.1.1 # Walk the SNMP tree of device at 192.168.1.1.',
            'snmpwalk -v3 -l authPriv -u user -a MD5 -A authpass -x DES -X privpass 192.168.1.1 # SNMPv3 walk with authentication and privacy.'
        ],
        category: 'CheckMK'
    },
    {
        command: 'cmk --snmpwalk',
        description: 'Perform an SNMP walk on a host and store the result',
        examples: [
            'cmk --snmpwalk hostname # Perform SNMP walk on "hostname".',
            'cmk --snmpwalk -v hostname # Verbose SNMP walk on "hostname".'
        ],
        category: 'CheckMK'
    },
    // Plugin Management Commands
    {
        command: 'cmk -P list',
        description: 'List all installed CheckMK plugins',
        examples: [
            'cmk -P list # List all installed packages (MKPs).',
            'cmk -P show plugin_name # Show details about a specific plugin.'
        ],
        category: 'CheckMK'
    },
    {
        command: 'cmk -P install',
        description: 'Install a CheckMK plugin package',
        examples: [
            'cmk -P install plugin.mkp # Install the plugin package "plugin.mkp".',
            'cmk -P install /path/to/plugin.mkp # Install plugin from specified path.'
        ],
        category: 'CheckMK'
    },
    {
        command: 'cmk -P remove',
        description: 'Remove an installed CheckMK plugin package',
        examples: [
            'cmk -P remove plugin_name # Remove the plugin package named "plugin_name".',
            'cmk -P remove -d plugin_name # Remove the plugin and delete its files.'
        ],
        category: 'CheckMK'
    },
    // Service Discovery and Activation
    {
        command: 'cmk -v --debug -II',
        description: 'Full service scan on hosts with detailed output and debugging',
        examples: [
            'cmk -v --debug -II hostname # Full service scan on "hostname".',
            'cmk -v --debug -II @all # Full service scan on all hosts.'
        ],
        category: 'CheckMK'
    },
    {
        command: 'cmk -O',
        description: 'Apply changes and restart monitoring core',
        examples: [
            'cmk -O # Apply configuration changes and restart monitoring core.',
            'cmk -O -v # Verbose output during apply and restart.'
        ],
        category: 'CheckMK'
    },
    // Checking Configurations
    {
        command: 'cmk --config-check',
        description: 'Check the CheckMK configuration for errors',
        examples: [
            'cmk --config-check # Check for configuration errors.',
            'cmk --debug --config-check # Check configuration with debugging output.'
        ],
        category: 'CheckMK'
    },
    // Managing Hosts
    {
        command: 'cmk -D',
        description: 'Dump all data about a host',
        examples: [
            'cmk -D hostname # Display detailed information about "hostname".',
            'cmk -D @all # Display information about all hosts.'
        ],
        category: 'CheckMK'
    },
    // Managing Services
    {
        command: 'cmk -v --checks=cpu.loads -n hostname',
        description: 'Run a specific check on a host without submitting results',
        examples: [
            'cmk -v --checks=cpu.loads -n hostname # Check CPU load on "hostname".',
            'cmk -v --checks=disk -n hostname # Check disk usage on "hostname".'
        ],
        category: 'CheckMK'
    },
    // Performance Data
    {
        command: 'pnp4nagios',
        description: 'Access performance data graphs',
        examples: [
            'Access via web interface at http://yourserver/pnp4nagios # View performance graphs.',
            'Check RRD files in ~/var/pnp4nagios/perfdata/ # Locate performance data files.'
        ],
        category: 'CheckMK'
    },
    // Notifications
    {
        command: 'cmk --notify',
        description: 'Manually trigger notifications',
        examples: [
            'cmk --notify # Manually send pending notifications.',
            'cmk --debug --notify # Trigger notifications with debug output.'
        ],
        category: 'CheckMK'
    },
    // Log Files
    {
        command: 'less ~/var/log/cmc.log',
        description: 'View CheckMK core log file',
        examples: [
            'less ~/var/log/cmc.log # View the core log file for troubleshooting.',
            'tail -f ~/var/log/cmc.log # Follow the log file in real-time.'
        ],
        category: 'CheckMK'
    },
    // Agent Bakery
    {
        command: 'cmk -B',
        description: 'Bake agents after configuration changes',
        examples: [
            'cmk -B # Bake agents to include the latest configuration.',
            'cmk -B -v # Verbose agent baking.'
        ],
        category: 'CheckMK'
    },
    // WATO Commands
    {
        command: 'cmk --no-cache -v hostname',
        description: 'Force active checks on a host',
        examples: [
            'cmk --no-cache -v hostname # Run checks on "hostname" without cache.',
            'cmk --no-cache -v @all # Run checks on all hosts without cache.'
        ],
        category: 'CheckMK'
    },
    // Updating CheckMK
    {
        command: 'omd update',
        description: 'Update CheckMK to a new version',
        examples: [
            'omd update mysite # Update "mysite" to the latest installed version.',
            'omd versions # List available CheckMK versions.'
        ],
        category: 'CheckMK'
    },
    // Managing Sites
    {
        command: 'omd create',
        description: 'Create a new CheckMK site',
        examples: [
            'omd create mysite # Create a new site named "mysite".',
            'omd create mysite -u myuser # Create a new site with specified admin user.'
        ],
        category: 'CheckMK'
    },
    {
        command: 'omd start',
        description: 'Start a CheckMK site',
        examples: [
            'omd start mysite # Start the site "mysite".',
            'omd restart mysite # Restart the site "mysite".'
        ],
        category: 'CheckMK'
    },
    // Livestatus Queries
    {
        command: 'unixcat ~/tmp/run/live',
        description: 'Interact with Livestatus via UNIX socket',
        examples: [
            'echo "GET services" | unixcat ~/tmp/run/live # Get all services via Livestatus.',
            'echo "GET hosts\nColumns: name address" | unixcat ~/tmp/run/live # Get host names and addresses.'
        ],
        category: 'CheckMK'
    },
    // Distributed Monitoring
    {
        command: 'omd config',
        description: 'Configure site settings, including distributed monitoring',
        examples: [
            'omd config mysite # Configure settings for "mysite".',
            'omd config mysite set MULTISITE_COOKIE_AUTH off # Disable cookie-based authentication.'
        ],
        category: 'CheckMK'
    },
    // Additional Commands
    {
        command: 'cmk -V',
        description: 'Display CheckMK version information',
        examples: [
            'cmk -V # Show the current version of CheckMK.',
            'cmk --version # Alternative command to display version.'
        ],
        category: 'CheckMK'
    },
    {
        command: 'cmk -l',
        description: 'List all hosts known to CheckMK',
        examples: [
            'cmk -l # List all configured hosts.',
            'cmk -l | grep server # Filter hosts containing "server".'
        ],
        category: 'CheckMK'
    }
];

commandsData.push(...checkmkCommands);
console.log('CheckMK Commands Loaded with # separator:', checkmkCommands);
console.log('Total Commands in CheckMK:', commandsData.length); // Add a console log to verify the total number of commands
