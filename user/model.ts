import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';

/**
 * This file defines the properties stored in a User
 * DO NOT implement operations here ---> use collection file
 */

// Type definition for User on the backend
export type User = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  username: string;
  password: string;
  groupPair?: Array<Types.ObjectId>;
  groups?: Array<Types.ObjectId>;
  following?: Array<Types.ObjectId>;
  followedBy?: Array<Types.ObjectId>;
  dateJoined: Date;
};

// Mongoose schema definition for interfacing with a MongoDB table
// Users stored in this table will have these fields, with the
// type given by the type property, inside MongoDB
const UserSchema = new Schema({
  // The user's username
  username: {
    type: String,
    required: true
  },
  // The user's password
  password: {
    type: String,
    required: true
  },
  // The date the user joined
  dateJoined: {
    type: Date,
    required: true
  }
}, {
  toObject: { virtuals: true, versionKey: false },
  toJSON: { virtuals: true, versionKey: false }
});

UserSchema.virtual('groupPair', {
  ref: 'GroupPair',
  localField: '_id',
  foreignField: 'user'
});

UserSchema.virtual('groups', {
  ref: 'Group',
  localField: '_id',
  foreignField: 'user'
});

UserSchema.virtual('following', {
  ref: 'Follow',
  localField: '_id',
  foreignField: 'fromUser'
});

UserSchema.virtual('followedBy', {
  ref: 'Follow',
  localField: '_id',
  foreignField: 'toUser'
});

const UserModel = model<User>('User', UserSchema);
export default UserModel;
