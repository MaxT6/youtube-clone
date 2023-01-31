import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';


// `${snippet?.title}${"\u00A0"}`

//below we are deconstructing the props resceived from the API. By using keyname:{}  we are only taking the selected key/valus pairs and leaving the rest
const VideoCard = ({ video: { id: { videoId}, snippet } }) => {
  // console.log("snippet", snippet.title, "len", snippet.title.length)

  const titleLengthStandard = (title) => {
    const length = title.length
   
    let num = 70 - length
    // console.log("Title", title, "length", length, "num", num)
    let extTitle = title
    for(let i = 0; i < num; i++) {
      extTitle += "\u00A0"
    }
    console.log("title Len", title.length, "extTitle Len", extTitle)
    return (
      extTitle
    )
  }

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', boderRadius: 0}} >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
        <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: {
          xs: '100%', sm: '358px', md: '320px'
        }, height: 180 }} 
        /> 
      </Link>
      <CardContent sx={{ width: {xs: "fit-content"}, backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <Typography variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
          >
            { snippet?.title.length > 60 ? snippet?.title.slice(0,60) || demoVideoTitle.slice(0, 60) : titleLengthStandard(snippet?.title) }
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography variant="subtitle2"
            fontWeight="bold"
            color="gray"
          >
            {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard