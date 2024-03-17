route.route('/user_role').post((req, res) => {
    const { userToAdd} = req.body

    const user = req.user
    if(user.team.role == 'job seeker' || user.team.role == 'company') {

    } else {
        res.status(400).send({ message: 'Please sign in as a company or a job seeker'})
    }
})

