<template>
  <div class="booking">
    <h3>Guest Name: {{ booking.name.first + " " + booking.name.last }}</h3>
    <p><b>Email:</b> {{booking.email}}</p>
    <p v-if="booking.checked_in"><b>Guest Checked In </b></p>
    <button v-if="!booking.checked_in" v-on:click="checkIn">Check Guest In</button>
    <button v-on:click="deleteBooking">Delete booking</button>


  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import BookingsService from '@/services/BookingsService'

export default {
  name: 'booking',
  props: ['booking'],
  methods: {
    checkIn(){
      let booking = {
        name:{
          first:this.booking.name.first,
          last:this.booking.name.last
        },
        email:this.booking.email,
        checked_in:true
      }
      BookingsService.updateBooking(booking, this.booking._id)
      .then(() => eventBus.$emit('booking-updated', this.booking._id))
    },
    deleteBooking() {
      BookingsService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('delete-booking', this.booking._id))
    }
  }
}
</script>

<style>
.booking {
  border: 5px solid mediumblue;
  background-color:rgba(0, 183, 255, 0.4);
  width: 40%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 25px;
  border-radius: 15px;
}

button {
  padding: 15px 30px;
  border-radius: 10px;
  background-color: mediumblue;
  color: white;
  box-shadow: 4px 5px gray;
  margin-left: 20px;
}

button:hover {
  background-color: white;
  color: mediumblue;
  transition: 0.25s;
}
</style>