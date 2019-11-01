module.exports = function(RED) {
    let birdName;
    function TestValidation(config) {
        RED.nodes.createNode(this,config);
        birdName = config.birdName;
    }

    RED.httpAdmin.get("/birds", (req, res) => {
        const birds = ['bird-1', 'bird-2', 'bird-3'];
        console.log('selected bird name:', birdName);
        const filtered = birds.filter(value=>{ //remove selected bird to simulate dynamic backend
            return value!==birdName;
        });
        console.log('going to return birds as:',filtered);
        res.json(filtered);
    });

    RED.nodes.registerType("test-validation",TestValidation);
};
