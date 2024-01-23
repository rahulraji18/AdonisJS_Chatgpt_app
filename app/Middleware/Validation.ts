import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";

export default class Validation {
  public async handle(
    { request }: HttpContextContract,
    next: () => Promise<void>
  ) {
    let ModelSchema: any = {};
    if (request.url() === "/questions") {
      ModelSchema = schema.create({
        language: schema.string(),
        numberOfQuestions: schema.number(),
      });
    } else if (request.url() === "/answer") {
      ModelSchema = schema.create({
        question_number: schema.string(),
        answer: schema.string(),
      });
    }
    else if (request.url() === "/login") {
      ModelSchema = schema.create({
        email: schema.string(),
        password: schema.string(),
      });
    }
    else if (request.url() === "/register") {
      ModelSchema = schema.create({
        email: schema.string({ trim: true }, [
          rules.email(),
          rules.unique({
            table: "users",
            column: "email",
            caseInsensitive: true,
          }),
        ]),
        password: schema.string({}, [rules.minLength(4)]),
      });
    }
    await request.validate({ schema: ModelSchema });
    await next();
  }
}
