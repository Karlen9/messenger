import { computed, makeObservable } from "mobx";
import { v4 } from "uuid";
import { User } from "./User";

export class Group {
  private _id: string = v4();
  private _groupName: string;
  private _participants: User[];
  
  constructor(groupName: string, participants: User[]) {
    this._groupName = groupName;
    this._participants = participants;

    makeObservable(this)
  }

  @computed get groupName(): string {
    return this._groupName;
  }

  @computed get participants(): User[] {
    return [...this._participants];
  }

  @computed get id() {
    return this._id;
  }
}