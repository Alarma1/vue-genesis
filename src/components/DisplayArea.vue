<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>Наименование элемента</th>
                <th>ID сделки</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(list, index) in dataList" :key="index">
                <td>{{ list.name }}</td>
                <td>{{ list.id }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "DisplayArea",
        props: ['dataList'],
        setup() {
            return {}
        }
    }
</script>

<style scoped>
    table {
        border-collapse: collapse;
        width: auto;
    }

    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
        width: auto;
    }

    th {
        background-color: #f2f2f2;
    }

    tr {
        height: auto;
    }
</style>
