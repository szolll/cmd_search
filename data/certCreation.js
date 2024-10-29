// data/certCreation.js

if (typeof commandsData !== 'undefined') {
    const certCreationCommands = [
        // RSA Private Key Generation
        {
            command: 'openssl genrsa',
            description: 'Generate an RSA private key',
            examples: [
                'openssl genrsa -out private.key 2048 # Generate a 2048-bit RSA private key.',
                'openssl genrsa -aes256 -out private.key 4096 # Generate a password-protected 4096-bit RSA key.'
            ],
            category: 'Cert Creation'
        },
        // Certificate Signing Request (CSR) Generation
        {
            command: 'openssl req -new -key',
            description: 'Generate a certificate signing request (CSR)',
            examples: [
                'openssl req -new -key private.key -out request.csr # Create a CSR using "private.key".',
                'openssl req -new -key private.key -out request.csr -subj "/CN=example.com" # Create a CSR with specified subject.'
            ],
            category: 'Cert Creation'
        },
        // Self-Signed Certificate Creation
        {
            command: 'openssl req -x509 -new -nodes -key',
            description: 'Create a self-signed certificate for server usage',
            examples: [
                'openssl req -x509 -new -nodes -key private.key -sha256 -days 365 -out certificate.crt # Create a self-signed certificate for 365 days.',
                'openssl req -x509 -new -key private.key -out certificate.crt -days 365 -subj "/CN=example.com/O=MyCompany/C=US" # Self-signed certificate with specified details.'
            ],
            category: 'Cert Creation'
        },
        // CSR Signing to Create Certificate
        {
            command: 'openssl x509 -req',
            description: 'Sign a CSR to create a certificate',
            examples: [
                'openssl x509 -req -in request.csr -signkey private.key -out certificate.crt # Sign CSR to create a certificate.',
                'openssl x509 -req -in request.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out certificate.crt -days 365 # Sign CSR with CA certificate and key.'
            ],
            category: 'Cert Creation'
        },
        // PKCS#12 (PFX) File Creation
        {
            command: 'openssl pkcs12 -export',
            description: 'Create a PKCS#12 (PFX) file from a certificate and private key',
            examples: [
                'openssl pkcs12 -export -out certificate.pfx -inkey private.key -in certificate.crt # Create a PFX file with certificate and private key.',
                'openssl pkcs12 -export -out certificate.pfx -inkey private.key -in certificate.crt -certfile ca.crt # Include CA certificate in PFX file.'
            ],
            category: 'Cert Creation'
        },
        // Certificate Verification
        {
            command: 'openssl verify -CAfile',
            description: 'Verify a certificate against a CA certificate',
            examples: [
                'openssl verify -CAfile ca.crt certificate.crt # Verify the certificate against the CA certificate.',
                'openssl verify -CAfile ca-bundle.crt server.crt # Verify the server certificate against the CA bundle.'
            ],
            category: 'Cert Creation'
        },
        // Private Key Generation with Specific Algorithm
        {
            command: 'openssl genpkey',
            description: 'Generate a private key using a specific algorithm',
            examples: [
                'openssl genpkey -algorithm RSA -out private.key # Generate an RSA private key.',
                'openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out private.key # Generate an EC private key with P-256 curve.'
            ],
            category: 'Cert Creation'
        },
        // EC Key and Parameter Generation
        {
            command: 'openssl ecparam -genkey -name',
            description: 'Generate an EC private key and parameters',
            examples: [
                'openssl ecparam -genkey -name secp256k1 -out private.key # Generate a private key with secp256k1 curve.',
                'openssl ecparam -genkey -name prime256v1 -out private.key # Generate a private key with prime256v1 curve.'
            ],
            category: 'Cert Creation'
        },
        // RSA Key Management
        {
            command: 'openssl rsa -in',
            description: 'Convert and manage RSA private keys',
            examples: [
                'openssl rsa -in private.key -pubout -out public.key # Extract the public key from a private key.',
                'openssl rsa -in private.key -check # Check the consistency of a private key.'
            ],
            category: 'Cert Creation'
        },
        // Certificate Revocation List (CRL) Information
        {
            command: 'openssl crl -in',
            description: 'Display information about a certificate revocation list (CRL)',
            examples: [
                'openssl crl -in crl.pem -noout -text # Display detailed information about the CRL.',
                'openssl crl -in crl.pem -text -CAfile ca.pem # Verify CRL against CA certificate.'
            ],
            category: 'Cert Creation'
        },
        // Diffie-Hellman Parameter Generation
        {
            command: 'openssl dhparam -out',
            description: 'Generate Diffie-Hellman (DH) parameters',
            examples: [
                'openssl dhparam -out dhparam.pem 2048 # Generate a 2048-bit DH parameter file.',
                'openssl dhparam -out dhparam.pem 4096 # Generate a 4096-bit DH parameter file for stronger security.'
            ],
            category: 'Cert Creation'
        },
        // Creating a Certificate Authority (CA) Certificate
        {
            command: 'openssl req -new -x509 -key',
            description: 'Create a self-signed CA certificate',
            examples: [
                'openssl req -new -x509 -key ca.key -out ca.crt -days 365 -subj "/CN=My CA/O=MyCompany/C=US" # Create a self-signed CA certificate valid for 1 year.',
                'openssl req -new -x509 -key ca.key -out ca.crt -days 730 -sha256 # Create a CA certificate valid for 2 years with SHA-256.'
            ],
            category: 'Cert Creation'
        },
        // Viewing Certificate Information
        {
            command: 'openssl x509 -in',
            description: 'Display information about a certificate',
            examples: [
                'openssl x509 -in certificate.crt -noout -text # Display detailed information about the certificate.',
                'openssl x509 -in certificate.crt -issuer -subject -dates # Show the issuer, subject, and validity dates of the certificate.'
            ],
            category: 'Cert Creation'
        }
    ];

    // Debugging: Verify the array content
    console.log('certCreationCommands:', certCreationCommands);

    // Check if each command is pushed correctly
    certCreationCommands.forEach((cmd, index) => {
        console.log(`Pushing command ${index + 1}: ${cmd.command}`);
        commandsData.push(cmd);
    });

    console.log('Cert Creation Commands Loaded:', certCreationCommands);
    console.log('Total Commands in commandsData after Cert Creation:', commandsData.length);
} else {
    console.error('Error: commandsData is not defined. Ensure that script.js is loaded first.');
}
