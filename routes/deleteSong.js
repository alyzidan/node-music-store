import { db } from "../db/index.js";
import express from 'express';

const router = express.Router();
export const deleteSong = router.delete('/deleteSong', (req, res) => {
      if (!req.body) {
            throw `sont id and artist are required`
      }
      const { id } = req.body;
      console.log('song deleted with id', id)
      db.query('delete from songs where id = $1',
            [id],
            (error, results) => {
                  if (error) {
                        throw error
                  }
                  res.status(200).json(results.rows)
            })
})
