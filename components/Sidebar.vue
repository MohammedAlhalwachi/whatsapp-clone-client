<template>
    <div class="bg-blue-dark border-r border-gray-700">
        <div class="flex justify-between items-center bg-gray-light text-gray-lighter h-16 p-4 py-2">
            <div class="flex items-center">
                <PlaceholderAvatar class="w-10 h-10"></PlaceholderAvatar>
                
                <span class="ml-4">{{ $auth.user.username }} #{{ $auth.user.id ? $auth.user.id.toString().padStart(5, '0') : ''}}</span>
            </div>

            <div class="flex">
                <button @click="toggleAddUserBar" class="mr-4">
                    <icon class="leading-normal" v-if="isAddUserBarOpen">search</icon>
                    <icon class="leading-normal" v-else>chat</icon>
                </button>
                <button @click="logout">
                    <icon class="leading-normal">logout</icon>
                </button>
            </div>
        </div>
        
        <div>
            <div class="border-b border-gray-light px-4 py-2">
                <SidebarAddUser v-if="isAddUserBarOpen"/>
                <SidebarSearchBar v-else/>
            </div>
            <div>
                <RoomItem v-for="room in rooms" v-bind="room" class="px-4"></RoomItem>
            </div>
        </div>
    </div>
</template>

<script>
import PlaceholderAvatar from "@/components/PlaceholderAvatar";
import RoomItem from "@/components/RoomItem";
import SidebarSearchBar from "@/components/SidebarSearchBar";
import SidebarAddUser from "@/components/SidebarAddUser";
import {mapActions, mapState} from "vuex";

export default {
    name: "Sidebar",
    components: {SidebarAddUser, SidebarSearchBar, RoomItem, PlaceholderAvatar},
    data(){
        return {
            isAddUserBarOpen: true,
        }
    },
    computed: {
        ...mapState('rooms', {
            rooms: 'list'
        }),
    },
    methods: {
        ...mapActions('rooms', {
            getRooms: 'getList',
        }),
        toggleAddUserBar() {
            this.isAddUserBarOpen = !this.isAddUserBarOpen;
        },
        async logout() {
            await this.$auth.logout();
            await this.$router.push('login');
        }
    },
    created() {
        this.getRooms();
    }
}
</script>

