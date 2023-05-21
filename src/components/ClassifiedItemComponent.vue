<template>
    <div class="advertisement-list-item">
        <h4> {{ truncate(advertisement.title, 24) }} </h4>
    </div>
</template>

<script lang="ts">
import { Options, mixins } from "vue-class-component";

import { IAdvertisement } from "@/interfaces/IAdvertisement";
import StringUtils from "@/utils/stringUtils";


@Options({
    props: {
        advertisement: {
            type: Object,
            required: true
        }
    }
})
export default class AdvertisementItemComponent extends mixins(StringUtils) {
    advertisement!: IAdvertisement;
    
    mounted(): void {
    }
};
</script>