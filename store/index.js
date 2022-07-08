export const state = () => ({
    vacanciesCount: 0,
    employers: {},
    finders: {}
  })
  
  export const mutations = {
    setVacanciesCount(state, vacanciesCount) {
      state.vacanciesCount = vacanciesCount
    },
    setEmployers(state, employers) {
      state.employers = employers
    },
    setFinders(state, finders) {
      state.finders = finders
    }
  }
  
  export const actions = {
    async nuxtServerInit({dispatch, commit}) {
      console.log('nuxtServerInit');
    },
    async refresh({commit}) {
      const vacancies = await this.$axios.$get('/api/tasks/')
      commit('setVacancies', vacancies)
    }
  }
  
  export const getters = {
    vacanciesCount: s => s.vacanciesCount,
    employers: s => s.employers,
    finders: s => s.finders
  }
  