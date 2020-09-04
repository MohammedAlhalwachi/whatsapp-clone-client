<template>
    <div class="flex flex-col-reverse">
        <Message v-for="(message, messageIndex) in messages"
                 v-bind="message"
        />
    </div>
</template>
<script>
import Message from "@/components/Message";

export default {
    name: 'Messages',
    components: {Message},
    props: {
        messages: {},
    },
    computed: {
        // color(){
        //     return this.self ? '#054740' : '#262D31';
        // },
        // colorStyle() {
        //     return this.self ? { color: this.color } : { color: this.color };
        // },
        // backgroundColorStyle() {
        //     return this.self ? { backgroundColor: this.color } : { backgroundColor: this.color };
        // },
        // lastMessageRoundClass(){
        //     return this.self ? 'rounded-tr-none' : 'rounded-tl-none';
        // }
    }
}
</script>
