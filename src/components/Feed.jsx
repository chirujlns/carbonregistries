import React from 'react'
import Post from './Post'
import { Box } from '@mui/material'

const Feed = () => {
  const postDetails = [{
    avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BTbYjt6bcJ067BwNCz51fy9FBmr5Gck7w&usqp=CAU",
    title: "KillerKnight",
    subheader: "december 20, 2023",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHRWUp-j5kPG3Ls4W5gWDf2f05nRRDu5x6Q&usqp=CAU",
    content: "The Dark Knight is the alter ego of Bruce Wayne, a billionaire playboy and philanthropist who witnessed his parents' murder as a child. Driven by a sense of justice, Wayne dedicates his life and resources to becoming Batman. Batman is often depicted as a symbol of justice, using his physical prowess, intellect, and advanced technology to fight crime in Gotham City. Unlike other superheroes, Batman does not possess superhuman powers but relies on his skills, detective abilities, and a vast array of gadgets."

  }, {
    avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BTbYjt6bcJ067BwNCz51fy9FBmr5Gck7w&usqp=CAU",
    title: "KillerKnight",
    subheader: "december 21, 2023",
    postImage: "https://wallpapers.com/images/hd/forest-pictures-ghluxfda78g0i0ap.jpg",
    content: "The Amazon Rainforest spans across several countries, including Brazil, Peru, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Suriname, and French Guiana. It is the largest rainforest in the world, covering an area of approximately 6.7 million square kilometers (2.7 million square miles)."

  }]

  return (
    <Box flex={4} p={2}>
      {postDetails.map((item, index) => {
        return <Post key={index}
          avatarSrc={item.avatarSrc}
          title={item.title}
          subheader={item.subheader}
          postImage={item.postImage}
          content={item.content} />
      })}
    </Box>
  )
}
export default Feed;
