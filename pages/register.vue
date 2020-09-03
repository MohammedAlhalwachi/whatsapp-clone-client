<template>
    <div class="flex justify-center items-center h-full">
        <div class="bg-blue-dark text-white rounded md:min-w-128 p-8">
            <div>Welcome</div>

            <div class="text-3xl mt-4">Create new account</div>
            
            <ul class="list-disc list-inside mt-4">
                <li v-for="error in errors" class="text-red-500 mb-1">{{ error }}</li>
            </ul>

            <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)" class="mt-6">
                    <label class="block">
                        <span class="block text-sm">Username</span>
    
                        <ValidationProvider v-slot="{ errors }" rules="required|min:4">
                            <input v-model="username" name="username" type="text" class="bg-gray-light text-gray-lighter rounded focus:outline-none w-full px-4 py-2 mt-2" required />
                            <span class="block text-sm text-red-500">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </label>
    
    
                    <label class="block mt-4">
                        <span class="block text-sm">Email</span>
    
                        <ValidationProvider v-slot="{ errors }" rules="required|email">
                            <input v-model="email" type="text" class="bg-gray-light text-gray-lighter rounded focus:outline-none w-full px-4 py-2 mt-2" required />
                            <span class="block text-sm text-red-500">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </label>
    
                    <label class="block mt-4">
                        <span class="block text-sm">Password</span>
    
                        <ValidationProvider v-slot="{ errors }" rules="required|min:6">
                            <input v-model="password" type="password" name="password" class="bg-gray-light text-gray-lighter rounded focus:outline-none w-full px-4 py-2 mt-2" required />
                            <span class="block text-sm text-red-500">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </label>
    
                    <button class="bg-gray-lightest rounded px-8 py-2 mt-6">
                        <Spinner v-if="loading" class="w-4 h-4"></Spinner>
                        <span v-else>Register</span>
                    </button>
                </form>
            </ValidationObserver>

            <div class="text-sm text-center mt-16">
                <span>Already have an account? </span>
                <nuxt-link to="/login" class="text-blue-500">Login</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import Spinner from "@/components/Spinner";

export default {
    name: "register",
    middleware: 'auth',
    auth: 'guest',
    components: {Spinner},
    data(){
        return {
            username: '',
            email: '',
            password: '',
            
            loading: false,
            errors: [],
        }
    },
    methods: {
        async onSubmit() {
            this.errors = [];
            this.loading = true;
            
            try {
                const registerRes = await this.$axios.post('/register', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                });
                const data = registerRes.data;

                try {
                    let res = await this.$auth.loginWith('local', {
                        data: {
                            email: this.email,
                            password: this.password,
                        }
                    })

                    this.$auth.setUser(res.data)
                } catch (err) {
                    this.errors.push('Something went wrong please try again.');
                }
            }catch (error){
                if (error.response) {
                    this.errors = error.response.data.errors.map(err => err.msg);
                }else{
                    this.errors.push('Something went wrong please try again.');
                }
            }

            this.loading = false;
        }
    }
}
</script>

<style scoped>

</style>
