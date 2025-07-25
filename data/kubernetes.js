const kubernetesCommands = [
    {
        command: 'kubectl',
        description: 'Command-line tool for interacting with Kubernetes clusters',
        examples: [
            'kubectl get pods - List all pods in the current namespace.',
            'kubectl get nodes - List all nodes in the cluster.',
            'kubectl version - Display client and server version information.'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl apply',
        description: 'Apply a configuration to a resource by file or stdin',
        examples: [
            'kubectl apply -f pod.yaml - Apply a pod configuration from pod.yaml.',
            'kubectl apply -f dir/ - Apply configurations from all files in a directory.',
            'kubectl apply -f https://url/to/config.yaml - Apply a configuration from a URL.'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl get',
        description: 'Display one or many resources',
        examples: [
            'kubectl get pods - List all pods in the current namespace.',
            'kubectl get deployments --namespace kube-system - List deployments in kube-system.',
            'kubectl get svc -o wide - List services with detailed information.'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl describe',
        description: 'Show detailed information about a resource',
        examples: [
            'kubectl describe pod my-pod - Show details of the pod named "my-pod".',
            'kubectl describe node minikube - Show details of the node "minikube".',
            'kubectl describe service my-service - Show details of the service "my-service".'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl create',
        description: 'Create a resource from a file or stdin',
        examples: [
            'kubectl create -f deployment.yaml - Create a deployment from deployment.yaml.',
            'kubectl create namespace my-namespace - Create a namespace named "my-namespace".',
            'kubectl create secret generic my-secret --from-literal=key=value - Create a secret.'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl delete',
        description: 'Delete resources by filenames, stdin, or names',
        examples: [
            'kubectl delete pod my-pod - Delete the pod named "my-pod".',
            'kubectl delete -f deployment.yaml - Delete resources defined in deployment.yaml.',
            'kubectl delete namespace my-namespace - Delete the namespace "my-namespace".'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl exec',
        description: 'Execute a command in a container',
        examples: [
            'kubectl exec my-pod -- ls - List files in the default container of "my-pod".',
            'kubectl exec -it my-pod -- bash - Start an interactive bash session in "my-pod".',
            'kubectl exec my-pod -c my-container -- env - Show environment variables in "my-container".'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl logs',
        description: 'Print the logs for a container in a pod',
        examples: [
            'kubectl logs my-pod - Print logs for the default container in "my-pod".',
            'kubectl logs my-pod -c my-container - Print logs for a specific container.',
            'kubectl logs my-pod --follow - Stream logs in real-time.'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl scale',
        description: 'Set a new size for a deployment, replica set, or replication controller',
        examples: [
            'kubectl scale deployment my-deployment --replicas=3 - Scale to 3 replicas.',
            'kubectl scale --replicas=0 deployment/my-deployment - Scale down to 0 replicas.',
            'kubectl scale statefulset my-statefulset --replicas=5 - Scale a statefulset.'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl config',
        description: 'Manage cluster configuration in kubeconfig file',
        examples: [
            'kubectl config get-contexts - List all available contexts.',
            'kubectl config use-context my-cluster - Switch to the "my-cluster" context.',
            'kubectl config set-cluster my-cluster --server=https://cluster-url - Set cluster details.'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl port-forward',
        description: 'Forward one or more local ports to a pod',
        examples: [
            'kubectl port-forward svc/my-service 5000 - Forward local port 5000 to service port 5000.',
            'kubectl port-forward pod/my-pod 8080:80 - Forward local port 8080 to pod port 80.',
            'kubectl port-forward deployment/my-deployment 5000:6000 - Forward to a deployment pod.'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl top',
        description: 'Display resource (CPU/memory) usage of nodes or pods',
        examples: [
            'kubectl top pod my-pod - Show CPU and memory usage for "my-pod".',
            'kubectl top node - Show resource usage for all nodes.',
            'kubectl top pod --namespace my-namespace - Show pod usage in a specific namespace.'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl rollout',
        description: 'Manage the rollout of a resource',
        examples: [
            'kubectl rollout status deployment/my-deployment - Check the status of a deployment rollout.',
            'kubectl rollout undo deployment/my-deployment - Roll back to the previous deployment.',
            'kubectl rollout restart deployment/my-deployment - Restart a deployment.'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl expose',
        description: 'Expose a resource as a new Kubernetes service',
        examples: [
            'kubectl expose deployment my-deployment --port=80 - Create a service for a deployment.',
            'kubectl expose pod my-pod --port=8080 --type=NodePort - Expose a pod as NodePort.',
            'kubectl expose rs my-replicaset --port=80 --target-port=8080 - Expose a replica set.'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl annotate',
        description: 'Update the annotations on a resource',
        examples: [
            'kubectl annotate pod my-pod key=value - Add annotation "key=value" to "my-pod".',
            'kubectl annotate pod my-pod key- - Remove annotation "key" from "my-pod".',
            'kubectl annotate deployment my-deployment key=value --overwrite - Overwrite existing annotation.'
        ],
        category: 'Kubernetes Commands'
    },
    {
        command: 'kubectl label',
        description: 'Update the labels on a resource',
        examples: [
            'kubectl label pod my-pod app=frontend - Add label "app=frontend" to "my-pod".',
            'kubectl label pod my-pod app- - Remove label "app" from "my-pod".',
            'kubectl label deployment my-deployment env=prod --overwrite - Overwrite existing label.'
        ],
        category: 'Kubernetes Commands'
    }
];
commandsData.push(...kubernetesCommands);
console.log('Kubernetes Commands Loaded:', kubernetesCommands);
