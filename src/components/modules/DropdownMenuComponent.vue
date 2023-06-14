<template>
    <div class="dropdown">
        <div class="dropdown-toggle" @click="toggleDropdown">
            <slot name="toggle"></slot>
            <i class="arrow-icon" :class="isOpen ? 'up' : 'down'"></i>
        </div>
        <ul class="dropdown-menu" :class="{ 'open': isOpen }">
            <slot></slot>
        </ul>
    </div>
</template>
  
<script lang="ts">
import { Vue } from 'vue-class-component';


export default class DropdownMenu extends Vue {
    isOpen: boolean = false;

    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }
}
</script>
  
<style scoped lang="scss">
.dropdown {
    position: relative;
    display: inline-block;

    .dropdown-toggle {
        padding: 8px 12px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        cursor: pointer;

        .arrow-icon {
            margin-left: 4px;
            transition: transform 0.3s;
        }

        &.up {
            .arrow-icon {
                transform: rotate(180deg);
            }
        }
    }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        list-style: none;
        padding: 8px;
        background-color: #fff;
        border: 1px solid #ccc;
        display: none;

        &.open {
            display: block;
        }

        li {
            padding: 4px;
            cursor: pointer;

            &:hover {
                background-color: #f0f0f0;
            }
        }
    }
}
</style>