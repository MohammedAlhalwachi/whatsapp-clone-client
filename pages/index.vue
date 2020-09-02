<template>
<!--    <div class="container mx-auto flex h-full">-->
    <div class="flex h-full">
        <Sidebar class="w-1/3 max-w-md h-full"></Sidebar>
        <Room class="flex-grow"></Room>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Room from "@/components/Room";

export default {
    components: {Room, Sidebar}
}
</script>

<style>

</style>
