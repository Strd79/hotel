One<template>
  <div id="app">
    <bookings-form ></bookings-form>
    <bookings-grid :bookings="bookings"></bookings-grid>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsForm from '@/components/BookingsForm.vue'
import BookingsGrid from '@/components/BookingsGrid.vue'
import BookingsService from '@/services/BookingsService.js'

export default {
  name: 'App',
  data() {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  mounted(){
    BookingsService.getBookings()
    .then(bookings => this.bookings = bookings)

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })

    eventBus.$on('booking-updated', (id) => {
      let index = this.bookings.findIndex((booking) => booking._id === id)
      console.log(index);
      this.bookings[index].checked_in = true
    })

    eventBus.$on('delete-booking', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Lato', sans-serif;
}
</style>
