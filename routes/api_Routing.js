const router = require("express").Router();
const Workout = require("../models/workout.js");


router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
    res.json(dbWorkout);
    })
    .catch(err => {
    res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log('req.body', req.body);
  console.log('req.params.id', req.params.id);
  Workout.findByIdAndUpdate(
    req.params.id,
    {$push:{exercises:req.body}},{new: true, runValidators: true})
    .then(data => {
      console.log('data', data);
      res.json(data);
    })
    .catch(error => {
      console.log('error', error)
      res.send(error);
    })
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

module.exports = router;