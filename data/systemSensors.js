// data/systemSensors.js

if (typeof commandsData !== 'undefined') {
    const systemSensorsCommands = [
        // lm-sensors Commands
        {
            command: 'sensors',
            description: 'Display current sensor readings',
            examples: [
                'sensors # Show all detected sensor readings for temperature, voltage, and fan speeds.',
                'sensors -u # Show sensor readings in a raw, unformatted format.',
                'sensors -A # Display all sensors without labels.'
            ],
            category: 'System Sensors'
        },
        {
            command: 'sensors-detect',
            description: 'Detect available hardware sensors on the system',
            examples: [
                'sudo sensors-detect # Run the sensors detection utility and suggest modules to load.',
                'sensors-detect --auto # Automatically detect and configure sensors without prompting.'
            ],
            category: 'System Sensors'
        },
        {
            command: 'watch sensors',
            description: 'Monitor sensor readings in real-time',
            examples: [
                'watch sensors # Display sensor readings in real-time, refreshing every 2 seconds.',
                'watch -n 1 sensors # Refresh sensor readings every second.'
            ],
            category: 'System Sensors'
        },
        // Fan Speed Control
        {
            command: 'pwmconfig',
            description: 'Configure fan speed control',
            examples: [
                'sudo pwmconfig # Detect and configure PWM-capable fan control interfaces.',
                'sudo pwmconfig --dell # Detect Dell-specific fan control capabilities.'
            ],
            category: 'System Sensors'
        },
        {
            command: 'fancontrol',
            description: 'Manage fan speed according to temperature sensors',
            examples: [
                'sudo fancontrol # Start the fan control daemon using the current configuration.',
                'sudo fancontrol -p # Print the current fan control status without changing settings.'
            ],
            category: 'System Sensors'
        },
        {
            command: 'i8kfan',
            description: 'Control Dell laptop fan speed',
            examples: [
                'sudo i8kfan 1 1 # Set both fans to low speed.',
                'sudo i8kfan 2 2 # Set both fans to high speed.',
                'sudo i8kfan 0 0 # Turn off both fans.'
            ],
            category: 'System Sensors'
        },
        // CPU Temperature Monitoring
        {
            command: 'cat /sys/class/thermal/thermal_zone0/temp',
            description: 'Read the current CPU temperature',
            examples: [
                'cat /sys/class/thermal/thermal_zone0/temp # Display the CPU temperature in millidegrees Celsius.',
                'echo $(($(cat /sys/class/thermal/thermal_zone0/temp) / 1000)) # Convert and display the CPU temperature in degrees Celsius.'
            ],
            category: 'System Sensors'
        },
        {
            command: 'watch -n 1 "cat /sys/class/thermal/thermal_zone*/temp"',
            description: 'Monitor CPU temperature in real-time',
            examples: [
                'watch -n 1 "cat /sys/class/thermal/thermal_zone*/temp" # Display CPU temperature readings every second.',
                'watch -n 1 "echo $(($(cat /sys/class/thermal/thermal_zone0/temp) / 1000))" # Display CPU temperature in degrees Celsius, refreshing every second.'
            ],
            category: 'System Sensors'
        },
        // GPU Temperature Monitoring
        {
            command: 'nvidia-smi',
            description: 'Display NVIDIA GPU temperature and usage',
            examples: [
                'nvidia-smi # Display GPU temperature, memory usage, and other information.',
                'nvidia-smi --query-gpu=temperature.gpu --format=csv # Show only the GPU temperature in CSV format.',
                'watch -n 1 nvidia-smi # Monitor GPU temperature and usage in real-time.'
            ],
            category: 'System Sensors'
        },
        {
            command: 'aticonfig --od-gettemperature',
            description: 'Display AMD GPU temperature',
            examples: [
                'aticonfig --od-gettemperature # Show the current temperature of AMD GPU.',
                'watch -n 1 aticonfig --od-gettemperature # Monitor AMD GPU temperature in real-time.'
            ],
            category: 'System Sensors'
        },
        // Hard Disk Temperature Monitoring
        {
            command: 'hddtemp',
            description: 'Display hard disk drive temperature',
            examples: [
                'sudo hddtemp /dev/sda # Show the temperature of the /dev/sda drive.',
                'sudo hddtemp /dev/sd? # Show the temperature of all detected hard disk drives.',
                'watch -n 1 sudo hddtemp /dev/sda # Monitor the temperature of the /dev/sda drive in real-time.'
            ],
            category: 'System Sensors'
        },
        // NVMe Drive Temperature Monitoring
        {
            command: 'nvme smart-log /dev/nvme0',
            description: 'Display NVMe drive temperature and health information',
            examples: [
                'sudo nvme smart-log /dev/nvme0 # Show detailed SMART log including temperature for the NVMe drive.',
                'sudo nvme smart-log /dev/nvme0 | grep temperature # Show only temperature-related information for the NVMe drive.'
            ],
            category: 'System Sensors'
        },
        // ACPI Information
        {
            command: 'acpi -t',
            description: 'Display temperature information from ACPI',
            examples: [
                'acpi -t # Show all temperature sensors detected by ACPI.',
                'acpi -V # Show detailed ACPI information including temperature, battery, and fan status.'
            ],
            category: 'System Sensors'
        },
        // IPMI Sensor Commands
        {
            command: 'ipmitool sdr',
            description: 'Display all sensor data records (SDR) from IPMI',
            examples: [
                'ipmitool sdr # Show all sensor data records including temperature, voltage, and fan speed.',
                'ipmitool sdr type Temperature # Display only temperature-related sensor data.',
                'ipmitool sdr type Fan # Display only fan-related sensor data.'
            ],
            category: 'System Sensors'
        },
        {
            command: 'ipmitool sensor',
            description: 'Display current sensor readings from IPMI',
            examples: [
                'ipmitool sensor # Show all sensor readings available through IPMI.',
                'ipmitool sensor | grep -i fan # Show only fan-related sensor readings.',
                'ipmitool sensor | grep -i temp # Show only temperature-related sensor readings.'
            ],
            category: 'System Sensors'
        },
        // Humidity Sensor Commands (If Available)
        {
            command: 'sensors | grep humidity',
            description: 'Display humidity sensor readings (if available)',
            examples: [
                'sensors | grep humidity # Show humidity sensor readings, if supported by hardware.',
                'watch -n 5 "sensors | grep humidity" # Monitor humidity sensor readings in real-time.'
            ],
            category: 'System Sensors'
        }
    ];

    // Debugging: Verify the array content
    console.log('systemSensorsCommands:', systemSensorsCommands);

    // Check if each command is pushed correctly
    systemSensorsCommands.forEach((cmd, index) => {
        console.log(`Pushing command ${index + 1}: ${cmd.command}`);
        commandsData.push(cmd);
    });

    console.log('System Sensors Commands Loaded:', systemSensorsCommands);
    console.log('Total Commands in commandsData after System Sensors:', commandsData.length);
} else {
    console.error('Error: commandsData is not defined. Ensure that script.js is loaded first.');
}
