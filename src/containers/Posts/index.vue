<script setup>
import Post from '../../components/Post/index.vue';
import { computed } from 'vue';
import { usePostsStore } from '../../store/usePostsStore';
import { useAuthorsStore } from '../../store/useAuthorsStore';
import { useCommentsStore } from '../../store/useCommentsStore';

// Получение данных из сторов для слияния
const postsStore = usePostsStore();
const authorsStore = useAuthorsStore();
const commentsStore = useCommentsStore();


// Слияние данных и фильтрация по автору поста
const posts = computed(() => {
    if (!postsStore.posts) return [];
    return postsStore.posts
        .map(post => {
            const comments = commentsStore.comments.filter(comment => comment.postId === post.id);
            const author = authorsStore.authors.find(author => author.id === post.userId);
            return {
                ...post,
                author: author?.name,
                comments,
            };
        })
        .filter(post => authorsStore.selectedAuthor ? authorsStore.selectedAuthor === post.author : post);
});

</script>

<template>
    <div class="posts">
        <div class="posts__container">
            <div class="posts__header">
                <div class="posts__row" v-if="authorsStore.selectedAuthor">
                    <div class="posts__label">Посты автора:</div>
                    <div class="posts__author">{{ authorsStore.selectedAuthor }}</div>
                    <button class="posts__button" @click="authorsStore.resetSelectedAuthor">+</button>
                </div>
            </div>
            <div class="posts__inner">
                <Post
                    class="posts__post"
                    v-for="post in posts"
                    :key="post.id"
                    :author="post.author"
                    :title="post.title"
                    :body="post.body"
                    :comments="post.comments"
                    @getNewComment="(comment) => commentsStore.addComment(post.id, comment)"
                >
                </Post>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './styles/posts.scss';
</style>