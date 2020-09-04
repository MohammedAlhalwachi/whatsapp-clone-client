<template>
    <div class="flex px-16" 
         :class="[self ? 'flex-row-reverse' : '']"
         style="margin-bottom: 2px;">
        
        flkflkf
<!--        <div :class="[messageIndex === messages.length - 1 ? '' : 'invisible', self ? 'transform -scale-x-100' : '']"-->
<!--             :style="colorStyle">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">-->
<!--                <path opacity=".13" fill="#0000000"-->
<!--                      d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>-->
<!--                <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>-->
<!--            </svg>-->
<!--        </div>-->

<!--        <div class="text-white rounded p-2 min-w-16 max-w-64"-->
<!--             :class="[messageIndex === messages.length - 1 ? lastMessageRoundClass : '']"-->
<!--             :style="backgroundColorStyle"-->
<!--        >-->
<!--            <p>{{ message }} &#45;&#45; {{ messageIndex }}</p>-->
<!--            <div class="text-right">-->
<!--                <span class="text-xs whitespace-no-wrap">2:30 PM</span>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>
<script>
export default {
    name: 'Message',
    props: ['body'],
    computed: {
        self(){
            return true;
        }
    }
}
</script>
