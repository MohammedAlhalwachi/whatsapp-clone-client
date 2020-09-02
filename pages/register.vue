<template>
    <div class="flex justify-center items-center h-full">
        <div class="bg-blue-dark text-white rounded md:min-w-128 p-8">
            <div>Welcome</div>

            <div class="text-3xl mt-4">Create new account</div>

            <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)" class="mt-12">
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
    
                    <button class="bg-gray-lightest rounded px-8 py-2 mt-6">Register</button>
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
export default {
    name: "register",
    data(){
        return {
            username: '',
            email: '',
            password: '',
        }
    },
    methods: {
        onSubmit() {
            console.log('register')
        }
    }
}
</script>

<style scoped>

</style>
