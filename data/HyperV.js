const hypervCommands = [
    {
        command: 'Get-VM',
        description: 'Retrieve a list of virtual machines on the Hyper-V host',
        examples: [
            'Get-VM - List all virtual machines.',
            'Get-VM -Name MyVM - Get details of a specific VM named "MyVM".',
            'Get-VM | Where-Object {$_.State -eq "Running"} - List running VMs.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'New-VM',
        description: 'Create a new virtual machine',
        examples: [
            'New-VM -Name MyVM -MemoryStartupBytes 1GB - Create a new VM with 1GB memory.',
            'New-VM -Name MyVM -Path C:\\VMs - Specify the VM storage path.',
            'New-VM -Name MyVM -Generation 2 - Create a Generation 2 VM.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'Start-VM',
        description: 'Start a virtual machine',
        examples: [
            'Start-VM -Name MyVM - Start the VM named "MyVM".',
            'Get-VM -Name MyVM | Start-VM - Start via pipeline.',
            'Start-VM -Name MyVM -Passthru - Start and return the VM object.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'Stop-VM',
        description: 'Stop a virtual machine',
        examples: [
            'Stop-VM -Name MyVM - Shut down the VM named "MyVM".',
            'Stop-VM -Name MyVM -Force - Force stop without graceful shutdown.',
            'Stop-VM -Name MyVM -TurnOff - Immediately turn off the VM.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'Remove-VM',
        description: 'Delete a virtual machine',
        examples: [
            'Remove-VM -Name MyVM - Delete the VM named "MyVM".',
            'Remove-VM -Name MyVM -Force - Force deletion without confirmation.',
            'Get-VM -Name MyVM | Remove-VM - Remove via pipeline.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'Set-VM',
        description: 'Configure settings for a virtual machine',
        examples: [
            'Set-VM -Name MyVM -MemoryStartupBytes 2GB - Set memory to 2GB.',
            'Set-VM -Name MyVM -ProcessorCount 4 - Set CPU cores to 4.',
            'Set-VM -Name MyVM -DynamicMemory - Enable dynamic memory.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'New-VHD',
        description: 'Create a new virtual hard disk',
        examples: [
            'New-VHD -Path C:\\VMs\\MyVM.vhdx -SizeBytes 40GB - Create a 40GB VHDX.',
            'New-VHD -Path C:\\VMs\\MyVM.vhdx -Dynamic -SizeBytes 100GB - Create dynamic VHDX.',
            'New-VHD -Path C:\\VMs\\MyVM.vhd -Fixed -SizeBytes 20GB - Create fixed VHD.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'Add-VMHardDiskDrive',
        description: 'Add a hard disk drive to a virtual machine',
        examples: [
            'Add-VMHardDiskDrive -VMName MyVM -Path C:\\VMs\\MyVM.vhdx - Add a VHDX to the VM.',
            'Add-VMHardDiskDrive -VMName MyVM -Path C:\\VMs\\Data.vhdx -ControllerLocation 1 - Add to specific location.',
            'Get-VM -Name MyVM | Add-VMHardDiskDrive -Path C:\\VMs\\NewDisk.vhdx - Add via pipeline.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'Get-VMSwitch',
        description: 'Retrieve virtual switches on the Hyper-V host',
        examples: [
            'Get-VMSwitch - List all virtual switches.',
            'Get-VMSwitch -Name ExternalSwitch - Get a specific switch named "ExternalSwitch".',
            'Get-VMSwitch -SwitchType External - List external switches.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'New-VMSwitch',
        description: 'Create a new virtual switch',
        examples: [
            'New-VMSwitch -Name ExternalSwitch -NetAdapterName "Ethernet" - Create an external switch.',
            'New-VMSwitch -Name PrivateSwitch -SwitchType Private - Create a private switch.',
            'New-VMSwitch -Name InternalSwitch -SwitchType Internal - Create an internal switch.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'Resize-VHD',
        description: 'Resize a virtual hard disk',
        examples: [
            'Resize-VHD -Path C:\\VMs\\MyVM.vhdx -SizeBytes 60GB - Resize VHDX to 60GB.',
            'Resize-VHD -Path C:\\VMs\\MyVM.vhdx -MinimumSize - Shrink to minimum size.',
            'Get-VHD -Path C:\\VMs\\MyVM.vhdx | Resize-VHD -SizeBytes 80GB - Resize via pipeline.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'Convert-VHD',
        description: 'Convert a virtual hard disk between formats or types',
        examples: [
            'Convert-VHD -Path C:\\VMs\\MyVM.vhd -DestinationPath C:\\VMs\\MyVM.vhdx -VHDType Dynamic - Convert VHD to dynamic VHDX.',
            'Convert-VHD -Path C:\\VMs\\MyVM.vhdx -DestinationPath C:\\VMs\\MyVMFixed.vhdx -VHDType Fixed - Convert to fixed VHDX.',
            'Get-VHD -Path C:\\VMs\\MyVM.vhdx | Convert-VHD -DestinationPath C:\\VMs\\Converted.vhdx - Convert via pipeline.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'Mount-VHD',
        description: 'Mount a virtual hard disk to the host file system',
        examples: [
            'Mount-VHD -Path C:\\VMs\\MyVM.vhdx - Mount the VHDX as a drive.',
            'Mount-VHD -Path C:\\VMs\\MyVM.vhdx -ReadOnly - Mount in read-only mode.',
            'Mount-VHD -Path C:\\VMs\\MyVM.vhdx -NoDriveLetter - Mount without assigning a drive letter.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'Dismount-VHD',
        description: 'Dismount a mounted virtual hard disk',
        examples: [
            'Dismount-VHD -Path C:\\VMs\\MyVM.vhdx - Dismount the VHDX.',
            'Get-VHD -Path C:\\VMs\\MyVM.vhdx | Dismount-VHD - Dismount via pipeline.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'Export-VM',
        description: 'Export a virtual machine to disk',
        examples: [
            'Export-VM -Name MyVM -Path C:\\Exports - Export the VM to a directory.',
            'Export-VM -Name MyVM -Path C:\\Exports -CaptureLiveState - Export with live state.',
            'Get-VM -Name MyVM | Export-VM -Path C:\\Exports - Export via pipeline.'
        ],
        category: 'Hyper-V Commands'
    },
    {
        command: 'Import-VM',
        description: 'Import a virtual machine from disk',
        examples: [
            'Import-VM -Path C:\\Exports\\MyVM\\Virtual Machines\\*.xml - Import from export path.',
            'Import-VM -Path C:\\Exports\\MyVM -Copy -GenerateNewId - Import as a copy with new ID.',
            'Import-VM -Path C:\\Exports\\MyVM -VhdDestinationPath C:\\VMs - Import with specified VHD path.'
        ],
        category: 'Hyper-V Commands'
    }
];
commandsData.push(...hypervCommands);
console.log('Hyper-V Commands Loaded:', hypervCommands);
