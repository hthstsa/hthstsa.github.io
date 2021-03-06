import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  z-index: 5;
  background-color: #fff;
  transform: ${props =>
    props.modalOpen ? "translateX(100%)" : "translateX(0)"};
  transition: transform 0.7s;
  transition-timing-function: cubic-bezier(0.86, 0.01, 0.77, 0.78);
`;

const AlbumContainer = styled.div`
  height: 100%;
  width: 54%;
  background-color: #f4f4f4;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("https://hthstsa-af51.kxcdn.com/static/album.png");
`;

const Songs = styled.div`
  height: 100%;
  width: 46%;
  background-color: #fff;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SongContent = styled.div`
  width: 100%;
  padding: 20% 20%;
  font-family: "Raleway";
  @media only screen and (max-width: 768px) {
    padding: 10% 20%;
  }
`;

const SongsList = styled.ul`
  text-align: left;
  margin: 0;
  padding: 0;
  list-style-type: none;
  outline: none;
`;

const Song = styled.li`
  text-align: left;
  display: inline-block;
  border-top: 1px solid #bebebe;
  width: 100%;
  padding: 17px 0 17px 0;
  margin: -3px;
  &:hover {
    background-color: #dee0e2;
  }
`;

const SongName = styled.span`
  width: 58%;
  float: left;
  color: #4d4d4e;
`;

const SongLength = styled.span`
  width: 8.3%;
  float: right;
  text-align: right;
  padding-right: 0.5em;
  color: #4d4d4e;
`;

const PlayPause = styled(FontAwesomeIcon)`
  width: 8.3%;
  float: left;
  padding-left: 0.5em;
  padding-right: 1em;
  margin-top: 0.1em;
  outline: 0;
`;

const Cancel = styled.img`
  width: 25px;
  height: auto;
  position: absolute;
  right: 30px;
  top: 30px;
`;

const songs = [
  {
    name: "Traffic Lights",
    url: "https://hthstsa-af51.kxcdn.com/static/song1.mp3",
    length: "3:20",
    id: 1
  },
  {
    name: "Sidewalk",
    url: "https://hthstsa-af51.kxcdn.com/static/song2.mp3",
    length: "2:49",
    id: 2
  },
  {
    name: "Store Front",
    url: "https://hthstsa-af51.kxcdn.com/static/song3.mp3",
    length: "4:19",
    id: 3
  },
  {
    name: "Stop Signs",
    url: "https://hthstsa-af51.kxcdn.com/static/song4.mp3",
    length: "3:12",
    id: 4
  }
];

export default class Music extends Component {
  state = {
    open: false,
    playing: 0
  };
  componentDidMount() {
    if (window.location.href.includes("#music")) {
      this.setState({ open: true });
    }
    console.log("Mounted");
    window.onhashchange = () => {
      if (window.location.href.includes("#music")) {
        this.setState({ open: true });
      }
    };
    this.audio = new Audio();
    this.audio.addEventListener("ended", () => {
      this.setState({ playing: false });
    });
  }
  toggleSong(song) {
    if (this.state.playing !== song.id) {
      this.audio.src = song.url;
      this.audio.play();
      this.setState({ playing: song.id });
    } else {
      this.audio.pause();
      this.setState({ playing: 0 });
    }
  }
  closeWindow() {
    this.setState({ open: false });
    window.history.back();
  }
  render() {
    return (
      <Container modalOpen={this.state.open}>
        <AlbumContainer />
        <Songs>
          <SongContent>
            <SongsList>
              {songs.map(song => (
                <Song>
                  <PlayPause
                    icon={song.id == this.state.playing ? "pause" : "play"}
                    onClick={() => this.toggleSong(song)}
                  />
                  <SongName>{song.name}</SongName>
                  <SongLength>{song.length}</SongLength>
                </Song>
              ))}
            </SongsList>
          </SongContent>
        </Songs>
        <Cancel
          src="https://hthstsa-af51.kxcdn.com/static/cancel.svg"
          onClick={() => this.closeWindow()}
        />
      </Container>
    );
  }
}
