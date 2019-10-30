module.exports = function(RED) {
    function TestValidation(config) {
        RED.nodes.createNode(this,config);
    }

    RED.httpAdmin.get("/birds", (req, res) => {
        const birds = ['Please select a bird','bird-1', 'bird-2', 'bird-3'];
        //randomly remove an element from teh array between indices 1,3
        const min = 1;
        const max = 3;
        const random = Math.floor(Math.random() * (+max - +min)) + +min;
        birds.splice(random, 1);
        console.log('going to return birds as:',birds);
        res.json(birds);
    });

    RED.nodes.registerType("test-validation",TestValidation);
};