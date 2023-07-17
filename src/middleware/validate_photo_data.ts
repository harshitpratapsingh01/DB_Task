import Joi from 'joi';

export class ValidatePost{
    static post_validation =  Joi.object({
        url: Joi.string().uri().required(),
        user_id: Joi.number().integer().required()
    });
}