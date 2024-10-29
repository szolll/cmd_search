// data/git.js

// The 'commandsData' array is passed into this script
const gitCommands = [
    {
        command: 'git clone',
        description: 'Clone a repository into a new directory',
        examples: [
            'git clone https://github.com/user/repo.git # Clone a remote repository.',
            'git clone /path/to/repo # Clone a local repository.'
        ],
        category: 'Git'
    },
    {
        command: 'git status',
        description: 'Show the working tree status',
        examples: [
            'git status # Display the status of the working directory and staging area.'
        ],
        category: 'Git'
    },
    {
        command: 'git add',
        description: 'Add file contents to the index',
        examples: [
            'git add file.txt # Add "file.txt" to the staging area.',
            'git add . # Add all changes in the current directory to the staging area.'
        ],
        category: 'Git'
    },
    {
        command: 'git commit',
        description: 'Record changes to the repository',
        examples: [
            'git commit -m "Commit message" # Commit staged changes with a message.',
            'git commit -a -m "Commit message" # Stage and commit all changes with a message.'
        ],
        category: 'Git'
    },
    {
        command: 'git push',
        description: 'Update remote refs along with associated objects',
        examples: [
            'git push origin master # Push local master branch to remote origin.',
            'git push -u origin feature-branch # Push a new branch and set upstream tracking.'
        ],
        category: 'Git'
    },
    {
        command: 'git pull',
        description: 'Fetch from and integrate with another repository or a local branch',
        examples: [
            'git pull # Fetch and merge changes from the remote repository to the current branch.'
        ],
        category: 'Git'
    },
    {
        command: 'git checkout',
        description: 'Switch branches or restore working tree files',
        examples: [
            'git checkout develop # Switch to the "develop" branch.',
            'git checkout -b new-feature # Create and switch to a new branch "new-feature".'
        ],
        category: 'Git'
    },
    {
        command: 'git merge',
        description: 'Join two or more development histories together',
        examples: [
            'git merge feature-branch # Merge "feature-branch" into the current branch.',
            'git merge --no-ff feature-branch # Perform a merge with a merge commit.'
        ],
        category: 'Git'
    },
    {
        command: 'git log',
        description: 'Show commit logs',
        examples: [
            'git log # Display the commit history.',
            'git log --oneline --graph # Display a compact, graphical representation of the commit history.'
        ],
        category: 'Git'
    },
    {
        command: 'git branch',
        description: 'List, create, or delete branches',
        examples: [
            'git branch # List all local branches.',
            'git branch -d feature-branch # Delete the "feature-branch".'
        ],
        category: 'Git'
    }
];

// Add more Git commands with # separator
const additionalGitCommands = [
    {
        command: 'git stash',
        description: 'Stash the changes in a dirty working directory away',
        examples: [
            'git stash # Save changes and clean the working directory.',
            'git stash pop # Apply the most recent stash and remove it from the stash list.'
        ],
        category: 'Git'
    },
    {
        command: 'git reset',
        description: 'Reset current HEAD to the specified state',
        examples: [
            'git reset --hard HEAD~1 # Reset the working directory and index to the previous commit.',
            'git reset file.txt # Unstage "file.txt" from the staging area.'
        ],
        category: 'Git'
    },
    {
        command: 'git rebase',
        description: 'Reapply commits on top of another base tip',
        examples: [
            'git rebase master # Reapply commits from the current branch on top of "master".',
            'git rebase --interactive HEAD~3 # Interactively rebase the last three commits.'
        ],
        category: 'Git'
    },
    {
        command: 'git fetch',
        description: 'Download objects and refs from another repository',
        examples: [
            'git fetch origin # Fetch updates from the remote repository "origin".',
            'git fetch --all # Fetch updates from all remotes.'
        ],
        category: 'Git'
    },
    {
        command: 'git diff',
        description: 'Show changes between commits, commit and working tree, etc.',
        examples: [
            'git diff # Show changes between the working directory and the index.',
            'git diff HEAD~1 HEAD # Show changes between the last two commits.'
        ],
        category: 'Git'
    },
    {
        command: 'git tag',
        description: 'Create, list, delete, or verify a tag object signed with GPG',
        examples: [
            'git tag -a v1.0 -m "Version 1.0" # Create an annotated tag "v1.0".',
            'git tag -d v1.0 # Delete the tag "v1.0".'
        ],
        category: 'Git'
    },
    {
        command: 'git remote',
        description: 'Manage set of tracked repositories',
        examples: [
            'git remote -v # Show all remote repositories and their URLs.',
            'git remote add origin https://github.com/user/repo.git # Add a new remote repository "origin".'
        ],
        category: 'Git'
    },
    {
        command: 'git cherry-pick',
        description: 'Apply the changes introduced by some existing commits',
        examples: [
            'git cherry-pick abc123 # Apply the changes from commit "abc123".',
            'git cherry-pick abc123..def456 # Apply changes from a range of commits.'
        ],
        category: 'Git'
    },
    {
        command: 'git revert',
        description: 'Revert some existing commits',
        examples: [
            'git revert abc123 # Create a new commit that reverts the changes from commit "abc123".',
            'git revert HEAD~3..HEAD # Revert the last three commits.'
        ],
        category: 'Git'
    },
    {
        command: 'git archive',
        description: 'Create an archive of files from a named tree',
        examples: [
            'git archive --format=tar HEAD # Create a tar archive of the current commit.',
            'git archive --format=zip HEAD~1 -o source.zip # Create a zip archive of the previous commit.'
        ],
        category: 'Git'
    }
];

// Append additional commands to the existing array
commandsData.push(...gitCommands, ...additionalGitCommands);
console.log('Git Commands Loaded with # separator:', [...gitCommands, ...additionalGitCommands]);
