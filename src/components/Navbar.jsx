import React from 'react'
import { Toolbar, Typography, styled, AppBar, Badge, Avatar, InputBase, Box } from '@mui/material'
import { AccountBalanceWallet, Mail, Notifications, Park } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"35%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
}));


const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>CorbonRegistry</Typography>
        <Park sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder="search..."/></Search>
        <Icons>
        <Badge badgeContent={0} color="error">
            <AccountBalanceWallet />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{height:"30", width:"30"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BTbYjt6bcJ067BwNCz51fy9FBmr5Gck7w&usqp=CAU"/>
        </Icons>

      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar