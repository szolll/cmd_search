// data/ansible.js

if (typeof commandsData !== 'undefined') {
    const ansibleCommands = [
        {
            command: 'ansible all -m ping',
            description: 'Ping all managed nodes to check connectivity',
            examples: [
                'ansible all -m ping # Ping all hosts in the inventory.',
                'ansible webservers -m ping # Ping all hosts in the webservers group.'
            ],
            category: 'Ansible'
        },
        {
            command: 'ansible-playbook',
            description: 'Run an Ansible playbook',
            examples: [
                'ansible-playbook site.yml # Run the playbook defined in site.yml.',
                'ansible-playbook -i inventory.yml site.yml # Run playbook with specified inventory.'
            ],
            category: 'Ansible'
        },
        {
            command: 'ansible all -a "command"',
            description: 'Run a command on all hosts using ad-hoc mode',
            examples: [
                'ansible all -a "uptime" # Run "uptime" command on all hosts.',
                'ansible webservers -a "df -h" # Run "df -h" on webservers group.'
            ],
            category: 'Ansible'
        },
        {
            command: 'ansible all -m copy -a',
            description: 'Copy files to remote hosts',
            examples: [
                'ansible all -m copy -a "src=/local/path dest=/remote/path" # Copy files to remote hosts.',
                'ansible dbservers -m copy -a "src=/tmp/config.cnf dest=/etc/my.cnf owner=root mode=0644" # Copy and set permissions.'
            ],
            category: 'Ansible'
        },
        {
            command: 'ansible all -m user -a',
            description: 'Manage user accounts on remote hosts',
            examples: [
                'ansible all -m user -a "name=john state=present" # Create user "john".',
                'ansible all -m user -a "name=john state=absent" # Delete user "john".'
            ],
            category: 'Ansible'
        },
        // Additional Commands
        {
            command: 'ansible all -m yum -a',
            description: 'Manage packages using the yum package manager',
            examples: [
                'ansible all -m yum -a "name=httpd state=present" # Install httpd package on all hosts.',
                'ansible webservers -m yum -a "name=httpd state=absent" # Remove httpd package from webservers group.'
            ],
            category: 'Ansible'
        },
        {
            command: 'ansible all -m service -a',
            description: 'Manage services on remote hosts',
            examples: [
                'ansible all -m service -a "name=httpd state=started" # Start httpd service on all hosts.',
                'ansible dbservers -m service -a "name=mariadb state=stopped" # Stop mariadb service on dbservers group.'
            ],
            category: 'Ansible'
        },
        {
            command: 'ansible all -m shell -a',
            description: 'Execute shell commands on remote hosts',
            examples: [
                'ansible all -m shell -a "echo Hello, World!" # Execute a shell command on all hosts.',
                'ansible webservers -m shell -a "ls -al /var/www" # List contents of /var/www on webservers group.'
            ],
            category: 'Ansible'
        },
        {
            command: 'ansible-vault encrypt',
            description: 'Encrypt sensitive data using Ansible Vault',
            examples: [
                'ansible-vault encrypt secret.yml # Encrypt the file secret.yml.',
                'ansible-vault encrypt --vault-id vault_password secret.yml # Encrypt using a specific vault ID.'
            ],
            category: 'Ansible'
        },
        {
            command: 'ansible-vault decrypt',
            description: 'Decrypt an encrypted file using Ansible Vault',
            examples: [
                'ansible-vault decrypt secret.yml # Decrypt the file secret.yml.',
                'ansible-vault decrypt --vault-id vault_password secret.yml # Decrypt using a specific vault ID.'
            ],
            category: 'Ansible'
        },
        {
            command: 'ansible-doc',
            description: 'Show documentation on modules',
            examples: [
                'ansible-doc -l # List all available modules with short descriptions.',
                'ansible-doc yum # Show documentation for the yum module.'
            ],
            category: 'Ansible'
        },
        {
            command: 'ansible-galaxy install',
            description: 'Install roles and collections from Ansible Galaxy',
            examples: [
                'ansible-galaxy install username.role_name # Install a specific role from Ansible Galaxy.',
                'ansible-galaxy install -r requirements.yml # Install roles and collections from requirements file.'
            ],
            category: 'Ansible'
        },
        {
            command: 'ansible-config view',
            description: 'View the active configuration file',
            examples: [
                'ansible-config view # View the active configuration file.',
                'ansible-config view -c /path/to/ansible.cfg # View a specific configuration file.'
            ],
            category: 'Ansible'
        }
    ];
    commandsData.push(...ansibleCommands);
    console.log('Ansible Commands Loaded:', ansibleCommands);
    console.log('Total Commands in commandsData:', commandsData.length);
} else {
    console.error('Error: commandsData is not defined. Ensure that script.js is loaded first.');
}
