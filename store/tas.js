export const state = () => ({
    tasks: [],
    next: null,
    prev: null
  })
  
  export const mutations = {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setNext(state, next) {
      state.next = next
    },
    setPrevious(state, prev) {
      state.prev = prev
    },
  }
  
  export const actions = {
    async fetch({commit}) {
      const tasks = await this.$axios.$get('/api/tasks/?limit=1')
      commit('setTasks', tasks.results);
      commit('setNext', tasks.next)
      commit('setPrevious', tasks.previous);
    },
    async filterByStatus({commit}, tasks) {
      const filteredTasks = [...tasks].filter(task => task.progress.toLowerCase() === 'выполнено');

      console.log(tasks)
      commit('setTasks', filteredTasks)
    },
    async fetchAll({commit}) {
      const tasks = await this.$axios.$get('/api/tasks/')
      commit('setTasks', tasks.results)
      commit('setNext', tasks.next);
      commit('setPrevious', tasks.previous);
    },
    sortByNames({commit}, tasks) {
      const sortedTasks = [...tasks].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      commit('setTasks', sortedTasks);
    },
    async fetchNext({commit}, nextLink) {
      const tasks = await this.$axios.$get('/api/' + nextLink.split('/api/')[1]); 
      commit('setTasks', tasks.results);
      commit('setNext', tasks.next);
      commit('setPrevious', tasks.previous);
    },
    async fetchPrev({commit}, prevLink) {
      const tasks = await this.$axios.$get('/api/' + prevLink.split('/api/')[1]); 
      commit('setTasks', tasks.results);
      commit('setNext', tasks.next);
      commit('setPrevious', tasks.previous);
    },
  }
  
  export const getters = {
    tasks: s => {
      console.log('got data')
      return s.tasks
    },
    next: s => s.next,
    prev: s => s.prev
  }
  