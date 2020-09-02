<template>
    <div class="flex justify-center items-center h-full">
        <div class="bg-blue-dark text-white rounded md:min-w-128 p-8">
            <div>Welcome</div>
            
            <div class="text-3xl mt-4">Log into your account</div>
            
            <div class="mt-12">
                <label class="block">
                    <span class="block text-sm">Username</span>

                    <input type="text" class="bg-gray-light text-gray-lighter rounded focus:outline-none w-full px-4 py-2 mt-2" />
                </label>

                <label class="block mt-4">
                    <span class="block text-sm">Password</span>

                    <input type="password" class="bg-gray-light text-gray-lighter rounded focus:outline-none w-full px-4 py-2 mt-2" />
                </label>
            </div>
            
            <button class="bg-gray-lightest rounded px-8 py-2 mt-6">Login</button>
            
            <div class="text-sm text-center mt-16">
                <span>Don't have an account? </span>
                <nuxt-link to="/register" class="text-blue-500">Register</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login"
}
</script>

<style scoped>

</style>
