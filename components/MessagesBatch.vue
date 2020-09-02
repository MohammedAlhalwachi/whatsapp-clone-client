<template>
    <div class="flex flex-col-reverse" :class="[self ? 'items-end' : '']">
        <div v-for="(message, messageIndex) in messages" class="flex px-16" :class="[self ? 'flex-row-reverse' : '']" style="margin-bottom: 2px;">
            <div :class="[messageIndex === messages.length - 1 ? '' : 'invisible', self ? 'transform -scale-x-100' : '']" :style="colorStyle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                    <path opacity=".13" fill="#0000000"
                          d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
                    <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
                </svg>
            </div>

            <div class="text-white rounded p-2 min-w-16 max-w-64"
                 :class="[messageIndex === messages.length - 1 ? lastMessageRoundClass : '']"
                 :style="backgroundColorStyle"
            >
                <p>{{ message }} -- {{ messageIndex }}</p>
                <div class="text-right">
                    <span class="text-xs whitespace-no-wrap">2:30 PM</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MessagesBatch',
    props: {
        messages: {},
        self: {
            default: true,
        },
    },
    computed: {
        color(){
            return this.self ? '#054740' : '#262D31';
        },
        colorStyle() {
            return this.self ? { color: this.color } : { color: this.color };
        },
        backgroundColorStyle() {
            return this.self ? { backgroundColor: this.color } : { backgroundColor: this.color };
        },
        lastMessageRoundClass(){
            return this.self ? 'rounded-tr-none' : 'rounded-tl-none';
        }
    }
}
</script>
