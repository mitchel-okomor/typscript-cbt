'use strict';

import { responseInfo, camelCase2Words } from './common';
import {Request} from 'express'

export const joiValidate = (schema:any , req:Request, interpretLabel = true, data:any) => {
  console.log('Label: ' + interpretLabel);

  let values;
  if (data) {values = data;}else{
	values = req.body;
  }

  const result = schema.validate(values, { abortEarly: false });
  if (!result.error) return true;
  const error = result.error.details[0];
  const msg:any = joiCustomErrorMsg(error, interpretLabel);

  return responseInfo(400, 'error', null, msg);
};

const joiCustomErrorMsg = (error:any, interpretLabel = true) => {
  const context = error.context;
  const label = interpretLabel ? camelCase2Words(context.label) : context.key;

  let msg;
  switch (error.type) {
    case 'string.base':
    case 'number.base':
    case 'object.base':
      const base = error.type.split('.')[0];
      msg = `${label} must be ${base == 'object' ? 'an' : 'a'} ${base}`;
      break;
    case 'any.required':
    case 'string.required':
    case 'number.required':
    case 'object.required':
      msg = `${label} is required!`;
      break;
    case 'any.empty':
    case 'string.empty':
    case 'number.empty':
    case 'object.empty':
      msg = `${label} cannot not be empty!`;
      break;
    case 'string.email':
      msg = `${label} must be a valid email address!`;
      break;
    case 'any.unknown':
    case 'string.unknown':
    case 'number.unknown':
    case 'object.unknown':
      msg = `${label} is not allowed!`;
      break;
    case 'any.only':
      //check for refs
      const refObj = context.valids[0] || null; //this wouldn't be an object otherwise
      if (refObj && typeof refObj === 'object') {
        const refKey = refObj.key || '';
        msg = `${label} must match ${camelCase2Words(refKey)}!`;
      } else {
        msg = `${label} must be one of the following: ${context.valids.join(
          ', '
        )}`;
      }
      break;
    case 'any.invalid':
      msg = `${label} is invalid!`;
      break;
    case 'any.min':
    case 'string.min':
    case 'number.min':
      msg = `${label} should have at least ${context.limit} characters!`;
      break;
    case 'any.max':
    case 'string.max':
    case 'number.max':
      msg = `${label} should have at most ${context.limit} characters!`;
      break;
  }
  return msg;
};
