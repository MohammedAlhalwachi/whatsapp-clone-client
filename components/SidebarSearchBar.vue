<template>
    <label class="block relative text-gray-lighter">
        <span class="sr-only">Search bar</span>
        <input type="text" class="bg-gray-light text-sm rounded-full focus:outline-none w-full px-4 pl-16 py-2" placeholder="Search or start new chat"/>
        
        <span class="absolute left-0 inset-y-0 flex items-center px-4">
            <icon>search</icon>
        </span>
    </label>
</template>

<script>
export default {
    name: 'SidebarSearchBar',
}
</script>
