import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';

const StatsCards = ({ filteredPurchases }) => {
  const theme = useTheme();

  // Подсчет статистики
  const stats = {
    active: filteredPurchases.filter(p => 
      ['В процессе', 'Ожидается'].includes(p.status)
    ).length,
    pending: filteredPurchases.filter(p => 
      p.status === 'На согласовании'
    ).length,
    overdue: filteredPurchases.filter(p => 
      p.status === 'Просрочено'
    ).length
  };

  const statBlocks = [
    {
      title: 'Активные заявки',
      value: stats.active,
      chip: filteredPurchases.filter(p => p.status === 'В процессе').length,
      note: 'Дополнительная информация, текст'
    },
    {
      title: 'На согласовании',
      value: stats.pending,
      chip: stats.pending,
      note: 'Дополнительная информация, текст'
    },
    {
      title: 'Требует внимания!',
      value: stats.overdue,
      chip: stats.overdue,
      note: 'Дополнительная информация, текст',
      alert: true
    }
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, mb: 4 }}>
      {statBlocks.map((stat, index) => (
        <Paper
          key={index}
          sx={{
            position: 'relative',
            width: { xs: '100%', sm: '33.33%' },
            p: 2,
            border: 2,
            borderColor: 'divider',
            borderRadius: 2,
            transition: 'all 0.2s',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Typography variant="h4" sx={{ mb: 1 }}>
            {stat.title}
          </Typography>
          
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              height: 33,
              width: 40,
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'24\' viewBox=\'0 0 32 24\' fill=\'none\'%3E%3Cpath d=\'M30 0C31.1046 0 32 0.895431 32 2V15C32 16.1046 31.1046 17 30 17H10.5771L0 24V2C0 0.895431 0.895431 0 2 0H30Z\' fill=\'%23E6F4FF\'/%3E%3C/svg%3E")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '40px 39px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            {stat.chip}
          </Box>

          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              color: stat.alert ? 'error.main' : 'text.secondary',
              fontSize: { xs: '2rem', sm: '2.5rem' }
            }}
          >
            {stat.value}
          </Typography>
          
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            {stat.note}
            {stat.alert && (
              <Typography 
                component="span" 
                sx={{ color: 'error.main', fontWeight: 600, ml: 0.5 }}
              >
                Требует внимания!
              </Typography>
            )}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default StatsCards;