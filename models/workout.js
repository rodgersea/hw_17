const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: {
        type: String,
        trim: true,
        required: "Enter a workout type"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for workout"
    },
    duration: {
        type: Number,
        required: "Enter a duration for workout"
    },
    weight: {
        type: Number,
        required: "Enter a weight for workout"
    },
    reps: {
        type: Number,
        required: "Enter reps for workout"
    },
    sets: {
        type: Number,
        required: "Enter sets for workout"
    }
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
