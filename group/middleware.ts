import type {Request, Response, NextFunction} from 'express';
import {Types} from 'mongoose';
import GroupCollection from '../group/collection';

const isGroupExists = async (req: Request, res: Response, next: NextFunction) => {
  const group = await GroupCollection.findOneByName(req.session.userId, req.params.group);
  if (!group) {
    res.status(404).json({
      error: {
        groupNotFound: `User does not have group ${req.params.group}.`
      }
    });
    return;
  }
  next();
};

 const isGroupNotExists = async (req: Request, res: Response, next: NextFunction) => {
  const group = await GroupCollection.findOneByName(req.session.userId, req.params.group);
  if (group) {
    res.status(409).json({
      error: {
        groupAlreadyExists: `User already has group ${req.params.group}.`
      }
    });
    return;
  }
  next();
};

const isNameNotAlreadyInUse = async (req: Request, res: Response, next: NextFunction) => {
  const group = await GroupCollection.findOneByName(req.session.userId, req.params.name);

  if (!group || (group?.name === req.params.name)) {
    next();
    return;
  }

  res.status(409).json({
    error: {
      name: `A group with this name already exists.`
    }
  });
};

export {
    isGroupExists,
    isGroupNotExists,
    isNameNotAlreadyInUse
}