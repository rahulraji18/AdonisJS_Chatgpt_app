import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public question: string;

  @column()
  public answer: string;

  @column()
  public options: string

  @column()
  public question_number: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
