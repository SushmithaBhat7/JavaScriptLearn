import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { REACT_APP_API_KEY } from "../../assets/movieDb.config.local";
import { useState } from "react";
import { useEffect } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./contentModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "80%",
  borderRadius: 10,
  background: "linear-gradient( #00a8ff,#090979)",
  border: "1px solid #282c34",
  boxShadow: "1px 2px 9px #F4AAB9",
  p: 4,
};

export default function ContentModal({ children, media_type, id, type }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState({});
  const [video, setVideo] = useState({});
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${
        media_type ? media_type : type
      }/${id}?api_key=${REACT_APP_API_KEY}&language=en-US`
    );
    console.log("data content :", content);
    setContent(data);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${
        media_type ? media_type : type
      }/${id}/videos?api_key=${REACT_APP_API_KEY}&language=en-US`
    );
    // console.log("data video :", data);
    setVideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return (
    <div>
      <Button className="cardDivContainer" onClick={handleOpen}>
        {children}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {content && (
              <div>
                <div className="contentModal">
                  <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${content.poster_path}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://screench.com/upload/no-poster.jpeg";
                    }}
                    alt="Card Img"
                    className="contentModalPortrait"
                  />
                  <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${content.backdrop_path}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://screench.com/upload/no-poster.jpeg";
                    }}
                    alt="Card Img"
                    className="contentModalLandScape"
                  />
                  <div className="contentModalAbout">
                    <span className="contentModalTitle">
                      {content.name || content.title}(
                      {
                        (
                          content.first_air_date ||
                          content.release_date ||
                          "--/--/----"
                        ).split("-")[0]
                      }
                      )
                    </span>
                    {content.tagline && (
                      <i className="tagline">{content.tagline}</i>
                    )}
                    <span className="contentModalDescription">
                      {content.overview}
                    </span>
                    <div></div>
                    <Button
                      variant="contained"
                      startIcon={<YouTubeIcon />}
                      color="error"
                      target="_blank"
                      href={`https://www.youtube.com/watch?v=${video}`}
                    >
                      Watch the trailer
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
