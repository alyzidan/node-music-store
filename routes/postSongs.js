import { db } from "../db/index.js";
import express from 'express';

const router = express.Router();
const validateSongData = (song) => {
      const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (regex.test(song)) {
            return false
      }
      return true;
}
export const postSongs = router.post('/postSongs', (req, res) => {
      if (!req.body) {
            throw `sont title and artist are required`
      }
      const { name, artist } = req.body;
      if (!validateSongData(name)) return res.status(401).json({ error: 'special characters in song name is not allowed' })
      if (!validateSongData(artist)) return res.status(401).json({ error: 'special characters in artist name is not allowed' })

      db.query('insert into songs (name,artist) VALUES ($1,$2)',
            [name, artist],
            (error, results) => {
                  if (error) {
                        throw error
                  }
                  res.status(200).json(results.rows)
            })
})
