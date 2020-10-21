<template>
  <div>
    <form id="bookings-form" v-on:submit="addBooking" method="post">
      <div>
      <h2>Add a booking:</h2>
      </div>
      <div>
        <div class="field">
          <label for="fname">First name:</label>
          <input type="text" id="fname" v-model="fname" required>
        </div>
        <div class="field">
          <label for="lname">Last Name:</label>
          <input type="text" id="lname" v-model="lname" required>
        </div>
        <div class="field">
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" v-model="email" required>
        </div>
      </div>
      <div>
        <input id="form_button" type="submit" value="Add booking">
      </div>
    </form>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
  name: 'bookings-form',
  data() {
    return {
      fname: '',
      lname: '',
      email: ''
    }
  },
  methods: {
    addBooking(e) {
      e.preventDefault()
      const booking = {
        name: {
          first:this.fname,
          last:this.lname
        },
        email: this.email,
        checked_in: false
      }
      BookingsService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res))
      this.fname = ''
      this.lname = ''
      this.email = ''
    }
  }
}
</script>

<style>
form {
  width: 50%;
  margin: 0 auto;
  background-color: rgb(0, 183, 255);
  color: white;
  padding: 25px;
  margin-bottom: 40px;
}

input[type=text] {
  margin-bottom: 15px;
  height: 20px
}

input[type=email] {
  margin-bottom: 15px;
  height: 20px
}

label {
  margin-bottom: 8px;
}

.field {
  display: flex;
  flex-direction: column;
}

input[type=submit] {
  padding: 15px 30px;
  border-radius: 10px;
  background-color: mediumblue;
  color: white;
  box-shadow: 4px 5px gray;
}

input[type=submit]:hover {
  background-color: white;
  color: mediumblue;
  transition: 0.3s;
}



</style>