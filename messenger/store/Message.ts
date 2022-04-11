import { action, computed, makeObservable } from "mobx";
import { v4 } from "uuid";

export class Message {
  private _id: string = v4();
  private _message: string;
  private _isRead: boolean = false;
  
  constructor(message: string) {
    this._message = message;

    makeObservable(this)

  }

  @computed get isRead() {
    return this._isRead;
  }

  @computed get message() {
    return this._message;
  }

  @computed get id() {
    return this._id;
  }

  @action set setMessage(message: string) {
    this._message = message;
  }

  


} 