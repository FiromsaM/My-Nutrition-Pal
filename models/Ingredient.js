const mongoose = require('mongoose')

const IngredientSchema = new mongoose.Schema({
      ingredientsName: {
        type: String,
        required: true,
      },
      nutritionalData: {
        type: Number,
        required: true,
      },
      foodType: {
        type: String,
        required: true,
      },
      dietType: {
        type: String,
        required: true,
      },
      portionSize: {
        type: Number,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model('Ingredient', IngredientSchema)