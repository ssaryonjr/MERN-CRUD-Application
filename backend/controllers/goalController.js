//Middleware for handling Async errors https://www.npmjs.com/package/express-async-handler
const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalsModel')

//@desc Get the user goals.
//@route GET /api/goals
//@access Private 
const getGoals = async(req, res) => {
    const goals = await Goal.find({ user: req.user.id }) //Grabs all the goals in database

    res.status(200).json(goals)
}

//@desc Set the user goals.
//@route POST /api/goals
//@access Private 
const setGoal = async(req, res) => {
    // console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    } 

const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id
})

    res.status(200).json(goal)
}

//@desc Update the user goals.
//@route PUT /api/goals
//@access Private 
const updateGoal = async(req, res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
}

//@desc Delete the user goal.
//@route GET /api/goals
//@access Private 
const deleteGoal = async(req, res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({id: req.params.id})
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}