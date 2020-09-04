<template>
    <form @submit.prevent="addRoom" >
        <label class="relative text-gray-lighter">
            <span class="sr-only">Add user</span>
            <input v-model="id" type="text" class="bg-gray-light text-sm rounded-full focus:outline-none w-full px-4 px-8 py-2"
                   placeholder="User ID (eg. 00001)"/>
            <button class="absolute right-0 inset-y-0 flex items-center mx-4">
                <icon>add</icon>
            </button>
        </label>

        <ul class="list-disc list-inside">
            <li v-for="error in errors" class="text-sm text-red-500">{{ error }}</li>
        </ul>
    </form>
</template>
<script>
import {mapActions} from "vuex";

export default {
    name: 'SidebarAddUser',
    data() {
        return {
            id: '',
            errors: [],
        }
    },
    methods: {
        ...mapActions('rooms', {
            getRooms: 'getList',
            setCurrentRoom: 'setCurrent',
        }),
        async addRoom(){
            this.errors = [];
            
            if(!this.id)
                return;
            
            try {
                const room = await this.$axios.post('/rooms', {
                    id: this.id,
                }).then(res => res.data);

                await this.getRooms();
                await this.setCurrentRoom({
                    id: room.id
                });
                
                this.id = '';
            } catch (err){
                console.log(err)
                
                if (err.response && err.response.data.errors) {
                    this.errors = err.response.data.errors.map(err => err.msg);
                }else{
                    this.errors.push('Something went wrong please try again.');
                }
            }
        }
    }
}
</script>
