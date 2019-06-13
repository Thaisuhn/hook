const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const data = require("./jsonPayload");
const app = require("../app");
chai.use(chaiHttp);

describe("/logs",()=>{
	it("Should respond with 202",(done)=>{
		chai.request(app).post("/logs").set(
			"x-uipath-signature", process.env.SECRET
		).send({
			"data":data["job.created"]
		}).end((err,res)=>{
			expect(err).to.be.null;
			expect(res).to.have.status(202);
			done();
		})
	});

	it("Should respond with 401",(done)=>{
		chai.request(app).post("/logs").set(
			"x-uipath-signature", "process.env.SECRET"
		).send({
			"data":data["job.created"]
		}).end((err,res)=>{
			expect(err).to.be.null;
			expect(res).to.have.status(401);
			done();
		})
	})
});
