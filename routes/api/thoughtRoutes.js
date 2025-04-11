// thoughtRoutes.js
// thoughtRoutes.js
import { Router } from 'express';
const router = Router();
import Thought from '../../models/Thought.js';

router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.post('/', async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        res.status(201).json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
})


router.put('/:id', async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(201).json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json({ message: 'Thought deleted' });
    } catch (err) {
        res.status(500).json(err);
    }
})



export default router;