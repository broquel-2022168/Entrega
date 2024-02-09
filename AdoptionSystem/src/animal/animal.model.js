import mongoose from "mongoose"

const animalSchema=mongoose.Schema({
    animal:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    keeper:{
        type: String,
        required: true
    }
})

export default mongoose.model('animal', animalSchema)