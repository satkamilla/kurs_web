<template>
    <div>
        <template  v-for="(task, index) of (tasks)" >
        <template> 
        <v-subheader
           :key="task.id"
          v-text="task.name"
        ></v-subheader>

        <v-divider
           :key="index"
        ></v-divider>

        <v-list-item
         :key="task.name"
        >
          <v-list-item-avatar>
            <v-img :src="require('@/static/task-icon.jpg')"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="'Название: ' + task.name"></v-list-item-title>
            <v-list-item-subtitle v-html="'Описание: ' + task.description"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="'Опыт: ' + task.deadline"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="'Спрятано: ' + task.employee"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="'Статус: ' + task.progress"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </template>
      </template>
    </div>
</template>

<script>
export default {
    props: ['tasks'],
    name: 'Order'
}
</script>