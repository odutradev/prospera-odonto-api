import { handleRequest } from "../../app.js";
import Service from "./users.service.js";

export default class Controller {
	service = new Service();
	
	ping = async (req, res) => handleRequest(req, res, this.service.ping);
}
