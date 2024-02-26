<template>
    <div class="main_box">
        <div>
            <DisplayArea :dataList="counterStore.responseData"/>
        </div>
        <div class="filling_form">
            <DropDown :dropDownMenu="dropDownMenu" @choiceMenu="choiceMenu($event)"
                      :dropDownMenuValue="dropDownMenuValue"/>
            <ButtonComp :download="download" :valueMenu="valueMenu" @clicked="responseData()"/>
        </div>
    </div>
</template>

<script lang="ts">
    import DropDown from "@/components/DropDown.vue";
    import ButtonComp from "@/components/ButtonComp.vue";
    import DisplayArea from "@/components/DisplayArea.vue";
    import {useCounterStore} from '@/stores/counter';
    import {computed, ref, onMounted} from "vue"

    export default {
        name: "MainPage",
        components: {DisplayArea, ButtonComp, DropDown},
        setup() {
            const counterStore = useCounterStore()
            const valueMenu = computed(() => counterStore.dropDownMenuValue)
            const download = computed(() => counterStore.downloadData)
            const dropDownMenu = ['Не выбрано', 'Сделка', 'Контакт', 'Компания']
            const dropDownMenuValue = ref('')
            const choiceMenu = (elem) => {
                counterStore.dropDownMenuValueMutations(elem)
                dropDownMenuValue.value = ''
                if (dropDownMenuValue.value === '') {
                    dropDownMenuValue.value = elem
                }
            }
            const responseData = () => {
                if (dropDownMenuValue.value === 'Сделка') {
                    counterStore.requestDeal()
                }
                if (dropDownMenuValue.value === 'Контакт') {
                    counterStore.requestContact()
                }
                if (dropDownMenuValue.value === 'Компания') {
                    counterStore.requestCompany()
                }
            }
            onMounted(() => {
                counterStore.receivingToken()
            })
            return {
                counterStore,
                valueMenu,
                download,
                dropDownMenu,
                dropDownMenuValue,
                choiceMenu,
                responseData
            }
        },
    }
</script>

<style scoped>
    .main_box {
        display: flex;
        padding-left: 10px;
        padding-top: 10px;
    }

    .filling_form {
        display: flex;
        margin-left: 14px;
    }
</style>
