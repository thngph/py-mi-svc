<template>
    <div class="max-w-7xl mx-auto grid grid-cols-2 gap-4 mt-6 flex items-center justify-center h-[calc(100vh-205px)]">
        <div class="main-left ml-6">
            <div class="p-12 bg-white ">
                <div class="mb-6 text-2xl">Log in</div>
                <p class="mb-6 text-gray-500">
                    Welcome to Audibilizationnnnnn! <br>
                    Log in, drag a file, take a deep breath, and your file will be converted to audio in a moment!    
                </p>
                <p class="font-bold">Don't have an account? Click here to ... I mean, contact the site owner.
            </p>
            </div>

        </div>

    <div class="main-right mr-6">
        <div class="p-12 bg-white border border-gray-200 rounded-lg">
        <form class="space-y-6" @submit.prevent="submitForm">
                    <div>
                        <!-- <label>E-mail</label><br> -->
                        <input type="email" 
                            v-model="form.email" placeholder="Your e-mail address" 
                            class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"
                            readonly
                            onfocus="this.removeAttribute('readonly');"
                        >
                    </div>

                    <div>
                        <!-- <label>Password</label><br> -->
                        <input type="password" 
                            v-model="form.password" 
                            placeholder="Your password" 
                            class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"
                            >
                    </div>

                    <template v-if="errors.length > 0">
                        <div class="bg-red-300 text-white rounded-lg p-6">
                            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                        </div>
                    </template>
                    
                    <div>
                        <button class="py-4 px-6 bg-purple-600 text-white rounded-lg hidden">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    import { useUserStore } from '@/stores/user'
    import {useToastStore} from '@/stores/toast'
    export default {
        setup() {
            const userStore = useUserStore()
            const toastStore = useToastStore()
        return {
            toastStore, userStore
            }
        },
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                errors: []
            }
        },
        methods: {
            async submitForm() {
                this.errors = []
                if (this.form.email === '') {
                    this.errors.push('Your e-mail is missing')
                }
                if (this.form.password === '') {
                    this.errors.push('Your password is missing')
                }
                if (this.errors.length === 0) {
                    await axios.post('/login', {}, {
                            auth: {
                                username: this.form.email,
                                password: this.form.password
                            }
                            })
                        .then(response => {
                            this.userStore.setToken(response.data, this.form.email)
                            console.log(response.data, this.form.email)
                            this.userStore.user.email = this.form.email
                            this.userStore.user.access = response.data
                            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data;
                        })
                        .catch(error => {
                            this.errors.push('Incorrect username or password! Please try again.')
                            console.log('error', error)
                        })
                    if (this.errors.length === 0) {
                            this.$router.push(this.$route.query.redirect || '/')
                    }
                }
            }
        }
    }
</script>