import { db } from "../db/index.js";
import express from 'express';

const router = express.Router();

export const getSongs = router.get('/getSongs', (req, res) => {
      db.query('select * from songs order by id ASC', (error, results) => {
            if (error) {
                  throw error
            }
            res.status(200).json(results.rows)
      })
})
