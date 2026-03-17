import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';
import { Telegram, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey',
        color: '#fff',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
        alignItems: 'center',
        p: 2,
        fontSize: '1rem',
        lineHeight: 1.3,
      }}
    >
      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Box
          component="img"
          src="/img/Сейл Трекер_горизонт_белый_Sk.png"
          alt="Sale Tracker"
          sx={{ maxWidth: 200, mb: 1 }}
        />
        <Typography variant="body2">ООО "Сейл трекер", 2025</Typography>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2">офис: Санкт‑Петербург, Магнитогорская 23к1</Typography>
        <Typography variant="body2">тел.: +7 800 000‑00‑00</Typography>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: { xs: 'center', md: 'flex-end' }, 
        alignItems: 'center',
        gap: 2 
      }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: 999,
              bgcolor: 'rgba(255,255,255,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              '&:hover': { color: 'primary.main' }
            }}
          >
            <Telegram fontSize="small" />
          </Box>
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: 999,
              bgcolor: 'rgba(255,255,255,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              '&:hover': { color: 'primary.main' }
            }}
          >
            <WhatsApp fontSize="small" />
          </Box>
        </Box>
        <Link 
          href="#" 
          color="inherit" 
          underline="hover"
          sx={{ opacity: 0.95 }}
        >
          Политика конфиденциальности
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;