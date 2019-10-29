import React from 'react';
import Music from './Music';

const SongSelector = ({ songs }) => {
  const options = props.songs.map((songs) => {
    return <option value={index} >{songs.name}</option>
  })

  function handleChange(event) {
    props.onSongSelected(event.target.value);
  }

  return (
    <select id="song-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a song...</option>
      { options }
    </select>
  )
}

export default SongSelector;
