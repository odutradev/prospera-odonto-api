import { handleRequest } from "../../app.js";
import Service from "./users.service.js";

export default class Controller {
	service = new Service();
	
	signUp = async (req, res) => handleRequest(req, res, this.service.signUp);
	signIn = async (req, res) => handleRequest(req, res, this.service.signIn);
	update = async (req, res) => handleRequest(req, res, this.service.update);
	delete = async (req, res) => handleRequest(req, res, this.service.delete);
	users = async (req, res) => handleRequest(req, res, this.service.users);
	me = async (req, res) => handleRequest(req, res, this.service.me);
}
