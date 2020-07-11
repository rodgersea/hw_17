const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
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
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
      type: Number
    }
  }]
},
{
  toJSON: {
    virtuals: true
  }
});

workoutSchema.virtual('totalDuration').get(() => {
  let totalDuration = 0;
  for (i=0; i<this.exercises.length; i++) {
    totalDuration += this.exercises[i].duration;
  }
  return totalDuration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
