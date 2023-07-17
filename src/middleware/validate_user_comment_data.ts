import Joi from 'joi';
import { join } from 'path';

export class CommentValidate{
    static validate_comment = Joi.object({
        contents: Joi.string().required(),
        user_id: Joi.number().integer().required(),
        photo_id: Joi.number().integer().required()
    })
}