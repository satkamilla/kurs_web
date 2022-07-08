<template>
    <div>
        <form 
            accept-charset="UTF-8"
            v-on:submit.prevent="onSubmit()"
            method="POST"
        >
            <div class="form-line">
                <label> Название
                    <input type="text" v-model="name"  placeholder="example@ex.com">
                </label>
                <label> Описание
                    <input type="text" v-model="description" placeholder="Введите значение">
                </label>
                <label> Дедлайн
                    <input type="datetime-local" v-model="deadline"  placeholder="Введите значение">
                </label>
                <label> Сотрудник
                    <input type="text" v-model="employee" placeholder="Введите значение">
                </label>
                <label> Статус задачи
                    <input type="text" v-model="progress" placeholder="Введите значение">
                </label>
            </div>
            <v-btn class="submit-btn" type="submit">Отправить</v-btn>
        </form>
    </div>
</template>

<script>
export default {
//   async fetch({store}) {
//     await store.dispatch('orderForm/fetch')
//   },
//   computed: {
//     orderForm() {
//       return this.$store.getters['orderForm/orderForm']
//     }
//   },
  data() {
      return {
        name: '',
        description: '',
        deadline: (new Date()),
        employee: '',
        progress: ''
    }
  },
  methods: {
      async onSubmit() {
        const data = {
            name: this.name,
            description: this.description,
            deadline: this.deadline,
            employee: this.employee,
            progress: this.progress
        }  
        if (
            data.name === '' ||
            data.description === '' ||
            data.employee === '' ||
            data.progress === ''
        ) {
            alert('Заполните все поля формы')
        } else {
            await this.$store.dispatch('taskForm/postForm', data);
            alert(JSON.stringify(this.$store.getters['taskForm/answer']));
        }
      }
  }
}
</script>


<style scoped>
    .submit-btn {
        background: #fefefe;
        padding: 10px;
        color: #000;
        border-radius: 10px;
    }

    select {
        background: #fff;
        padding: 5px;
        width: 100%;
        border-radius: 10px;
    }

    .form-line {
        margin-bottom: 15px
    }


    input {
        background: #dedede;
        color: #000;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 15px;
    }

    form {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }
</style>
