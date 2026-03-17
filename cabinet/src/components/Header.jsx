import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Typography,
  InputBase,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Search as SearchIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  ExitToApp as LogoutIcon
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 4,
  backgroundColor: '#fff',
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  '&:focus-within': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.1)}`,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  right: 0,
  top: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 2),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '25em',
    },
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchValue, setSearchValue] = useState('');

  return (
    <AppBar 
      position="static" 
      color="transparent" 
      elevation={0}
      sx={{ 
        borderBottom: 'none',
        backgroundColor: '#fff'
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between',
          py: { xs: 1, md: 1.25 },
          px: { xs: 2, md: 4 }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0 }}>
          <Box
            component="img"
            src="/img/Сейл Трекер_горизонт_синий_Sk.svg"
            alt="Sale Tracker"
            sx={{ 
              maxWidth: { xs: 180, md: 320 },
              width: '100%'
            }}
          />
          {!isMobile && (
            <Typography 
              variant="body2" 
              sx={{ 
                width: 170,
                color: theme.palette.text.primary
              }}
            >
              Кабинет закупщика
            </Typography>
          )}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Search>
            <StyledInputBase
              placeholder=""
              inputProps={{ 'aria-label': 'search' }}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            <IconButton size="large" aria-label="show 5 new notifications" color="inherit">
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {!isMobile && (
              <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                И.О. Посетительный
              </Typography>
            )}
            <Avatar 
              sx={{ 
                bgcolor: 'primary.main',
                width: 34,
                height: 34
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
                <path d="M4 20a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Avatar>
            <Box 
              component="a" 
              href="#" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 0.5,
                color: 'text.primary',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              {!isMobile && <Typography variant="body2">Выход</Typography>}
              <LogoutIcon fontSize="small" />
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;