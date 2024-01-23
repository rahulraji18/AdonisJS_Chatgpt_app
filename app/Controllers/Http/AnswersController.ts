import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import Question from "App/Models/Question";

export default class AnswersController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { question_number, answer } = request.all();
      let details: any = await Question.findByOrFail(
        "question_number",
        question_number
      );
      details = {
        question: details.question,
        answer: details.answer,
        question_number: details.question_number,
        createdAt: details.createdAt,
        updatedAt: details.updatedAt,
      };
      if (details.answer != answer)
        return response.json({
          message: "Incorrect Answer",
          response: { ...details },
        });
      return response.json({
        message: "Correct Answer",
        response: { ...details },
      });
    } catch (error) {
      return response.json({
        message: "Authenticaiton Failed",
        content: error?.message ?? error,
      });
    }
  }
}
