import axios from "axios";

interface ComplexRecord {
  id: string;
  title: string;
  text: string;
}

interface recordArray {
  [index: number]: { id: number; label: string; key: any };
}

export default {
  namespaced: true,
  state: () => ({
    showForm: false,
    record: {},
    recordList: [],
  }),
  mutations: {
    UPDATE_RECORDS(state: any, records) {
      state.recordList = records;
    },
    CHANGE_RECORD(state: any, record: ComplexRecord) {
      state.record = record;
      state.showForm = true;
    },
    CANCEL_EDITING(state: any) {
      state.showForm = false;
      state.record = {};
    },
    EDIT_RECORD(state: any, record: ComplexRecord) {
      const idx: number = state.recordList.findIndex(
        (r: any) => r.id == record.id
      );
      if (idx != -1) state.recordList.splice(idx, 1, record);

      state.showForm = false;
    },
    REMOVE_RECORD(state: any, id: string) {
      const idx: number = state.recordList.findIndex((r: any) => r.id == id);
      if (idx != -1) state.recordList.splice(idx, 1);
      state.showForm = false;
    },
  },
  actions: {
    async fetchRecords({ commit }) {
      const res = await axios("http://localhost:4000/api/record/all");
      commit("UPDATE_RECORDS", res.data);
    },
  },
  getters: {
    getShowForm: (state: any) => state.showForm,
  },
};
