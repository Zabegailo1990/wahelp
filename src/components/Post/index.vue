<script setup>
import { ref } from 'vue';
import Textarea from '../Textarea/index.vue';

const props = defineProps({
    author: String,
    title: String,
    body: String,
    comments: Array,
});

const newComment = ref('');

const emit = defineEmits(['getNewComment']);
const emitGetNewComment = () => emit('getNewComment', newComment.value);

const handleClick = () => {
    emitGetNewComment();
    newComment.value = '';
};

</script>

<template>
    <div class="post">
        <div class="post__header">
            <h3 class="post__author">{{ author }}</h3>
            <h2 class="post__title">{{ title }}</h2>
            <p class="post__article">{{ body }}</p>
        </div>
        <div class="post__body">
            <div class="post__comments" v-if="comments">
                <div
                    class="post__comment"
                    v-for="comment in comments"
                    :key="comment.id"
                >
                    {{ comment.body }}
                </div>
            </div>
        </div>
        <div class="post__footer">
            <Textarea
                class="post__textarea"
                :modelValue="newComment"
                placeholder="Введите коментарий"
                @update:modelValue="newValue => newComment = newValue"
            />
            <button class="post__button" @click="handleClick">Отправить</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './styles/post.scss';
</style>