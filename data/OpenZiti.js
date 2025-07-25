const openzitiCommands = [
    {
        command: 'ziti',
        description: 'Command-line interface for managing OpenZiti networks',
        examples: [
            'ziti --version - Display the OpenZiti CLI version.',
            'ziti edge login localhost:1280 -u admin -p admin - Log in to the Ziti Edge Controller.',
            'ziti edge list services - List all services in the network.'
        ],
        category: 'OpenZiti Commands'
    },
    {
        command: 'ziti edge create config',
        description: 'Create a configuration for services or interceptors',
        examples: [
            'ziti edge create config my-intercept intercept.v1 \'{"addresses":["example.com"], "portRanges":[{"low":80, "high":80}]}\' - Create an intercept configuration.',
            'ziti edge create config my-host host.v2 \'{"address":"192.168.1.100", "port":8080}\' - Create a host configuration.',
            'ziti edge create config-type my-app --schema-file app-schema.json - Create a custom config type.'
        ],
        category: 'OpenZiti Commands'
    },
    {
        command: 'ziti edge create identity',
        description: 'Create a new identity for clients or services',
        examples: [
            'ziti edge create identity client http-client -a http-clients - Create a client identity with attribute.',
            'ziti edge create identity service http-server - Create a service identity.',
            'ziti edge create identity user user1 -o user1.jwt - Create a user identity and output JWT.'
        ],
        category: 'OpenZiti Commands'
    },
    {
        command: 'ziti edge enroll',
        description: 'Enroll an identity using a JWT token',
        examples: [
            'ziti edge enroll user1.jwt - Enroll an identity from a JWT file.',
            'ziti edge enroll --out user1.json -o user1.json - Enroll and output to JSON file.',
            'ziti edge enroll --keyAlg EC user1.jwt - Enroll using EC algorithm.'
        ],
        category: 'OpenZiti Commands'
    },
    {
        command: 'ziti edge create service',
        description: 'Create a service in the OpenZiti network',
        examples: [
            'ziti edge create service http-service -c my-intercept my-host - Create a service with intercept and host configs.',
            'ziti edge create service ssh-service --role-attributes ssh-access - Create a service with role attributes.',
            'ziti edge create service my-service --encryption on - Create a service with encryption enabled.'
        ],
        category: 'OpenZiti Commands'
    },
    {
        command: 'ziti edge create edge-router',
        description: 'Create an edge router for the network',
        examples: [
            'ziti edge create edge-router er01 cluster01 -o er01.jwt - Create an edge router and output JWT.',
            'ziti edge create edge-router er02 --role-attributes public-router - Create a router with attributes.',
            'ziti edge create edge-router er03 --tunneler-enabled - Enable tunneler mode for the router.'
        ],
        category: 'OpenZiti Commands'
    },
    {
        command: 'ziti edge policy',
        description: 'Manage policies for service access and bindings',
        examples: [
            'ziti edge create service-policy http-access Dial --service-roles @http-service --identity-roles @http-clients - Create a dial policy.',
            'ziti edge create service-policy http-bind Bind --service-roles @http-service --identity-roles @http-server - Create a bind policy.',
            'ziti edge list service-policies - List all service policies.'
        ],
        category: 'OpenZiti Commands'
    },
    {
        command: 'ziti controller',
        description: 'Start or manage the OpenZiti controller',
        examples: [
            'ziti controller run /var/lib/ziti-controller/config.yml - Start the controller with a config file.',
            'ziti create config controller - Generate a controller configuration file.',
            'ziti controller bootstrap /opt/openziti/etc/controller/bootstrap.env - Bootstrap controller setup.'
        ],
        category: 'OpenZiti Commands'
    },
    {
        command: 'ziti router',
        description: 'Start or manage an OpenZiti router',
        examples: [
            'ziti router run /var/lib/ziti-router/config.yml - Start the router with a config file.',
            'ziti router enroll er01.jwt - Enroll a router using a JWT file.',
            'ziti router run --verbose - Start router with debug logging.'
        ],
        category: 'OpenZiti Commands'
    },
    {
        command: 'ziti ops verify ext-jwt-signer',
        description: 'Verify external JWT signer configuration for OIDC',
        examples: [
            'ziti ops verify ext-jwt-signer oidc --controller-url https://controller.example.com - Verify OIDC configuration.',
            'ziti ops verify ext-jwt-signer oidc --authenticate - Attempt authentication with the controller.',
            'ziti ops verify ext-jwt-signer oidc --id-token - Display the full ID token.'
        ],
        category: 'OpenZiti Commands'
    }
];
commandsData.push(...openzitiCommands);
console.log('OpenZiti Commands Loaded:', openzitiCommands);
