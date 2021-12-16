import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import 'github-markdown-css'
import songBM from "../../images/songBM.jpg";
import miracle from "../../images/MiracleBG.jpg";
import FFA from "../../images/FFA.jpg";
import { Typography, Button } from '@material-ui/core'

const AboutPage = ({ javaWebApp, dotnetApi }) => {

  const getSong = () => {
    async function fetchData() {
      const req = await axios.get(`${dotnetApi}/Song/${url}`)
        .then(res => {
          const lyrics = res.data;
          setSongLyrics(lyrics);
        });
    }
    fetchData();
  }

  const getSentiment = () => {
    async function fetchData() {
      const req = await axios.post(`${javaWebApp}/sentiment`, {
        "sentence": songLyrics
      })
        .then(res => {
          const sentiment = res.data.polarity;
          setSentiment(sentiment);
          console.log("sentiment == ", sentiment)
        });
    }
    fetchData();
  }
  const [songLyrics, setSongLyrics] = useState('');
  const [url, setUrl] = useState("");
  const [sentiment, setSentiment] = useState(0);

  useEffect(() => {
    const url = window.location.href;
    const splitWord = url.split("/");
    console.log("splitWord = ", splitWord);
    if (splitWord[4].includes("?")) {
      const splitFour = splitWord[4].split("?");
      const last = splitFour[0];
      setUrl(last);
    } else {
      const last = splitWord[4];
      setUrl(last);
    }

    console.log("url === ", url);
  }, [])


  return (
    <div>
      <Paper>
        <div style={{ backgroundColor: 'white', padding: 12, display: "flex", marginTop: "60px", alignItems: "center" }}>

          {url == "SongBM" ? <Typography variant="h6"> Just the way you are </Typography> : (url == "Miracle" ? <Typography variant="h6"> Miracle </Typography> : <Typography variant="h6"> Don't Give Up On Me </Typography>)}
          <Button style={{ marginLeft: "20px" }} variant="contained" color="primary" onClick={() => getSong()}>Get Lyrics</Button>
          <Button style={{ marginLeft: "20px" }} disabled={songLyrics ? false : true} variant="contained" color="primary" onClick={() => getSentiment()}>Get Sentiment</Button>
          {sentiment != 0 && <div style={{ marginLeft: "20px" }}>
            <Typography variant="h6">{sentiment}</Typography>
          </div>}
        </div>
      </Paper>
      {songLyrics ?
        <div style={{ padding: "20px" }}>
          {url == "SongBM" ? <img src={songBM} alt="" /> : (url == "Miracle" ? <img src={miracle} alt="" style={{ width: "600px" }} /> : <img src={FFA} alt="" />)}
          <div dangerouslySetInnerHTML={{ __html: songLyrics }} style={{ paddingTop: "20px" }} />
        </div>
        : null}
    </div>

  )
}
export default AboutPage
