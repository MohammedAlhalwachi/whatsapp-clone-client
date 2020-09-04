export const state = () => ({
    list: [],
    currentId: undefined,
    messages: [],
});

export const getters = {
    current(state){
        return state.list.filter(room => room.id === state.currentId)[0];
    },
};

export const mutations = {
    setList(state, list){
        state.list = list;
    },
    setCurrent(state, id){
        state.currentId = id;
    },
    setMessages(state, messages){
        state.messages = messages;
    },
};

export const actions = {
    async getList({ commit }){
        try{
            const rooms = await this.$axios.get('/rooms').then(res => res.data);

            commit('setList', rooms);
        }catch (err){
            console.error(err);
        }
    },
    async getMessages({ commit, state }){
        try{
            const messages = await this.$axios.get(`/rooms/${state.currentId}/messages`).then(res => res.data);

            commit('setMessages', messages);
        }catch (err){
            console.error(err);
        }
    },
    setList({ commit }, { list }){
        commit('setList', list)
    },
    setCurrent({ commit, dispatch }, { id }){
        const idInt = parseInt(id);
        if (isNaN(idInt)) 
            commit('setCurrent', undefined);
        else {
            commit('setCurrent', idInt);
            dispatch('getMessages');
        }
    },
};
