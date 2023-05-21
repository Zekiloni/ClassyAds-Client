<template>
    <div class="add-advertisement">
        <h2> Add new advertisement </h2>
        
        <select name="advertisement-category" v-model="newAdvertisement.categoryId" placeholder="Select a category">
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
export default class AddAdvertisementView extends Vue {
    isAuthenticated!: boolean;
    currentUser!: IUser;

    categories!: ICategory[];

    newAdvertisement = {
        categoryId: null
    }

    mounted(): void {
    }
}
</script>