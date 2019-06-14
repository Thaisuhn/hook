const {Client} = require('@elastic/elasticsearch')
const client = new Client({node: "http://localhost:9200"});
const es_insert = async(data) =>{
	if(data["EventId"] == null){
		throw new RangeError("invalid datatype for data.EventId expecting string");
	}
	try{
		const result = await client.create({
			index: process.env.INDEX,
			id: data["EventId"],
			type: "log",
			body: data,
			refresh: true
		},{ignore:409});
	}catch(e){
		console.log("Im Here",e);
	}

}

module.exports = {
	es_insert
}