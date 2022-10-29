import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    // 保存するTODOタスク
    state: {
        todos: []
    },
    // todos配列の取得
    getters: {
        getTodos: state => state.todos
    },
    // 作成したtodoの追加する関数の定義
    mutations: {
        addTodoFromMutations(state, todo) {
            state.todos.push(todo);
        },
        deleteTodo(state, index) {
            state.todos.splice(index, 1);
        }
    },
    // 作成したtodoの追加
    actions: {
        addTodoFromActions({commit}, todoInput) {
            commit("addTodoFromMutations", todoInput);
        },
        deleteTodo({commit}, todoIndex) {
            commit('deleteTodo', todoIndex);
        }
    }
 });
};
export default createStore; 