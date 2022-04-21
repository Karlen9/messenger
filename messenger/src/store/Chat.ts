import { computed, makeObservable } from "mobx";
import { v4 } from "uuid";
export class Chat {
  private _id: string;
  private _isPrivate: boolean;

  constructor(isPrivate: boolean) {
    this._isPrivate = isPrivate;
    this._id = v4();

    makeObservable(this)
  }

  @computed get id() {
    return this._id;
  }

  @computed get isPrivate() {
    return this._isPrivate;
  }
}
