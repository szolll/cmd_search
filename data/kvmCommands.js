// data/kvmCommands.js

if (typeof commandsData !== 'undefined') {
    const kvmCommands = [
        // General KVM Commands
        {
            command: 'kvm -h',
            description: 'Display help for the kvm command',
            examples: [
                'kvm -h # Display the list of options available for the kvm command.',
                'kvm --help # Display detailed help information.'
            ],
            category: 'KVM'
        },
        {
            command: 'kvm -m 512 -hda /path/to/disk.img',
            description: 'Start a virtual machine with specified memory and disk image',
            examples: [
                'kvm -m 512 -hda /path/to/disk.img # Start a VM with 512MB of RAM and the specified disk image.',
                'kvm -m 1024 -cdrom /path/to/iso -boot d # Start a VM with 1GB RAM and boot from a CD image.'
            ],
            category: 'KVM'
        },
        {
            command: 'kvm -cpu host -smp 4',
            description: 'Start a VM with host CPU configuration and multiple cores',
            examples: [
                'kvm -cpu host -smp 4 -hda /path/to/disk.img # Start a VM with 4 CPU cores.',
                'kvm -cpu host -smp 2,sockets=1,cores=2,threads=1 -hda /path/to/disk.img # Start a VM with 2 CPU cores in 1 socket.'
            ],
            category: 'KVM'
        },
        {
            command: 'kvm -net nic -net user',
            description: 'Start a VM with a user-mode network stack',
            examples: [
                'kvm -net nic -net user -hda /path/to/disk.img # Start a VM with user-mode networking.',
                'kvm -net nic,model=virtio -net user -hda /path/to/disk.img # Use virtio network interface for better performance.'
            ],
            category: 'KVM'
        },
        // Virtual Machine Management
        {
            command: 'virsh create /path/to/domain.xml',
            description: 'Create and start a new virtual machine from an XML configuration',
            examples: [
                'virsh create /etc/libvirt/qemu/domain.xml # Create and start a VM using the specified XML configuration.',
                'virsh create /tmp/domain.xml # Start a VM using a temporary XML configuration.'
            ],
            category: 'KVM'
        },
        {
            command: 'virsh start vmname',
            description: 'Start an existing virtual machine by name',
            examples: [
                'virsh start myvm # Start the virtual machine named "myvm".',
                'virsh start win10 # Start a VM named "win10".'
            ],
            category: 'KVM'
        },
        {
            command: 'virsh shutdown vmname',
            description: 'Gracefully shut down a virtual machine',
            examples: [
                'virsh shutdown myvm # Shut down the VM named "myvm".',
                'virsh shutdown centos8 # Shut down a VM named "centos8".'
            ],
            category: 'KVM'
        },
        {
            command: 'virsh destroy vmname',
            description: 'Forcefully stop a virtual machine',
            examples: [
                'virsh destroy myvm # Forcefully stop the VM named "myvm".',
                'virsh destroy ubuntu20 # Forcefully stop a VM named "ubuntu20".'
            ],
            category: 'KVM'
        },
        {
            command: 'virsh suspend vmname',
            description: 'Suspend a virtual machine (pause its execution)',
            examples: [
                'virsh suspend myvm # Suspend the VM named "myvm".',
                'virsh suspend debian9 # Suspend a VM named "debian9".'
            ],
            category: 'KVM'
        },
        {
            command: 'virsh resume vmname',
            description: 'Resume a suspended virtual machine',
            examples: [
                'virsh resume myvm # Resume the VM named "myvm".',
                'virsh resume fedora33 # Resume a VM named "fedora33".'
            ],
            category: 'KVM'
        },
        {
            command: 'virsh undefine vmname',
            description: 'Remove a virtual machine configuration without deleting its disk',
            examples: [
                'virsh undefine myvm # Remove the configuration for the VM named "myvm".',
                'virsh undefine --nvram myvm # Remove the configuration and the NVRAM for UEFI VMs.'
            ],
            category: 'KVM'
        },
        // Storage Management
        {
            command: 'qemu-img create -f qcow2 /path/to/disk.img 20G',
            description: 'Create a new virtual disk image in qcow2 format',
            examples: [
                'qemu-img create -f qcow2 /var/lib/libvirt/images/disk.img 20G # Create a 20GB qcow2 disk image.',
                'qemu-img create -f raw /var/lib/libvirt/images/disk.img 20G # Create a 20GB raw disk image.'
            ],
            category: 'KVM'
        },
        {
            command: 'qemu-img convert -O qcow2 /path/to/source.img /path/to/destination.img',
            description: 'Convert a virtual disk image from one format to another',
            examples: [
                'qemu-img convert -O qcow2 /var/lib/libvirt/images/source.img /var/lib/libvirt/images/dest.qcow2 # Convert a raw image to qcow2.',
                'qemu-img convert -O raw /var/lib/libvirt/images/source.qcow2 /var/lib/libvirt/images/dest.img # Convert a qcow2 image to raw.'
            ],
            category: 'KVM'
        },
        {
            command: 'qemu-img resize /path/to/disk.img +10G',
            description: 'Resize a virtual disk image',
            examples: [
                'qemu-img resize /var/lib/libvirt/images/disk.img +10G # Increase the disk size by 10GB.',
                'qemu-img resize /var/lib/libvirt/images/disk.img 30G # Set the disk size to 30GB.'
            ],
            category: 'KVM'
        },
        // Networking
        {
            command: 'virsh net-list --all',
            description: 'List all virtual networks',
            examples: [
                'virsh net-list --all # List all active and inactive virtual networks.',
                'virsh net-list --active # List only active virtual networks.'
            ],
            category: 'KVM'
        },
        {
            command: 'virsh net-start networkname',
            description: 'Start a virtual network by name',
            examples: [
                'virsh net-start default # Start the default virtual network.',
                'virsh net-start internal-net # Start a custom virtual network named "internal-net".'
            ],
            category: 'KVM'
        },
        {
            command: 'virsh net-destroy networkname',
            description: 'Stop a virtual network by name',
            examples: [
                'virsh net-destroy default # Stop the default virtual network.',
                'virsh net-destroy internal-net # Stop a custom virtual network named "internal-net".'
            ],
            category: 'KVM'
        },
        {
            command: 'virsh net-autostart networkname',
            description: 'Enable a virtual network to start automatically at boot',
            examples: [
                'virsh net-autostart default # Enable autostart for the default network.',
                'virsh net-autostart internal-net # Enable autostart for a custom network named "internal-net".'
            ],
            category: 'KVM'
        },
        {
            command: 'virsh net-undefine networkname',
            description: 'Remove a virtual network configuration',
            examples: [
                'virsh net-undefine default # Remove the configuration for the default virtual network.',
                'virsh net-undefine internal-net # Remove the configuration for a custom virtual network named "internal-net".'
            ],
            category: 'KVM'
        }
    ];

    // Debugging: Verify the array content
    console.log('kvmCommands:', kvmCommands);

    // Check if each command is pushed correctly
    kvmCommands.forEach((cmd, index) => {
        console.log(`Pushing command ${index + 1}: ${cmd.command}`);
        commandsData.push(cmd);
    });

    console.log('KVM Commands Loaded:', kvmCommands);
    console.log('Total Commands in commandsData after KVM:', commandsData.length);
} else {
    console.error('Error: commandsData is not defined. Ensure that script.js is loaded first.');
}
