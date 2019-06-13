const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");

chai.use(chaiHttp);

describe("/logs",(done)=>{
	it("Should respond with 202",()=>{

	});

	it("Should respond with 401",()=>{

	})
});
