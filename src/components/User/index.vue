<script setup>

const props = defineProps({
    name: String,
    id: Number,
})

</script>

<template>
    <div class="user">
        <h2 class="user__title">{{ name }}</h2>
    </div>
</template>

<style scoped lang="scss">
@import './styles/user.scss';
</style>