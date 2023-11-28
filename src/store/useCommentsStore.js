import { defineStore } from "pinia";
import { fetchData } from "../services/fetchData";
import { ref } from "vue";

export const useCommentsStore = defineStore('commentsStore', () => {
    const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
    const comments = ref([]);

    fetchData(commentsUrl, (commentsData) => comments.value = commentsData);

    const addComment = (postId, comment) => {
        if (!comment) return;
        comments.value.push({
            postId: postId,
            id: Date.now(),
            body: comment,
        });
    };

    return {
        comments,
        addComment
    };
});