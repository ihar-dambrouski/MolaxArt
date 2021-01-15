/* eslint-disable import/prefer-default-export */
/** * src/Store.js ** */

import { observable, action, computed, makeObservable } from 'mobx';

class ListStore {
  @observable lists = []

  constructor() {
    // Just call it here
    makeObservable(this);
  }

  @observable filter = ''

  @action addList = (value) => {
    console.log(this.lists);
    this.lists.push('123213213');
  }

  @action deleteList = (list) => {
    this.lists = this.lists.filter((t) => t !== list);
  }

  @computed get filteredLists() {
    console.log(this.lists);
    return this.lists;
  }
}

const ListStor = new ListStore();

export default ListStor;
