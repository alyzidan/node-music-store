import { db } from "../db/index.js";
import express from 'express';

const router = express.Router();

export const postSongs = router.post('/postSongs', (req, res) => {
      if (!req.body) {
            return
      }
      const { name, artist } = req.body;
      db.query('insert into songs (name,artist) VALUES ($1,$2)',
            [name, artist],
            (error, results) => {
                  if (error) {
                        throw error
                  }
                  res.status(200).json(results.rows)
            })
})
