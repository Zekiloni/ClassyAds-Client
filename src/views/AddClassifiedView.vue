<template>
    <div class="add-classified">
        <h2> Add new classified </h2>
        
        <select name="classified-category" v-model="newClassified.categoryId" placeholder="Select a category">
            <option :value="null"> None </option>
            <option v-for="category in categories" :value="category.id">
                {{ category.name }}
            </option>
        </select>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";

import { IUser } from "@/interfaces/IUser";
import { ICategory } from "@/interfaces/ICategory";


@Options({
    computed: {
        ...mapGetters('mainStore', ['categories'])
    }
})
export default class AddClassifiedView extends Vue {
    isAuthenticated!: boolean;
    currentUser!: IUser;

    categories!: ICategory[];

    newClassified = {
        categoryId: null
    }

    mounted(): void {
    }
}
</script>