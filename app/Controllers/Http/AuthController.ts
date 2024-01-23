import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    try {
      const data = request.only(["email", "password"]);

      const user = await User.create(data);

      return response.json({
        message: "Registration Successfull",
        content: { email: user?.email, password: user?.password },
      });
    } catch (error) {
      return response.json({
        message: "Authenticaiton Failed",
        content: error?.message ?? error,
      });
    }
  }

  public async login({ request, response, auth }: HttpContextContract) {
    try {
      const { email, password } = request.only(["email", "password"]);
      const token = await auth
        .use("api")
        .attempt(email, password, { expiresIn: "1h" });
      return response.json({
        message: "Login Successfull",
        token: token.toJSON(),
      });
    } catch (error) {
      return response.json({
        message: "Authenticaiton Failed",
        content: error?.message ?? error,
      });
    }
  }
}
