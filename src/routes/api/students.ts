import express from 'express';
const students = express.Router();

students.get('/', (req: any, res: any) => { 
    res.send('Students route')
});

export default students;