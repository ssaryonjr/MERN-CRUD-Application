//Middleware for handling Async errors https://www.npmjs.com/package/express-async-handler
const asyncHandler = require('express-async-handler')

//@desc Get the user goals.
//@route GET /api/goals
//@access Private 
const getGoals = asyncHandler((req, res) => {
    res.status(200).json({message: 'View Goals'})
})

//@desc Set the user goals.
//@route POST /api/goals
//@access Private 
const setGoal = asyncHandler((req, res) => {
    // console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    } 
    res.status(200).json({message: 'Set goals'})
})

//@desc Update the user goals.
//@route PUT /api/goals
//@access Private 
const updateGoal = asyncHandler((req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

//@desc Delete the user goal.
//@route GET /api/goals
//@access Private 
const deleteGoal = asyncHandler((req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}