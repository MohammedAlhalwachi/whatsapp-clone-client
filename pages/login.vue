<template>
    <div class="flex justify-center items-center h-full">
        <div class="bg-blue-dark text-white rounded md:min-w-128 p-8">
            <div>Welcome</div>
            
            <div class="text-3xl mt-4">Log into your account</div>
                        
            <form @submit.prevent="onSubmit" class="mt-12">
                <label class="block">
                    <span class="block text-sm">Email</span>

                    <input v-model="email" type="email" class="bg-gray-light text-gray-lighter rounded focus:outline-none w-full px-4 py-2 mt-2" required />
                </label>

                <label class="block mt-4">
                    <span class="block text-sm">Password</span>

                    <input v-model="password" type="password" class="bg-gray-light text-gray-lighter rounded focus:outline-none w-full px-4 py-2 mt-2" required />
                </label>

                <p v-if="error" class="text-sm text-red-500 mt-4">{{ error }}</p>

                <button class="bg-gray-lightest rounded px-8 py-2 mt-6">Login</button>
            </form>
            
            <div class="text-sm text-center mt-16">
                <span>Don't have an account? </span>
                <nuxt-link to="/register" class="text-blue-500">Register</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    middleware: 'auth',
    auth: 'guest',
    data() {
        return {
            email: '',
            password: '',
            
            error: ''
        }
    },
    methods: {
        async onSubmit() {
            this.error = ''

            try {
                let res = await this.$auth.loginWith('local', { 
                    data: {
                        email: this.email,
                        password: this.password,
                    } 
                })
                
                this.$auth.setUser(res.data)
            } catch (err) {
                this.error = 'Your credentials do not match our records'
            }
        },
    }
}
</script>

<style scoped>

</style>
