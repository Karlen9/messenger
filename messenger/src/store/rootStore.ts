import { makeObservable } from "mobx";
import { Message } from "./Message";
import { User } from "./User";

import { Instance } from 'mobx-state-tree';
import { createContext } from "react";

const RootStoreContext = createContext<null>(null);
export const StoreProvider = RootStoreContext.Provider;

export class RootStore {
    userStore: User;
    constructor() {
        this.userStore = new User('Alex', 'Lastra', '89959894352');

        makeObservable(this)
    }
}