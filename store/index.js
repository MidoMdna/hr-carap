export const state = () => ({
    mainActiveComp: 'main-comp',
    mainTitle: 'القائمة الرئيسية',
})

export const mutations = {
    SET_ACTIVE_MAIN_COMP(state, payload) {
        state.mainActiveComp = payload
    },
    SET_MAIN_TITLE(state, payload) {
        state.mainTitle = payload
    }
}

export const getters = {
    getActiveComp(state) {
        return state.mainActiveComp
    },
    getMainTitle(state) {
        return state.mainTitle
    }
}
