const mongoose = require('mongoose')

const DishSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        require: true,
      },
      cloudinaryId: {
        type: String,
        require: true,
      },
      dishType: {
        type: String,
        required: true,
      },
      mealType: {
        type: String,
        required: true,
      },
      nutritionalData: {
        type: mongoose.Schema.Types.Number,
        ref: "Ingredients",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model('Dish', DishSchema)