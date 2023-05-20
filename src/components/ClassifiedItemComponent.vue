<template>
    <div class="classified-list-item">
        <h4> {{ classified.title }} </h4>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { IClassified } from "@/interfaces/IClassified";


@Options({
    props: {
        classified: {
            type: Object,
            required: true
        }
    }
})
export default class ClassifiedItemComponent extends Vue {
    classified!: IClassified;
    mounted(): void {
    }
};
</script>