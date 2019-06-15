const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const data = require("./jsonPayload");
const {es_insert} = require("../middlewear");
const ES_URL = process.env.ES_URL || "http://localhost:9200"
const {Client} = require('@elastic/elasticsearch')
const client = new Client({node: ES_URL});


describe("Web Hook MiddleWear",()=>{
	
	beforeEach("Creating Index For ElasticSearch",async()=>{
		await client.indices.create({index: process.env.INDEX},{ignore:400})
	});

	afterEach("Delete Index For ElasticSearch",async()=>{
		await client.indices.delete({index: process.env.INDEX})
	});

	// drop elasticsearch index
	// create index if does exists
	it("Should add data in elasticsearch", async()=>{
		const jobCreated = data["job.created"];
		await es_insert(jobCreated);
		// verify that information exist in the database
		try{
			const {body} = await client.search({
					index: "default-2019.04",
					body:{
						query:{
							match:{
								Type:"job.created"
							}
						}
					}
				})
			const {hits:{total}} = body;
			assert.equal(total,1 ,"There should be a total of 1 item in es");	
		}catch(e){
			console.log(e.body);
			console.log(e.body);
			console.log("Error",e);
			throw e;
		}

	})
})