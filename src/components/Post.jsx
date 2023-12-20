import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
        <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BTbYjt6bcJ067BwNCz51fy9FBmr5Gck7w&usqp=CAU"/>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="KillerKnight"
          subheader="december 20, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHRWUp-j5kPG3Ls4W5gWDf2f05nRRDu5x6Q&usqp=CAU"
          alt="Dark Knignt"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          "The Dark Knight" is a superhero film directed by Christopher Nolan and released in 2008. 
          It is the second installment in Nolan's Batman film trilogy, following "Batman Begins" (2005) and preceding "The Dark Knight Rises" (2012). 
          Here are some key details about "The Dark Knight":
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Post;