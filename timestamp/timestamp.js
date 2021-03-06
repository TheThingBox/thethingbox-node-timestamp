
module.exports = function(RED) {

	function TimestampNode(n) {
	
		RED.nodes.createNode(this,n);
	
		this.name = n.name;

		this.on("input", function(msg) {
		
			msg.timestamp = new Date().toISOString();
			
			this.send(msg);
		});
	}

	RED.nodes.registerType("timestamp",TimestampNode);	
}