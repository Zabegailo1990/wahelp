<script setup>
import { ref } from 'vue';

defineProps({
    modelValue: String,
    placeholder: String
});

defineEmits(['update:modelValue']);

const isActive = ref(false);

</script>

<template>
    <textarea
        class="textarea"
        :class="{ 'textarea--active': isActive }"
        type="text"
        :placeholder="placeholder"
        :value="modelValue"
        @focus="isActive = true"
        @blur="isActive = false"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<style lang="scss" scoped>
@import './styles/textarea.scss';
</style>