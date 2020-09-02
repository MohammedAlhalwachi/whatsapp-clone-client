<template>
    <div class="bg-blue-dark border-r border-gray-700">
        <div class="flex justify-between items-center bg-gray-light h-16 p-4 py-2">
            <PlaceholderAvatar class="w-10 h-10"></PlaceholderAvatar>

            <div class="flex text-gray-lighter">
                <button class="mr-4">
                    <icon class="leading-normal">chat</icon>
                </button>
                <button>
                    <icon class="leading-normal">logout</icon>
                </button>
            </div>
        </div>
        
        <div>
            <div class="border-b border-gray-light px-4 py-2">
                <label class="relative text-gray-lighter">
                    <span class="sr-only">Search bar</span>
                    <input type="text" class="bg-gray-light text-sm rounded-full focus:outline-none w-full px-4 pl-16 py-2" placeholder="Search or start new chat" />
                    <span class="absolute left-0 inset-y-0 flex items-center px-4">
                        <icon >search</icon>
                    </span>
                </label>
            </div>
            <div>
                <RoomItem v-for="i in 5" class="px-4"></RoomItem>
            </div>
        </div>
    </div>
</template>

<script>
import PlaceholderAvatar from "@/components/PlaceholderAvatar";
import RoomItem from "@/components/RoomItem";

export default {
    name: "Sidebar",
    components: {RoomItem, PlaceholderAvatar}
}
</script>

