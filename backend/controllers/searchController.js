const axios = require('axios');
const wiki = require('wikipedia');
const Search = require('../models/searchModel');

const performSearch = async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).send('Query is required');

  try {
    // Save search query in the database
    await Search.create({ query });

    // Fetch text results from Wikipedia
    let textResults;
    try {
      const page = await wiki.page(query);
      textResults = await page.summary(); // Fetch the summary of the page
    } catch (err) {
      textResults = `No Wikipedia results found for "${query}".`;
    }

    // Fetch video results from YouTube
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    const youtubeResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${YOUTUBE_API_KEY}`
    );
    const videoResults = youtubeResponse.data.items.map((item) => ({
      title: item.snippet.title,
      videoId: item.id.videoId,
      thumbnail: item.snippet.thumbnails.default.url,
    }));

    res.json({ text: textResults, videos: videoResults });
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred during the search.');
  }
};

module.exports = { performSearch };
