<template>
    <div class="advertisements">

        <h2> Ads </h2>

        <div class="featured">
            <h4> Featured ads </h4>
            <!-- featured ads v-for -->
        </div>

        <div class="listings">
            <div class="sort-options">
                <label for="sort-options"> Sort by </label>
                <select v-model="searchQuery.sortBy" @change="searchAdvertisement">
                    <option value="">-- Select Sort Option --</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="date_asc">Date: Oldest First</option>
                    <option value="date_desc">Date: Newest First</option>
                </select>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';

import StringUtils from '@/utils/stringUtils';

import { IAdvertisement, IAdvertisementSearchInput } from "@/interfaces/IAdvertisement";


export default class AdvertisementsView extends mixins(StringUtils) {
    searchQuery: IAdvertisementSearchInput = {
        filter: null,
        categoryId: null,
        pageNumber: 1,
        pageSize: 10,
        sortBy: 'date_desc'
    };

    advertisements: IAdvertisement[] = [];

    get currentAdvertisements() {
        const start = (this.searchQuery.pageNumber - 1) * this.searchQuery.pageSize;
        return this.advertisements.slice(start, start + this.searchQuery.pageSize);
    }

    searchAdvertisement() {
        
    }
};
</script>