import { defineStore } from "pinia";
import { fetchData } from "../services/fetchData";
import { ref } from "vue";

export const useAuthorsStore = defineStore('authorsStore', () => {
    const authorsUrl = 'https://jsonplaceholder.typicode.com/users';
    const authors = ref([]);
    const selectedAuthor = ref(null);

    fetchData(authorsUrl, (authorsData) => authors.value = authorsData);

    const setSelectedAuthor = (author) => selectedAuthor.value = author;
    const resetSelectedAuthor = () => selectedAuthor.value = null;

    return {
        authors,
        selectedAuthor,
        setSelectedAuthor,
        resetSelectedAuthor
    };
});