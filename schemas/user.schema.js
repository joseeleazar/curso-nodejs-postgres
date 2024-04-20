const Joi = require('joi');

// const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);

const userSchema = Joi.object({
  name: Joi.string().max(100).required(),
  email: email.required(),
  password: password.required(),
  role: role.required()
});

const createUserSchema = Joi.object({
  name: Joi.string().max(100).required(),
  email: email.required(),
  password: password.required(),
  role: role.required()
});

const updateUserSchema = Joi.object({
  email: email,
  role: role,
});

const getUserSchema = Joi.object({
  id: Joi.string().guid({ version: 'uuidv4' }).required(),
});

module.exports = { userSchema, createUserSchema, updateUserSchema, getUserSchema }
