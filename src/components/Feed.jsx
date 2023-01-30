import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';

import { fetchFromApi } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]) //since selectedCategory is used within  the useEffect hook, it must also be put within the dependency array

  return (
    <Stack sx={{
      flexDirection: { 
        sx: "column", 
        md: "row"
      }
    }}>
      <Box sx={{
        height: {
          sx: 'auto', // Don't forget that auto will collaspe the div to invisibility when nothing is inside. 
          md: '92vh'
        },
        borderRight: '1px solid #3d3d3d', 
        px: { sx: 0, md: 2 }
      }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /> {/* passes the states to the SideBar component */}

        <Typography className='copyright'
        variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2023 MT Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4"
          fontWeight="bold" mb={2} sx={{
            color: 'white'}}
            >
           {selectedCategory} <span style={{color: '#F31503'}}>
            vidoes
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed