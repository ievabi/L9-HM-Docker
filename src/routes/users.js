import express from 'express';

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('Gets all the users');
});

router.get('/:id_user', (req,res) =>{
    const {id_user} = req.params;
    res.send(`Get a specific user with the ID: ${id_user}`)
})

router.post('/:id_user', (req,res) =>{
    const {id_user} = req.params;
    res.send('create a new user')
});

router.put('/:id_user', (req,res) =>{
    const {id_user} = req.params;
    res.send(`Edit a user with an ID: ${id_user}`)
});

router.delete('/:id_user', (req,res) =>{
    const {id_user} = req.params;
    res.send(`Delete a user with an ID: ${id_user}`)
});

export default router;