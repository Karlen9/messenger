import { computed, makeObservable } from "mobx";

export class Draft {
  private _draft: string;

  constructor(draft: string) {
    this._draft = draft;
    makeObservable(this);
  }

  @computed get draft() {
    return this._draft;
  }
}
