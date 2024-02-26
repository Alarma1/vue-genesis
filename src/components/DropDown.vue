<template>
    <div style="">
        <div class="head_menu"
             @click="toggleMenu">
            <div>
                <p v-if="dropDownMenuValue === ''">Не выбрано</p>
                <p v-if="dropDownMenuValue !== ''">{{ dropDownMenuValue }}</p>
            </div>
            <div class="svg_box">
                <svg :class="{'svg_rotate':dropDownMenuView}" width="22" height="22" viewBox="0 0 22 22" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4167 8.25L11 14.6667L4.58337 8.25" stroke="black" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="box_drop_menu" v-if="dropDownMenuView">
            <div class="drop_menu"
                 v-for="(elem,index) in dropDownMenu" :key="index">
                <p @click="choiceMenu(elem)">{{elem}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from "vue"
    import {useCounterStore} from '@/stores/counter';

    export default {
        name: "DropDown",
        props: ['dropDownMenu', 'dropDownMenuValue'],
        setup(props, {emit}) {
            const counterStore = useCounterStore()
            const dropDownMenuView = ref(false)
            const toggleMenu = () => {
                dropDownMenuView.value = !dropDownMenuView.value
            }
            const choiceMenu = (elem) => {
                emit('choiceMenu', elem)
                dropDownMenuView.value = false
            }
            return {
                counterStore,
                dropDownMenuView,
                toggleMenu,
                choiceMenu
            }
        }
    }
</script>

<style scoped>
    .head_menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding-left: 10px;
        width: 240px;
        border: 1px solid rgb(196 196 196);

        -moz-border-radius-topleft: 10px 10px;
    }

    .svg_box {
        display: flex;
        align-content: center;
    }

    .svg_rotate {
        rotate: 180deg;
    }

    .box_drop_menu {
        cursor: pointer;
        border-left: 1px solid rgb(196 196 196);
        border-right: 1px solid rgb(196 196 196);
        border-bottom: 1px solid rgb(196 196 196);
        -moz-border-radius-topleft: 10px 10px;
    }

    .drop_menu {
        padding: 2px 12px;

    }
</style>
