module.exports = function(RED) {
    let birdName;
    function TestValidation(config) {
        RED.nodes.createNode(this,config);
        birdName = config.birdName;
    }

    RED.httpAdmin.get("/birds", (req, res) => {
        const birds = ['bird-1', 'bird-2', 'bird-3'];
        const min = 0;
        const max = 2;
        const random = Math.floor(Math.random() * (+max - +min)) + +min;
        birds.splice(random, 1); //randomly remove an element to simulate a dynamic backend
        console.log('going to return birds as:',birds);
        res.json(birds);
    });

    RED.nodes.registerType("test-validation",TestValidation);
};
