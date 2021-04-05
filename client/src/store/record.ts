
interface ComplexRecord {
  id: number;
  title: string;
  text: string;
}

export default {
  namespaced: true,
  state: () => ({
    showForm: false,
    record: {},
    recordList: [
      {
        id: 1,
        title: "title1",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, provident cumque.",
      },
      {
        id: 2,
        title: "title2",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, provident cumque.",
      },
      {
        id: 3,
        title: "title3",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sapiente expedita, modi, eveniet perspiciatis vitae. Totam sit culpa eum, quod placeat iure, temporibus sed voluptate laudantium blanditiis error quidem! Illum voluptatum, placeat repellat.",
      },
      {
        id: 4,
        title: "title1",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, provident cumque.",
      },
      {
        id: 5,
        title: "title1",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, provident cumque.",
      },
      {
        id: 6,
        title: "title1",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sapiente expedita, modi, eveniet perspiciatis vitae. Totam sit culpa eum, quod placeat iure, temporibus sed voluptate laudantium blanditiis error quidem! Illum voluptatum, placeat repellat.",
      },
      {
        id: 7,
        title: "title1",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sapiente expedita, modi, eveniet perspiciatis vitae. Totam sit culpa eum, quod placeat iure, temporibus sed voluptate laudantium blanditiis error quidem! Illum voluptatum, placeat repellat.",
      },
      {
        id: 8,
        title: "title1",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sapiente expedita, modi, eveniet perspiciatis vitae. Totam sit culpa eum, quod placeat iure, temporibus sed voluptate laudantium blanditiis error quidem! Illum voluptatum, placeat repellat.",
      },
    ],
  }),
  mutations: {
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
      if (idx != -1)  state.recordList.splice(idx, 1, record);
     

      state.showForm = false;
    },
  },
  getters: {
    getShowForm: (state: any) => state.showForm,
  },
};
