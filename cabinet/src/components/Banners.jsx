import React from 'react';
import { Box, Paper } from '@mui/material';

const Banners = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        gap: 1,
        maxWidth: 300,
        width: '100%',
        height: '100%',
        bgcolor: 'lightBlue'
      }}
    >
      <Paper 
        sx={{ 
          width: '100%',
          height: 190,
          background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,.25), rgba(255,255,255,0) 55%), linear-gradient(135deg, #0C2F48, #0E6AAE)',
          color: '#fff',
          p: 2,
          position: 'relative'
        }}
      >
        <Box>
          <Box sx={{ fontSize: 34, fontWeight: 800, lineHeight: 1.02, letterSpacing: 0.6, mb: 1 }}>
            НЕВА
          </Box>
          <Box sx={{ fontSize: 12, opacity: 0.9 }}>
            С 29 по 31 мая
          </Box>
          <Box sx={{ position: 'absolute', right: 12, top: 12, textAlign: 'right', fontSize: 11, opacity: 0.95 }}>
            15-17<br />апреля
          </Box>
        </Box>
      </Paper>

      <Paper 
        sx={{ 
          width: '100%',
          height: 210,
          bgcolor: '#F5F7FA',
          p: 1.5,
          position: 'relative',
          color: 'text.primary'
        }}
      >
        <Box>
          <Box sx={{ fontSize: 12, color: '#6C7B8A', letterSpacing: 0.4, mb: 1 }}>
            PITERFOOD 2025
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <Box sx={{ width: 18, height: 18, borderRadius: 999, bgcolor: '#F6C000' }} />
            <Box sx={{ fontSize: 22, fontWeight: 800, letterSpacing: 0.3 }}>
              PITERFOOD
            </Box>
          </Box>
          <Box sx={{ fontSize: 12, color: '#6C7B8A', mb: 0.5 }}>
            ВК Ленэкспо
          </Box>
          <Box sx={{ fontSize: 12, fontWeight: 700, mb: 1 }}>
            12-14 ноября
          </Box>
          <Box sx={{
            position: 'absolute',
            left: 16,
            bottom: 14,
            bgcolor: '#F6C000',
            color: '#1A1A1A',
            fontSize: 10,
            fontWeight: 700,
            p: 1,
            borderRadius: 2,
            width: 190
          }}>
            День поставщика сетей
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Banners;