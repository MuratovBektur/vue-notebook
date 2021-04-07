import axios from "axios";

import { Commit, Dispatch } from "vuex";

interface IRecord {
  id: string;
  title: string;
  text: string;
}
interface IState {
  showForm: boolean;
  isLoaded: boolean;
  record: IRecord | null;
  showNotification: boolean;
  notification: { type: string; text: string };
  recordList: Array<IRecord>;
}

export default {
  namespaced: true,
  state: (): IState => ({
    showForm: false,
    record: null,
    isLoaded: false,
    recordList: [],
    showNotification: false,
    notification: {
      type: "",
      text: "",
    },
  }),
  mutations: {
    UPDATE_RECORDS(state: IState, records: Array<IRecord>): void {
      state.recordList = records.reverse();
    },
    CHANGE_RECORD(state: IState, record: IRecord): void {
      state.record = record;
      state.showForm = true;
    },
    CANCEL_EDITING(state: IState): void {
      state.showForm = false;
      state.record = null;
    },
  },
  actions: {
    async fetchRecords({
      commit,
      state,
    }: {
      commit: Commit;
      state: IState;
    }): Promise<void> {
      state.isLoaded = false;
      const res = await axios.get("http://localhost:4000/api/record/all");
      commit("UPDATE_RECORDS", res.data);
      state.isLoaded = true;
    },
    async fetchRecordById(
      {
        commit,
        dispatch,
        state,
      }: {
        commit: Commit;
        dispatch: Dispatch;
        state: IState;
      },
      id: string
    ): Promise<void> {
      try {
        state.isLoaded = false;
        const res = await axios.get("http://localhost:4000/api/record/" + id);
        commit("UPDATE_RECORDS", [res.data.record]);
        state.isLoaded = true;
      } catch (e) {
        console.error(e);
        state.showNotification = true;
        state.notification = {
          type: "error",
          text: "Запись не найдена",
        };
        const interval = setTimeout(() => {
          state.showNotification = false;
          state.notification = {
            type: "",
            text: "",
          };
          dispatch("fetchRecords");
          clearInterval(interval);
        }, 3000);
      }
    },
    async addRecord(
      { dispatch, state }: { dispatch: Dispatch; state: IState },
      record: { title: string; text: string }
    ): Promise<boolean> {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/record/add",
          record
        );
        await dispatch("fetchRecords");
        if (res) {
          state.showNotification = true;
          state.notification = {
            type: "success",
            text: "Запись добавленна",
          };
          const interval = setTimeout(() => {
            state.showNotification = false;
            state.notification = {
              type: "",
              text: "",
            };
            dispatch("fetchRecords");
            clearInterval(interval);
          }, 3000);
          return true;
        }
        return false;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
    async removeRecord(
      { dispatch, state }: { dispatch: Dispatch; state: IState },
      id: string
    ): Promise<void> {
      state.isLoaded = false;
      await axios.delete("http://localhost:4000/api/record/remove/" + id);
      await dispatch("fetchRecords");
    },
    async editRecord(
      { dispatch, state }: { dispatch: Dispatch; state: IState },
      record: IRecord
    ): Promise<void> {
      state.isLoaded = false;
      await axios.put("http://localhost:4000/api/record/edit/", record);
      await dispatch("fetchRecords");
      state.showForm = false;
      state.record = null;
    },
  },
  getters: {
    getShowForm: (state: IState): boolean => state.showForm,
  },
};
