<template>
    <div class="add-advertisement">
        <h2>Add new advertisement</h2>

        <div class="input-holder">
            <label for="ad-title"> {{ $t('new_advertisement.title_label') }} </label>
            <input type="text" v-model="newAdvertisement.title" name="ad-title" />
        </div>

        <div class="input-holder">
            <label for="ad-category"> {{ $t('new_advertisement.category_label') }} </label>
            <select name="advertisement-category" v-model="newAdvertisement.categoryId" placeholder="Select a category">
                <option :value="null">None</option>
                <option v-for="category in categories" :value="category.id" :key="category.id">
                    {{ category.name }}
                </option>
            </select>
        </div>

        <div class="input-holder">
            <label for="ad-description"> {{ $t('new_advertisement.description_label') }} </label>
            <textarea id="description" name="description" placeholder="Enter a description"
                v-model="newAdvertisement.description" rows="4" cols="40"></textarea>

        </div>

        <div class="input-holder">
            <label for="ad-media"> ad media </label>
            <input type="file" multiple accept="image/*" @change="handleFileChange" name="ad-media" />

            <div v-if="newAdvertisement.mediaFiles" class="ad-media-preview">
                <h3>Selected Files:</h3>
                <ul>
                    <li v-for="(file, fileIndex) in newAdvertisement.mediaFiles" :key="file.name">
                        <span> fileName {{ file.name }}</span>
                        <span> modifiedAt {{ file.lastModified }} </span>
                        <span> {{ formatFileSize(file.size) }}</span>
                        <img :src="createObjectURL(file)" alt="Preview" />
                    </li>
                </ul>
            </div>
        </div>

        <button class="ad-submit"> {{ $t("new_advertisement.create_ad_submit") }}</button>
    </div>
</template>
  
<script lang="ts">
import { Options, Vue, mixins } from "vue-class-component";
import { mapGetters } from "vuex";

import { IUser } from "@/interfaces/IUser";
import { ICategory } from "@/interfaces/ICategory";
import { ICreateAdvertisementInput } from "@/interfaces/IAdvertisement";

import UnitUtils from "@/utils/unitUtils";


@Options({
    computed: {
        ...mapGetters("mainStore", ["categories"]),
    }
})
export default class AddAdvertisementView extends mixins(UnitUtils) {
    isAuthenticated!: boolean;
    currentUser!: IUser;

    categories!: ICategory[];

    newAdvertisement: ICreateAdvertisementInput = {
        title: null,
        categoryId: null,
        shortDescription: null,
        description: null,
        mediaFiles: null,
    };


    mounted(): void {

    }

    createObjectURL(file: File) {
        return window.URL.createObjectURL(file);
    }

    handleFileChange(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files) {
            this.newAdvertisement.mediaFiles = Array.from(input.files);
        }
    }
}
</script>

<style lang="scss" scoped>
.add-advertisement {
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: rgba(17, 12, 46, 0.1) 0px 48px 70px 0px;
    background-color: #fff;

    .input-holder {
        padding: 16px;

        label {
            font-size: 11pt;
        }

        input,
        select,
        textarea {
            display: block;
            margin-top: 6px;
        }

        .ad-media-preview {
            ul {
                list-style: none;
                padding: 0;
                display: grid;
                grid-gap: 8px;
                grid-template-columns: 1fr 1fr 1fr;
                flex-wrap: wrap;

                li {
                    span {
                        display: block;
                    }
                    
                    img {
                        width: 275px;
                        height: 275px;

                        border-radius: 8px;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    button.ad-submit {
        margin: 16px;
    }
}
</style>