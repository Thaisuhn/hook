const {Client} = require("es6");
const client = new Client({node: "http://localhost:9200"});
const es_insert = async(data) =>{
	if(data["EventId"] !== typeof(String) || data["EventId"] == null){
		throw new RangeError("invalid datatype for data.EventId expecting string");
	}

	await client.create({
		index:process.env.INDEX,
		id: data["EventId"],
		body: data
	});
	
}

module.exports = {
	es_insert
}