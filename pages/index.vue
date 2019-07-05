<template>
  <section class="container">
    <button @click="handleClick()">
      Create ToDo
    </button>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    handleClick () {
      const myTodo = {
        title: 'My todo title',
        completed: false,
      }

      this.createTodo(myTodo).then((response) => {
        console.log('API response', response)
        // set app state
      }).catch((error) => {
        console.log('API error', error)
      })
    },
    createTodo(data) {
      return this.$axios.post('https://wizardly-aryabhata-81d63a.netlify.com/.netlify/functions/custom-test', data)
      .then(response => {
        console.log('Successfully FETCHED')
        return response
      })
    }
  }
}

</script>

<style>
</style>
