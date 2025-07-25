const cmakeCommands = [
    {
        command: 'cmake',
        description: 'Command-line interface for the CMake build system generator',
        examples: [
            'cmake -S . -B build - Generate build system in the "build" directory.',
            'cmake --build build - Build the project in the "build" directory.',
            'cmake -S . -B build -G Ninja - Generate build system using Ninja generator.'
        ],
        category: 'Build System'
    },
    {
        command: 'cmake_minimum_required',
        description: 'Specify the minimum required version of CMake',
        examples: [
            'cmake_minimum_required(VERSION 3.10) - Require CMake version 3.10 or higher.',
            'cmake_minimum_required(VERSION 3.15 FATAL_ERROR) - Require version 3.15, halt if not met.',
            'cmake_minimum_required(VERSION 3.0) - Set minimum version to 3.0.'
        ],
        category: 'Project Setup'
    },
    {
        command: 'project',
        description: 'Define the project name and optionally version or languages',
        examples: [
            'project(MyProject) - Define a project named "MyProject".',
            'project(MyProject VERSION 1.0) - Define project with version 1.0.',
            'project(MyProject LANGUAGES CXX) - Specify C++ as the project language.'
        ],
        category: 'Project Setup'
    },
    {
        command: 'add_executable',
        description: 'Add an executable target to the project',
        examples: [
            'add_executable(myapp main.cpp) - Create executable "myapp" from main.cpp.',
            'add_executable(myapp main.cpp src/file.cpp) - Include multiple source files.',
            'add_executable(myapp WIN32 main.cpp) - Create a Windows GUI executable.'
        ],
        category: 'Target Management'
    },
    {
        command: 'add_library',
        description: 'Add a library target to the project',
        examples: [
            'add_library(mylib STATIC src/lib.cpp) - Create a static library "mylib".',
            'add_library(mylib SHARED src/lib.cpp) - Create a shared library "mylib".',
            'add_library(mylib INTERFACE) - Create an interface library "mylib".'
        ],
        category: 'Target Management'
    },
    {
        command: 'target_include_directories',
        description: 'Specify include directories for a target',
        examples: [
            'target_include_directories(myapp PUBLIC include) - Add "include" directory for "myapp".',
            'target_include_directories(mylib PRIVATE src) - Add private include directory.',
            'target_include_directories(myapp INTERFACE include) - Add interface include directory.'
        ],
        category: 'Target Management'
    },
    {
        command: 'target_link_libraries',
        description: 'Specify libraries to link with a target',
        examples: [
            'target_link_libraries(myapp PUBLIC mylib) - Link "mylib" to "myapp".',
            'target_link_libraries(myapp PRIVATE pthread) - Link "pthread" privately.',
            'target_link_libraries(myapp INTERFACE fmt) - Link "fmt" as an interface library.'
        ],
        category: 'Target Management'
    },
    {
        command: 'find_package',
        description: 'Locate and configure an external package',
        examples: [
            'find_package(Boost REQUIRED) - Find and require Boost package.',
            'find_package(OpenGL COMPONENTS GL) - Find OpenGL with GL component.',
            'find_package(Qt5 REQUIRED COMPONENTS Widgets) - Find Qt5 Widgets component.'
        ],
        category: 'Dependency Management'
    },
    {
        command: 'set',
        description: 'Set a variable to a value or list',
        examples: [
            'set(MY_VAR "value") - Set MY_VAR to "value".',
            'set(SOURCES main.cpp file.cpp) - Set SOURCES to a list of files.',
            'set(CMAKE_BUILD_TYPE Debug CACHE STRING "Build type") - Set cached variable.'
        ],
        category: 'Variable Management'
    },
    {
        command: 'configure_file',
        description: 'Copy a file and substitute variables',
        examples: [
            'configure_file(config.h.in config.h) - Generate config.h from config.h.in.',
            'configure_file(input.txt output.txt @ONLY) - Substitute only @VAR@ variables.',
            'configure_file(template.cpp.in template.cpp) - Configure a source file.'
        ],
        category: 'File Operations'
    }
];
commandsData.push(...cmakeCommands);
console.log('CMake Commands Loaded:', cmakeCommands);
