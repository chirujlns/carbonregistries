import Login from './Login';
import React, { useState } from 'react'
import { Toolbar, Typography, styled, AppBar, Badge, Avatar, InputBase, Box, Menu, MenuItem, Tooltip, IconButton } from '@mui/material'
import { AccountBalanceWallet, Mail, Notifications, Park } from '@mui/icons-material'
import LogoutIcon from '@mui/icons-material/Logout';

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
  const [userMenuOpen, setUserMenuOpen] = useState(null);
  const [loginFormOpen, setLoginFormOpen] = useState(false);


  const handleUserMenuOpen = (event) => {
    setUserMenuOpen(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuOpen(null);
  };

  const handleLoginToggle = () => {
    setLoginFormOpen((prevValue) => !prevValue);
  };


  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          CarbonRegistry
        </Typography>
        <Park sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>

        <Icons>
          <Badge badgeContent={0} color="error">
            <Tooltip title="login">
              <IconButton color="inherit" onClick={handleLoginToggle}>
                <LogoutIcon/>
              </IconButton>
            </Tooltip>
          </Badge>
          <Badge badgeContent={0} color="error">
            <Tooltip title="Wallet">
              <AccountBalanceWallet />
            </Tooltip>
          </Badge>
          <Badge badgeContent={4} color="error">
            <Tooltip title="Mail">
              <Mail />
            </Tooltip>
          </Badge>
          <Badge badgeContent={7} color="error">
            <Tooltip titl="Notifications">
              <Notifications />
            </Tooltip>
          </Badge>

          <Avatar
            sx={{ height: "30", width: "30" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BTbYjt6bcJ067BwNCz51fy9FBmr5Gck7w&usqp=CAU"
            onClick={handleUserMenuOpen}
          />
        </Icons>

        <UserBox onClick={() => setLoginFormOpen(true)}>
          <Avatar
            sx={{ height: "30", width: "30" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BTbYjt6bcJ067BwNCz51fy9FBmr5Gck7w&usqp=CAU"
          />
          <Typography variant="span"> KillerKnight </Typography>
        </UserBox>

        <Menu
          id="user-menu"
          anchorEl={userMenuOpen}
          open={Boolean(userMenuOpen)}
          onClose={handleUserMenuClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
      <Login open={loginFormOpen} onClose={() => setLoginFormOpen(false)} />
    </AppBar>
  )
}
export default Navbar