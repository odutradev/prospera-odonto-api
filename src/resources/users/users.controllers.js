import { handleRequest } from "../../app.js";
import Service from "./users.service.js";

export default class Controller {
	service = new Service();
	
	updatePassword = async (req, res) => handleRequest(req, res, this.service.updatePassword);
	signIn = async (req, res) => handleRequest(req, res, this.service.signIn);
	signUp = async (req, res) => handleRequest(req, res, this.service.signUp);
	update = async (req, res) => handleRequest(req, res, this.service.update);
	delete = async (req, res) => handleRequest(req, res, this.service.delete);
	users = async (req, res) => handleRequest(req, res, this.service.users);
	me = async (req, res) => handleRequest(req, res, this.service.me);
}
