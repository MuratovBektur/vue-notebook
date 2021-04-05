// interface ComplexState {
//     showForm: string;
//     record: string;
//   }

interface ComplexRecord {
    id: number;
    title: string;
    text: string;
}

export default ({
    namespaced: true,
    state: () => ({
        showForm: false,
        record: {}
    }),
    mutations: {
        CHANGE_RECORD(state: any, record: ComplexRecord) {
            state.record = record
            state.showForm = true;
        }
    },
    getters: {
        getShowForm: (state: any) => state.showForm
    }
});
