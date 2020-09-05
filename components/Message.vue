<template>
    <div class="flex px-16" 
         :class="[self ? 'flex-row-reverse' : '']"
         style="margin-bottom: 2px;">
        
        <div :class="[self ? 'transform -scale-x-100' : '']"
             :style="{ color: this.color }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" fill="#0000000"
                      d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
                <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
        </div>

        <div class="text-white rounded p-2 min-w-16 max-w-64"
             :class="[self ? 'rounded-tr-none' : 'rounded-tl-none']"
             :style="{ backgroundColor: this.color }">

            <p class="break-words">{{ body }}</p>
            <div class="text-right">
                <span class="text-xs whitespace-no-wrap">{{ time }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'

export default {
    name: 'Message',
    props: ['body', 'userId', 'createdAt'],
    computed: {
        time(){
            return moment(this.createdAt).format('h:mm A');
        },
        color(){
            return this.self ? '#054740' : '#262D31';
        },
        self(){
            return this.userId === this.$auth.user.id;
        },
    }
}
</script>
