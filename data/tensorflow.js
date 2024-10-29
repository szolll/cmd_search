// Example: data/tensorflow.js

// The 'commandsData' array is passed into this script
const tensorflowCommands = [
    {
        command: 'tf.tensor',
        description: 'Create a TensorFlow tensor',
        examples: [
            'tf.tensor([1, 2, 3, 4]) - Create a rank-1 tensor with values 1, 2, 3, 4.',
            'tf.tensor([[1, 2], [3, 4]]) - Create a rank-2 tensor with values arranged in a 2x2 matrix.'
        ],
        category: 'TensorFlow.js'
    },
    {
        command: 'tf.model',
        description: 'Create a TensorFlow model',
        examples: [
            'const model = tf.model({inputs: inputTensor, outputs: outputTensor}); - Create a model with specified input and output tensors.',
            'model.compile({optimizer: "sgd", loss: "meanSquaredError"}); - Compile the model with optimizer and loss function.'
        ],
        category: 'TensorFlow.js'
    }
];
commandsData.push(...tensorflowCommands);
console.log('TensorFlow.js Commands Loaded:', tensorflowCommands);
