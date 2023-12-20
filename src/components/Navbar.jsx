import React, { useState } from 'react'
import { Toolbar, Typography, styled, AppBar, Badge, Avatar, InputBase, Box, Menu, MenuItem } from '@mui/material'
import { AccountBalanceWallet, Mail, Notifications, Park } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "35%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  [theme.breakpoints.up("sm")]:
    { display: "flex" }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:
  { display: "none" }
}));


const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>CarbonRegistry</Typography>
        <Park sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder="search..." /></Search>
        <Icons>
          <Badge badgeContent={0} color="error">
            <AccountBalanceWallet />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={7} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ height: "30", width: "30" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BTbYjt6bcJ067BwNCz51fy9FBmr5Gck7w&usqp=CAU"  
          onClick= {e=>setOpen(true)}
          />
        </Icons>

        <UserBox onClick= {e=>setOpen(true)}>
          <Avatar sx={{ height: "30", width: "30" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BTbYjt6bcJ067BwNCz51fy9FBmr5Gck7w&usqp=CAU" />
          <Typography variant="span"> KillerKnight </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
export default Navbar