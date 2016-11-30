import React from 'react'

const Youtube = ({video}) => {
  if (!video) {
    return (
      <div>Loading...</div>
    )
  }

  let videoId = video.id.videoId;
  let url = 'https://www.youtube.com/embed/' + videoId;

  return (
    <div className="col-md-8 col-md-offset-2" style={{marginTop: '20px'}}>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
    </div>
  );
}

export default Youtube;
