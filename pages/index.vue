<template>
  <section>
    12312
    <button @click="handleClick()">Click Here</button>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    handleClick () {
      const myTodo = {
        title: 'My todo title',
        completed: false,
      }

      // create it!
      this.createTodo(myTodo).then((response) => {
        console.log('API response', response)
        // set app state
      }).catch((error) => {
        console.log('API error', error)
      })
    },

    createTodo (data) {
      console.log('Bugger')
      console.log(data)

      return this.$axios.post('/.netlify/functions/todos-create', data)
      .then(response => {
        return response.json()
      })
    }
  }
}
</script>

<style>
</style>
