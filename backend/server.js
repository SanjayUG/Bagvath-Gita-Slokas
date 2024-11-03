import express from "express";
import data from "./data/data.js";

const app = express();

app.get("/", (req, res) => {
    res.send("SERVER is READY.!"); 
});

app.get("/api/bg/:chapter.:sloka", (req, res) => {
    const { chapter, sloka } = req.params;

    // Find the chapter data
    const chapterData = data.chapters.find(chap => chap.chapter === parseInt(chapter));

    if (!chapterData) {
        return res.status(404).json({ error: "Chapter not found" });
    }

    // Assuming that slokas is an array in chapterData
    const slokaData = chapterData.slokas.find(s => s.number === parseInt(sloka));

    if (!slokaData) {
        return res.status(404).json({ error: "Sloka not found" });
    }

    // If both chapter and sloka are found, return the sloka data
    return res.json(slokaData);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("SERVER is running at", port);
});
