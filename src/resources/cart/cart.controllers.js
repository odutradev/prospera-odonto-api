import { handleRequest } from "../../app.js";
import Service from "./cart.service.js";

export default class Controller {
	service = new Service();
	
	create = async (req, res) => handleRequest(req, res, this.service.create);
	update = async (req, res) => handleRequest(req, res, this.service.update);
	delete = async (req, res) => handleRequest(req, res, this.service.delete);
	get = async (req, res) => handleRequest(req, res, this.service.get);
}
