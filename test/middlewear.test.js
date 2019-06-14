const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const data = require("./jsonPayload");
const {es_insert} = require("../middlewear");

const {Client} = require("es6");
const client = new Client({node: "http://localhost:9200"});

describe("Web Hook MiddleWear",()=>{
	
	beforeEach("Creating Index For ElasticSearch",async()=>{
		await client.indices.create({index: "default-2019.04"})
	});

	afterEach("Removing Index From ElasticSearch",async()=>{
		await client.indices.delete({index: "default-2019.04"})
	})
	// drop elasticsearch index
	// create index if does exists
	it("Should add data in elasticsearch", async()=>{
		const jobCreated = data("job.created");
		es_insert(jobCreated);
		// verify that information exist in the database
		const {body} = await client.search({
			index: "default-2019.04",
			body: {"Type":"job.created"}
		});

		assert.equal(body.EventId,jobCreated.EventId, "Matching EventIds together");
	})
})