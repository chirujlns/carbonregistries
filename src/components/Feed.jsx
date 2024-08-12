import React from 'react'
import Post from './Post'
import { Box } from '@mui/material'

const Feed = () => {
  const postDetails = [{
    avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BTbYjt6bcJ067BwNCz51fy9FBmr5Gck7w&usqp=CAU",
    title: "KillerKnight",
    subheader: "Dec 20, 2023",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHRWUp-j5kPG3Ls4W5gWDf2f05nRRDu5x6Q&usqp=CAU",
    content: "The Dark Knight is the alter ego of Bruce Wayne, a billionaire playboy and philanthropist who witnessed his parents' murder as a child. Driven by a sense of justice, Wayne dedicates his life and resources to becoming Batman. Batman is often depicted as a symbol of justice, using his physical prowess, intellect, and advanced technology to fight crime in Gotham City. Unlike other superheroes, Batman does not possess superhuman powers but relies on his skills, detective abilities, and a vast array of gadgets."
  }, {
    avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BTbYjt6bcJ067BwNCz51fy9FBmr5Gck7w&usqp=CAU",
    title: "KillerKnight",
    subheader: "Dec 21, 2023",
    postImage: "https://wallpapers.com/images/hd/forest-pictures-ghluxfda78g0i0ap.jpg",
    content: "The Amazon Rainforest spans across several countries, including Brazil, Peru, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Suriname, and French Guiana. It is the largest rainforest in the world, covering an area of approximately 6.7 million square kilometers (2.7 million square miles)."
  },
  {
    avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BTbYjt6bcJ067BwNCz51fy9FBmr5Gck7w&usqp=CAU",
    title: "KillerKnight",
    subheader: "Feb 12, 2024",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsEFkeHbQVvCDADSAL1Tc9QkV-ZDXBMUo8mKda4sESbiulrJU_jnUdQsLsClDUQWq0ag&usqp=CAU",
    content: "Phoenix as a Mythical Bird: The phoenix is a mythical bird often associated with rebirth and renewal. It's said to burst into flames upon death and then be reborn from its ashes. If you're referring to the natural aspects of the phoenix in this context, it's worth noting that the phoenix itself is a legendary creature, and the concept is not grounded in the natural world."
  },
  {
    avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BTbYjt6bcJ067BwNCz51fy9FBmr5Gck7w&usqp=CAU",
    title: "KillerKnight",
    subheader: "May 11, 2024",
    postImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/717d5f28537027.55c4c52cd458b.jpg",
    content: "The Dragon Knight is a hero in Dota 2, a new-collection multiplayer online battle arena game. He is a melee carry hero with a unique set of abilities that allow him to deal damage and protect himself in combat.The Dragon Knight’s fun name is Trogdor and he has an alternate name when he transforms with his ultimate ability, which is Arc Honist. He is a formidable ranged dragon when transformed.The Dragon Knight has several abilities that make him a powerful hero in the game. His primary attack is a sword swing that deals damage to enemies, and he can also use his shield to block damage and stun enemies. His ultimate ability allows him to transform into a dragon, increasing his damage output and movement speed."
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
