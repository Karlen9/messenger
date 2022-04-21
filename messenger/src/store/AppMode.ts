import { action, computed, makeObservable } from "mobx";

export class AppMode {
    private _mode: string = 'default';
    
    constructor() {
        makeObservable(this)
    }

    @computed get mode() {
        return this._mode
    } 

    @action set setMode(mode: string) {
        this._mode = mode;
    }
} 