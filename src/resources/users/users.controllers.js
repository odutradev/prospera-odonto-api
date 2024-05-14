import { handleRequest } from "../../app.js";
import Service from "./users.service.js";

export default class Controller {
	service = new Service();
	
	signIn = async (req, res) => handleRequest(req, res, this.service.signIn);
	signUp = async (req, res) => handleRequest(req, res, this.service.signUp);
	me = async (req, res) => handleRequest(req, res, this.service.me);
	users = async (req, res) => handleRequest(req, res, this.service.users);
	update = async (req, res) => handleRequest(req, res, this.service.update);
	delete = async (req, res) => handleRequest(req, res, this.service.delete);
}
