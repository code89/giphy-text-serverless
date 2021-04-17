const fetch = require('node-fetch')

const { API_KEY } = process.env


exports.handler = async (event, context) => {
  const params = JSON.parse(event.body)
  const { parse, count, ping2 } = params
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${parse[i]}&limit=${count + 1}&offset=${ping2}&rating=G&lang=en`

  try {
    const giphyStream = await fetch(url)
    const giphyJson = giphyStream.json()
    return {
      statusCode: 200,
      body: JSON.stringify(giphyStream)
    }
  } catch (err) {
    return { statusCode: 422, body: err.stack }
  }


}