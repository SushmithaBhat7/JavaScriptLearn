const nanoId = require("nanoid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const shortId = nanoId(8);
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL Required" });
  }
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortId });
}

module.exports = {
  handleGenerateNewShortURL,
};
