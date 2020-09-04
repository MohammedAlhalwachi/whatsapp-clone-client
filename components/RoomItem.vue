<template>
    <div @click="setCurrentRoom({ id })" class="flex items-center hover:bg-gray-light cursor-pointer">
        <div class="px-2">
            <PlaceholderAvatar class="w-12 h-12"></PlaceholderAvatar>
        </div>

        <div class="flex-grow border-b border-gray-light text-gray-lighter min-w-0 p-2 py-4">
            <div class="flex justify-between items-center mb-1">
                <span class="truncate pr-2">{{ name }}</span>
<!--                <span class="text-xs whitespace-no-wrap">2:30 PM</span>-->
            </div>

<!--            <div class="flex justify-between items-center min-w-0">-->
<!--                <p class="text-sm truncate pr-2">-->
<!--                    لارؤاىتيب ثصثلسيب ين شسيرسرءئ-->
<!--                </p>-->
<!--                <span-->
<!--                    class="flex-shrink-0 flex justify-center items-center font-semibold text-sm bg-green-light rounded-full text-black leading-none p-1"-->
<!--                    style="min-height: 20px; min-width: 20px;">555</span>-->
<!--            </div>-->
        </div>
    </div>
</template>
<script>
import PlaceholderAvatar from "@/components/PlaceholderAvatar"
import {mapActions} from "vuex";

export default {
    name: 'RoomItem',
    props: ['id', 'name'],
    components: {PlaceholderAvatar},
    methods: {
        ...mapActions('rooms', {
            setCurrentRoom: 'setCurrent',
        }),
    }
}
</script>
