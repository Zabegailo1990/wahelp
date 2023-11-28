import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchData } from "../services/fetchData";

export const usePostsStore = defineStore('postsStore', () => {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    const posts = ref([]);

    fetchData(postsUrl, (postsData) => posts.value = postsData);

    return { posts };
});