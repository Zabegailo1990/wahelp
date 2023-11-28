<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    tabs: {
        type: Array,
        default: ['tab_1', 'tab_2'],
    },
    currentTab: String,
});

const activeTab = ref(props.currentTab);

const emit = defineEmits(['getCurrentTab']);
const emitGetCurrentTab = () => emit('getCurrentTab', activeTab.value);

const setActiveTab = (tab) => activeTab.value = tab;

const handleClick = (tab) => {
    setActiveTab(tab);
    emitGetCurrentTab();
};

watch(() => props.currentTab, () => activeTab.value = props.currentTab);


</script>

<template>
    <div class="tabs">
        <div class="tabs__row">
            <button
                class="tabs__tab"
                :class="{ 'tabs__tab--active': tab === activeTab }"
                v-for="(tab, index) in tabs"
                :key="index"
                @click="handleClick(tab)"
            >
                {{ tab }}
            </button>
        </div>
        <div class="tabs__content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './styles/tabs.scss';
</style>