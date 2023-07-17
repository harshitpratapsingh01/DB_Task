import Joi from 'joi';

class Validate{
    static validateUser = Joi.object({
        username: Joi.string().min(6).max(30).required()
    });
}

export {Validate};