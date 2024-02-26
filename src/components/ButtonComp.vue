<template>
    <div class="btn_box"
         :class="{'btn_selected': valueMenu,'btn_box_spin_bg': download}">
        <button class="btn" :class="{'btn_selected': valueMenu}"
                v-if="!download"
                @click="$emit('clicked')">Создать
        </button>
        <div class="loading" v-if="download">
            <div class="spinner">
                <div class="mask">
                    <div class="maskedCircle"></div>
                </div>
            </div>
        </div>
    </div>
    <div>

    </div>
</template>

<script>
    export default {

        name: "ButtonComp",
        props: ['valueMenu', 'download'],
        emits: ['clicked'],
        setup() {
            return {}
        }
    }

</script>

<style scoped>
    .btn_box {
        height: 26px;
        display: flex;
        align-items: center;
        margin-left: 14px;
        border-radius: 2px;
        border: 1px solid rgb(219, 222, 223);
        background-color: white;
    }

    .btn_box_spin_bg {
        background-color: rgb(76, 139, 247);
    }

    .btn {
        width: 100%;
        height: 100%;
        cursor: pointer;
        border: none;
        background-color: white;
    }

    .btn_selected {
        color: white;
        border: none;
        border-radius: 2px;
        background-color: rgb(76, 139, 247);
    }

    @-webkit-keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }

    @-moz-keyframes spin {
        from {
            -moz-transform: rotate(0deg);
        }
        to {
            -moz-transform: rotate(360deg);
        }
    }

    @-ms-keyframes spin {
        from {
            -ms-transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
        }
    }

    .loading {
        padding-top: 4px;
        padding-left: 3px;
        width: 28px;
        height: 28px;
    }

    .loading .spinner {
        left: 1px;
        top: 1px;
        width: 20px;
        height: 20px;
        -webkit-animation: spin 1s infinite linear;
        -moz-animation: spin 1s infinite linear;
        -o-animation: spin 1s infinite linear;
        animation: spin 1s infinite linear;
    }

    .loading .mask {
        width: 24px;
        height: 12px;
        overflow: hidden;
    }

    .loading .maskedCircle {
        width: 20px;
        height: 20px;
        border-radius: 12px;
        border: 3px solid white;
    }
</style>
