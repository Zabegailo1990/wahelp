<script setup>
import User from '../../components/User/index.vue';
import { computed } from 'vue';
import { useAuthorsStore } from '../../store/useAuthorsStore';

const authorsStore = useAuthorsStore();
const users = computed(() => authorsStore.authors);

const emit = defineEmits(['redirectToPosts']);

const handleClick = (author) => {
    authorsStore.setSelectedAuthor(author);
    emit('redirectToPosts');
};

</script>

<template>
    <div class="users">
        <div class="users__container">
            <div class="users__inner">
                <div
                    class="users__row"
                    v-for="user in users"
                    :key="user.id"
                >
                    <div class="users__cell">
                        <User class="users__user" :name="user.name" />
                    </div>
                    <div class="users__cell">
                        <button class="users__button" @click="handleClick(user.name)">
                            Посмотреть посты пользователя
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './styles/users.scss';
</style>