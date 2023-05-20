<template>
    <div class="classified-list-item">
        <h4> {{ truncate(classified.title, 24) }} </h4>
    </div>
</template>

<script lang="ts">
import { Options, mixins } from "vue-class-component";

import { IClassified } from "@/interfaces/IClassified";
import StringUtils from "@/utils/stringUtils";


@Options({
    props: {
        classified: {
            type: Object,
            required: true
        }
    }
})
export default class ClassifiedItemComponent extends mixins(StringUtils) {
    classified!: IClassified;
    
    mounted(): void {
    }
};
</script>