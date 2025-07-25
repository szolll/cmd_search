const jbossCommands = [
    {
        command: 'jboss-cli.sh',
        description: 'Command-line interface for managing JBoss/WildFly servers',
        examples: [
            './jboss-cli.sh --connect - Connect to the running server.',
            './jboss-cli.sh --connect --command=":read-resource" - Read the root resource.',
            './jboss-cli.sh --file=script.cli - Execute a script file.'
        ],
        category: 'JBoss Commands'
    },
    {
        command: ':read-resource',
        description: 'Read the current resource attributes',
        examples: [
            ':read-resource - Read attributes of the current node.',
            ':read-resource(recursive=true) - Read resource and all children recursively.',
            ':read-resource(include-runtime=true) - Include runtime attributes.'
        ],
        category: 'JBoss Commands'
    },
    {
        command: 'deploy',
        description: 'Deploy an application to the server',
        examples: [
            'deploy /path/to/myapp.war - Deploy the WAR file.',
            'deploy /path/to/myapp.war --name=myapp - Deploy with a specific name.',
            'deploy /path/to/myapp.war --server-groups=main-server-group - Deploy to a server group in domain mode.'
        ],
        category: 'JBoss Commands'
    },
    {
        command: 'undeploy',
        description: 'Undeploy an application from the server',
        examples: [
            'undeploy myapp.war - Undeploy the application.',
            'undeploy myapp.war --keep-content - Undeploy but keep the content.',
            'undeploy myapp.war --server-groups=main-server-group - Undeploy from a server group.'
        ],
        category: 'JBoss Commands'
    },
    {
        command: 'reload',
        description: 'Reload the server configuration',
        examples: [
            ':reload - Reload the standalone server.',
            'reload --host=master - Reload a host in domain mode.',
            ':reload(admin-only=true) - Reload into admin-only mode.'
        ],
        category: 'JBoss Commands'
    },
    {
        command: 'shutdown',
        description: 'Shut down the server',
        examples: [
            ':shutdown - Shut down the standalone server.',
            'shutdown --host=master - Shut down a host in domain mode.',
            ':shutdown(restart=true) - Restart the server after shutdown.'
        ],
        category: 'JBoss Commands'
    },
    {
        command: '/subsystem=datasources/data-source add',
        description: 'Add a new datasource',
        examples: [
            '/subsystem=datasources/data-source=MyDS:add(jndi-name=java:/MyDS, driver-name=h2, connection-url=jdbc:h2:mem:test) - Add a datasource.',
            '/subsystem=datasources/data-source=MyDS:write-attribute(name=min-pool-size,value=5) - Set min pool size.',
            '/subsystem=datasources/data-source=MyDS:enable - Enable the datasource.'
        ],
        category: 'JBoss Commands'
    },
    {
        command: 'ls',
        description: 'List child resources or attributes',
        examples: [
            'ls - List children of the current node.',
            'ls /subsystem=datasources - List datasources subsystem children.',
            'ls -l - List with details.'
        ],
        category: 'JBoss Commands'
    },
    {
        command: 'cd',
        description: 'Change the current directory/context',
        examples: [
            'cd /subsystem=datasources - Change to datasources subsystem.',
            'cd .. - Go to parent node.',
            'cd / - Go to root.'
        ],
        category: 'JBoss Commands'
    },
    {
        command: 'version',
        description: 'Display the CLI version',
        examples: [
            'version - Show CLI and server version.',
            'version --verbose - Show detailed version information.'
        ],
        category: 'JBoss Commands'
    }
];
commandsData.push(...jbossCommands);
console.log('JBoss Commands Loaded:', jbossCommands);
