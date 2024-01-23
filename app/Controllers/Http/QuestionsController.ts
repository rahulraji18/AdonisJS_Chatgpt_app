import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ChatGpt from "App/Features/ChatGpt";
import Question from "App/Models/Question";

export default class QuestionsController {
  public async index({ request, response, auth }: HttpContextContract) {
    try {
      await auth.authenticate();
      const { language, numberOfQuestions } = request.all();
      let data: any = await ChatGpt(language, numberOfQuestions);
      try {
        data = JSON.parse(data);
      } catch (error) {
        return response.json({
          message: "Chatgpt response error",
        });
      }
      data = data?.map((obj: any) => {
        let id = Math.floor(Math.random() * Date.now()).toString();
        obj["question_number"] = `Q-${id.slice(0, 5)}`;
        return obj;
      });
      await Question.createMany(data);
      return response.json({
        message: "Question Fetched Successfully",
        content: data ?? {},
      });
    } catch (error) {
      return response.json({
        message: "Something went wrong!",
        content: error?.message ?? error,
      });
    }
  }
}

// .all().create().findOrfail().save().delete()
