import axios from "axios";

import { Commit } from "vuex";

interface IRecord {
  id: string;
  title: string;
  text: string;
}
interface IState {
  showForm: boolean;
  record: IRecord | null;
  recordList: Array<IRecord>;
}

export default {
  namespaced: true,
  state: (): IState => ({
    showForm: false,
    record: null,
    recordList: [],
  }),
  mutations: {
    UPDATE_RECORDS(state: IState, records: Array<IRecord>): void {
      state.recordList = records;
    },
    CHANGE_RECORD(state: IState, record: IRecord): void {
      state.record = record;
      state.showForm = true;
    },
    CANCEL_EDITING(state: IState): void {
      state.showForm = false;
      state.record = null;
    },
    EDIT_RECORD(state: IState, record: IRecord): void {
      const idx: number = state.recordList.findIndex(
        (r: IRecord) => r.id == record.id
      );
      if (idx != -1) state.recordList.splice(idx, 1, record);

      state.showForm = false;
    },
    REMOVE_RECORD(state: IState, id: string): void {
      const idx: number = state.recordList.findIndex(
        (r: IRecord) => r.id == id
      );
      if (idx != -1) state.recordList.splice(idx, 1);
      state.showForm = false;
    },
  },
  actions: {
    async fetchRecords({ commit }: { commit: Commit }): Promise<void> {
      const res = await axios("http://localhost:4000/api/record/all");
      commit("UPDATE_RECORDS", res.data);
    },
  },
  getters: {
    getShowForm: (state: IState): boolean => state.showForm,
  },
};
