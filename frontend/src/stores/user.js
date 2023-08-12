import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',

    state: () => ({
        user: {
            email: null,
            access: null,
        }
    }),

    actions: {
        initStore() {
            console.log('initStore', localStorage.getItem('user.access'))

            if (localStorage.getItem('user.access')) {
                console.log('User has access!')
                this.user.access = localStorage.getItem('user.access')
                this.user.email = localStorage.getItem('user.email')
                console.log('Initialized user:', this.user)
            }
        },

        setToken(data, username) {
            try {
                console.log('setToken', data, username)
            this.user.access = data
            console.log('print', this.user.access)
            localStorage.setItem('user.access', data)
            localStorage.setItem('user.email', username)
            console.log('user.access: ', localStorage.getItem('user.access'), localStorage.getItem('user.email'))
            }
            catch(error) {
                console.log(error)
            }
            
        },

        removeToken() {
            console.log('removeToken')

            this.user.access = null
            this.user.email = null

            localStorage.setItem('user.access', '')
        },
    }
})
