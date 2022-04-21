import { action, computed, makeObservable } from "mobx";
import { v4 } from "uuid";

interface UserMetaData {
  isError: boolean;
  isPending: boolean;
  error: string;
}

export class User {
  private _id: string = v4();
  private _firstName: string;
  private _lastName: string;
  private _number: string;
  private _avatar: string = '../assets/img/user.png';
  private _isAdmin: boolean = false;
  metaData?: UserMetaData;

  constructor(firstName: string, lastName: string, number: string, metaData?: UserMetaData) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._number = number;
    this.metaData = metaData;

    makeObservable(this);
  }

  @computed get id(): string {
    return this._id;
  }

  @computed get firstName(): string {
    return this._firstName;
  }

  @computed get lastName(): string {
    return this._lastName;
  }

  @computed get number(): string {
    return this._number;
  }

  @computed get isAdmin(): boolean {
    return this._isAdmin;
  }

  @computed get avatar(): string{
    return this._avatar;
  }

  @action setAvatar(value: string) {
    this._avatar = value
  }

  @action setName(value: string) {
    this._firstName = value
  }

  @action setNumber(value: string) {
    this._number = value
  }

}