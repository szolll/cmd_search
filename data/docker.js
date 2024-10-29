// data/docker.js

const dockerCommands = [
    {
        command: 'docker ps',
        description: 'List running Docker containers',
        examples: [
            'docker ps - List all running containers.',
            'docker ps -a - List all containers, including stopped ones.',
            'docker ps -q - Display only container IDs.'
        ],
        category: 'Docker'
    },
    // break me
    {
        command: 'docker images',
        description: 'List Docker images',
        examples: [
            'docker images - List all images in the local repository.',
            'docker images -q - Display only image IDs.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker run',
        description: 'Run a new container',
        examples: [
            'docker run ubuntu - Run an Ubuntu container.',
            'docker run -d nginx - Run a detached Nginx container.',
            'docker run -it ubuntu bash - Run an interactive Ubuntu container with bash shell.',
            'docker run --name my_container alpine - Run a container with a custom name.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker stop',
        description: 'Stop running containers',
        examples: [
            'docker stop container_id - Stop a specific container.',
            'docker stop $(docker ps -q) - Stop all running containers.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker start',
        description: 'Start stopped containers',
        examples: [
            'docker start container_id - Start a specific container.',
            'docker start $(docker ps -a -q) - Start all stopped containers.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker restart',
        description: 'Restart containers',
        examples: [
            'docker restart container_id - Restart a specific container.',
            'docker restart $(docker ps -q) - Restart all running containers.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker rm',
        description: 'Remove containers',
        examples: [
            'docker rm container_id - Remove a specific stopped container.',
            'docker rm -f container_id - Force remove a running container.',
            'docker rm $(docker ps -a -q) - Remove all stopped containers.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker pull',
        description: 'Pull an image from a registry',
        examples: [
            'docker pull ubuntu - Pull the latest Ubuntu image.',
            'docker pull nginx:1.19 - Pull a specific version of Nginx.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker push',
        description: 'Push an image to a registry',
        examples: [
            'docker push username/repository:tag - Push an image to Docker Hub or a private registry.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker build',
        description: 'Build an image from a Dockerfile',
        examples: [
            'docker build -t my_image:latest . - Build an image with tag "my_image:latest" from the current directory.',
            'docker build -f /path/to/Dockerfile . - Build an image using a specific Dockerfile.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker rmi',
        description: 'Remove Docker images',
        examples: [
            'docker rmi image_id - Remove a specific image.',
            'docker rmi $(docker images -q) - Remove all images.'
        ],
        category: 'Docker'
    },
    // Networking
    {
        command: 'docker network ls',
        description: 'List Docker networks',
        examples: [
            'docker network ls - Display all Docker networks.',
            'docker network ls --filter driver=bridge - List networks using the bridge driver.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker network create',
        description: 'Create a new Docker network',
        examples: [
            'docker network create my_network - Create a network named "my_network".',
            'docker network create --driver bridge isolated_network - Create a bridge network.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker network connect',
        description: 'Connect a container to a network',
        examples: [
            'docker network connect my_network container_id - Connect a container to "my_network".'
        ],
        category: 'Docker'
    },
    {
        command: 'docker network disconnect',
        description: 'Disconnect a container from a network',
        examples: [
            'docker network disconnect my_network container_id - Disconnect a container from "my_network".'
        ],
        category: 'Docker'
    },
    // Volumes
    {
        command: 'docker volume ls',
        description: 'List Docker volumes',
        examples: [
            'docker volume ls - Display all Docker volumes.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker volume create',
        description: 'Create a new Docker volume',
        examples: [
            'docker volume create my_volume - Create a volume named "my_volume".'
        ],
        category: 'Docker'
    },
    {
        command: 'docker volume rm',
        description: 'Remove Docker volumes',
        examples: [
            'docker volume rm my_volume - Remove a specific volume.',
            'docker volume rm $(docker volume ls -q) - Remove all unused volumes.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker run -v',
        description: 'Mount a volume into a container',
        examples: [
            'docker run -v my_volume:/data alpine - Mount "my_volume" to /data inside the container.',
            'docker run -v /host/path:/container/path alpine - Bind mount a host directory.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker inspect',
        description: 'Display detailed information on Docker objects',
        examples: [
            'docker inspect container_id - Inspect a container.',
            'docker inspect image_id - Inspect an image.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker logs',
        description: 'Fetch the logs of a container',
        examples: [
            'docker logs container_id - Display logs from a container.',
            'docker logs -f container_id - Follow live logs from a container.'
        ],
        category: 'Docker'
    },
    // Executing Commands in Containers
    {
        command: 'docker exec',
        description: 'Run a command in a running container',
        examples: [
            'docker exec -it container_id bash - Start an interactive bash shell in a container.',
            'docker exec container_id ls /app - List contents of /app directory in a container.'
        ],
        category: 'Docker'
    },
    // Docker Compose
    {
        command: 'docker-compose up',
        description: 'Build, (re)create, start, and attach to containers for a service',
        examples: [
            'docker-compose up - Start services defined in docker-compose.yml.',
            'docker-compose up -d - Start services in detached mode.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker-compose down',
        description: 'Stop and remove containers, networks, images, and volumes',
        examples: [
            'docker-compose down - Stop services and remove containers.',
            'docker-compose down --volumes - Remove volumes associated with the services.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker-compose build',
        description: 'Build or rebuild services',
        examples: [
            'docker-compose build - Build images for services defined in docker-compose.yml.',
            'docker-compose build --no-cache - Build images without using cache.'
        ],
        category: 'Docker'
    },
    // Docker Swarm
    {
        command: 'docker swarm init',
        description: 'Initialize a swarm',
        examples: [
            'docker swarm init - Initialize a new swarm on the current node.',
            'docker swarm init --advertise-addr 192.168.1.1 - Initialize swarm with a specific IP.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker swarm join',
        description: 'Join a node to a swarm',
        examples: [
            'docker swarm join --token TOKEN IP:PORT - Join a node to the swarm using the token.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker service create',
        description: 'Create a new service',
        examples: [
            'docker service create --replicas 3 --name web nginx - Create a replicated service named "web".',
            'docker service create --name db redis - Create a service named "db" running Redis.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker service ls',
        description: 'List services in a swarm',
        examples: [
            'docker service ls - Display all services in the swarm.'
        ],
        category: 'Docker'
    },
    // Docker System Commands
    {
        command: 'docker system df',
        description: 'Show docker disk usage',
        examples: [
            'docker system df - Display disk usage of Docker objects.',
            'docker system df -v - Display detailed information.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker system prune',
        description: 'Remove unused data',
        examples: [
            'docker system prune - Remove all stopped containers, unused networks, images, and build cache.',
            'docker system prune -a - Remove all unused images, not just dangling ones.'
        ],
        category: 'Docker'
    },
    // Tagging and Managing Images
    {
        command: 'docker tag',
        description: 'Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE',
        examples: [
            'docker tag source_image:tag target_image:tag - Tag an image with a new name.',
            'docker tag image_id username/repository:tag - Tag an image for pushing to a registry.'
        ],
        category: 'Docker'
    },
    // Docker Login and Logout
    {
        command: 'docker login',
        description: 'Log in to a Docker registry',
        examples: [
            'docker login - Log in to Docker Hub.',
            'docker login myregistry.com - Log in to a private registry.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker logout',
        description: 'Log out from a Docker registry',
        examples: [
            'docker logout - Log out from Docker Hub.',
            'docker logout myregistry.com - Log out from a private registry.'
        ],
        category: 'Docker'
    },
    // Docker Save and Load
    {
        command: 'docker save',
        description: 'Save one or more images to a tar archive',
        examples: [
            'docker save -o myimage.tar my_image:latest - Save an image to a tar file.',
            'docker save my_image1 my_image2 > images.tar - Save multiple images.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker load',
        description: 'Load an image from a tar archive',
        examples: [
            'docker load -i myimage.tar - Load an image from a tar file.',
            'docker load < images.tar - Load images from a tar file using input redirection.'
        ],
        category: 'Docker'
    },
    // Copying Files
    {
        command: 'docker cp',
        description: 'Copy files/folders between a container and the local filesystem',
        examples: [
            'docker cp container_id:/path/to/file /host/path - Copy file from container to host.',
            'docker cp /host/path container_id:/path/to/file - Copy file from host to container.'
        ],
        category: 'Docker'
    },
    // Viewing Container Resource Usage
    {
        command: 'docker stats',
        description: 'Display a live stream of container(s) resource usage statistics',
        examples: [
            'docker stats - Display stats for all running containers.',
            'docker stats container_id - Display stats for a specific container.'
        ],
        category: 'Docker'
    },
    // Limiting Resources
    {
        command: 'docker run --memory',
        description: 'Limit container memory usage',
        examples: [
            'docker run --memory="256m" ubuntu - Limit memory to 256MB.',
            'docker run --memory="1g" --memory-swap="1g" ubuntu - Limit memory and swap.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker run --cpus',
        description: 'Limit container CPU usage',
        examples: [
            'docker run --cpus="1.5" ubuntu - Limit CPU usage to 1.5 cores.',
            'docker run --cpuset-cpus="0,1" ubuntu - Restrict to specific CPUs.'
        ],
        category: 'Docker'
    },
    // Environment Variables
    {
        command: 'docker run -e',
        description: 'Set environment variables',
        examples: [
            'docker run -e VAR_NAME=value ubuntu - Set an environment variable inside the container.',
            'docker run --env-file ./env.list ubuntu - Load environment variables from a file.'
        ],
        category: 'Docker'
    },
    // Debugging and Troubleshooting
    {
        command: 'docker events',
        description: 'Get real-time events from the server',
        examples: [
            'docker events - Monitor Docker events in real-time.',
            'docker events --filter event=start - Only show container start events.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker info',
        description: 'Display system-wide information',
        examples: [
            'docker info - Show information about the Docker installation.'
        ],
        category: 'Docker'
    },
    // Docker Daemon Management
    {
        command: 'systemctl status docker',
        description: 'Check the status of the Docker daemon',
        examples: [
            'systemctl status docker - Show the status of the Docker service.',
            'sudo systemctl restart docker - Restart the Docker daemon.'
        ],
        category: 'Docker'
    },
    // Backup and Restore Containers
    {
        command: 'docker commit',
        description: 'Create a new image from a container’s changes',
        examples: [
            'docker commit container_id username/myimage:latest - Save container state as an image.',
            'docker commit -m "Added new features" container_id myimage:v2 - Commit with a message.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker export',
        description: 'Export a container’s filesystem as a tar archive',
        examples: [
            'docker export -o container.tar container_id - Export container filesystem to a tar file.',
            'docker export container_id > container.tar - Export using output redirection.'
        ],
        category: 'Docker'
    },
    {
        command: 'docker import',
        description: 'Import the contents from a tarball to create a filesystem image',
        examples: [
            'docker import container.tar username/myimage:latest - Create an image from a tarball.',
            'cat container.tar | docker import - username/myimage:latest - Import using input redirection.'
        ],
        category: 'Docker'
    }
];

commandsData.push(...dockerCommands);
console.log('Docker Commands Loaded:', dockerCommands);
