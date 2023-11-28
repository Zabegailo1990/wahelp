<script setup>
import Tabs from '../../components/Tabs/index.vue';
import Posts from '../../containers/Posts/index.vue';
import Users from '../../containers/Users/index.vue';
import { computed, ref } from 'vue';
const dataTabs = ['Posts', 'Users'];
const activeTab = ref('Posts');

const activeComponent = computed(() => {
    switch (activeTab.value) {
        case 'Posts':
            return Posts;
        case 'Users':
            return Users;
        default:
            return Posts;
    };
});

const setActiveTab = (tab) => activeTab.value = tab;
const redirectToPosts = () => activeTab.value = 'Posts';

</script>

<template>
    <div class="home">
        <Tabs
            :tabs="dataTabs"
            :currentTab="activeTab"
            @getCurrentTab="setActiveTab"
        >
            <KeepAlive>
                <component
                    class="home__component"
                    :is="activeComponent"
                    @redirectToPosts="redirectToPosts"
                />
            </KeepAlive>
        </Tabs>
    </div>
</template>

<style lang="scss" scoped>
@import './styles/home.scss';
</style>