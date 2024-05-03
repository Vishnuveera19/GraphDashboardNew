import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar'; 
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AppsIcon from '@mui/icons-material/Apps';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import Layoutcomp from './layoutcomp';
import { useContext } from 'react';
import { UserContext } from '../Authentication/UserContext';

export default function MainPage() {
  const { user, isLoggedIn } = useContext(UserContext);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handlePopoverOpen = (event) => {
    setPopoverAnchorEl(event.currentTarget);
    setIsOverlayVisible(true);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
    setIsOverlayVisible(false);
  };

  return (
    <div>
      <AppBar>
        <Toolbar style={{ justifyContent: 'flex-end', backgroundColor: "#482880" }}>
          <IconButton color="primary" aria-label="Log out">
            <LogoutIcon />
          </IconButton>

          <IconButton color="primary" aria-label="Settings">
            <SettingsApplicationsSharpIcon />
          </IconButton>
          <AppsIcon onClick={handlePopoverOpen} />
          <Avatar>{user.charAt(0)}</Avatar> {/* Avatar profile with the first character of the user's name */}
        </Toolbar>
      </AppBar>
      {isOverlayVisible && (
        <div className="overlay">
          <Popover
            open={Boolean(popoverAnchorEl)}
            anchorEl={popoverAnchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <div style={{ padding: '20px', alignItems: 'center', height: '200px', maxWidth: '200px' }}>
              <Container>
                <Grid container direction="column" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item>
                    <Typography align='center'>Dialog Content</Typography>
                  </Grid>
                  
                </Grid>
              </Container>
            </div>
          </Popover>
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <Layoutcomp />
    </div>
  );
}
