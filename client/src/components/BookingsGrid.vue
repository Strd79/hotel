<template>
  <div class="bookings-wrapper">
      <booking v-for="(booking, index) in bookings" :key="index" :booking="booking"></booking>
  </div>
</template>

<script>
import Booking from '@/components/Booking.vue'

export default {
  name: 'bookings-grid',
  props: ['bookings'],
  components:{
    'booking': Booking
  }
}
</script>

<style>
.bookings-wrapper {
  text-align: center;
}
</style>