const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");
chai.use(chaiHttp);

describe("/logs",(done)=>{
	it("Should respond with 202",(done)=>{
		chai.request(app).post("/logs").set(
			"x-uipath-signature", process.env.SECRET
		).send({
			"data":"here is some data"
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
			"data":"here is some data"
		}).end((err,res)=>{
			expect(err).to.be.null;
			expect(res).to.have.status(401);
			done();
		})
	})
});
