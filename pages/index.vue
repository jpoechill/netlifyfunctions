<template>
  <section>
    12312
    <button @click="handleClick()">Click Here</button>
  </section>
</template>

<script>
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
      return fetch('/.netlify/lambdas/todos-create', {
        body: JSON.stringify(data),
        method: 'POST'
      }).then(response => {
        return response.json()
      })
    }
  }
}
</script>

<style>
</style>
