const { Db } = require("mongodb")

use guests
db.dropDatabase()

db.bookings.insertMany([
  {
    name:{
      first:"Marge",
      last:"Simpson"
    },
    email:"MSimps@Fox.com",
    checked_in:false
  },
  {
    name:{
      first:"Peter",
      last:"Griffin"
    },
    email:"FatGuy@PawtucketBrewery.net",
    checked_in:true
  },
  {
    name:{
      first:"Stanford",
      last:"Smith"
    },
    email:"SS@CIA.org",
    checked_in:false
  }
])


