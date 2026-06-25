import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Typography,
  Button,
  Divider,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Storefront as StorefrontIcon,
  ShoppingCart as ShoppingCartIcon,
  Assignment as AssignmentIcon,
  Event as EventIcon,
  Inventory as InventoryIcon,
  Analytics as AnalyticsIcon,
  Receipt as ReceiptIcon,
  Add as AddIcon,
  GridView as GridViewIcon,
  Menu as MenuIcon
} from '@mui/icons-material';

const navItems = [
  { text: 'Дашборд', icon: <DashboardIcon />, href: '/', active: true },
  { text: 'Витрина', icon: <StorefrontIcon />, href: '/vit', badge: null },
  { text: 'Закупки', icon: <ShoppingCartIcon />, href: '/buy', badge: 3 },
  { text: 'Заявки', icon: <AssignmentIcon />, href: '/bid', badge: 4 },
  { text: 'События', icon: <EventIcon />, href: '/events', badge: 2 },
  { text: 'Каталог поставщиков', icon: <InventoryIcon />, href: '/supplier', badge: 5 },
  { text: 'Аналитика', icon: <AnalyticsIcon />, href: '/analytics', badge: null },
  { text: 'Счета и оплата', icon: <ReceiptIcon />, href: '/bills', badge: null },
];

const Sidebar = ({ onSupplierFilter, currentFilter }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCreateRequest = () => {
    console.log('Создать заявку');
  };

  const handleOpenDemand = () => {
    console.log('Открыть спрос в категории');
  };

  const sidebarContent = (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%',
      bgcolor: 'primary.main',
      color: '#fff',
      width: { md: 300 }
    }}>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
          КомпанияИма
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src="/img/logoCZS-c-w.png"
            alt="Company logo"
            sx={{ maxHeight: 48 }}
          />
        </Box>
      </Box>

      <List sx={{ flex: 1, px: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component="a"
              href={item.href}
              selected={item.active}
              sx={{
                borderRadius: 1,
                bgcolor: item.active ? 'linear-gradient(45deg, #7DB3E3, #a9e6f5)' : '#fff',
                color: item.active ? 'primary.main' : 'primary.main',
                height: 52,
                '&.Mui-selected': {
                  bgcolor: 'linear-gradient(45deg, #7DB3E3, #a9e6f5)',
                  '&:hover': {
                    bgcolor: 'linear-gradient(45deg, #7DB3E3, #a9e6f5)',
                  },
                },
                '&:hover': {
                  bgcolor: '#7DB3E3',
                },
              }}
            >
              <ListItemIcon 
                sx={{ 
                  minWidth: 36,
                  mr: 1,
                  color: 'primary.main',
                  bgcolor: item.active ? '#fff' : '#e6f4ff',
                  borderRadius: 1,
                  p: 0.5,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 36,
                  height: 36,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontSize: 14,
                  whiteSpace: 'nowrap'
                }} 
              />
              {item.badge && (
                <Badge 
                  badgeContent={item.badge} 
                  color="error"
                  sx={{
                    position: 'absolute',
                    left: 10,
                    top: 8,
                    '& .MuiBadge-badge': {
                      transform: 'translateX(24px)',
                    }
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleCreateRequest}
          sx={{
            bgcolor: '#fff',
            color: 'primary.main',
            height: 60,
            justifyContent: 'flex-start',
            px: 2,
            mb: 1,
            '&:hover': {
              bgcolor: '#fff',
              boxShadow: '0 1px 0 rgba(0,0,0,.06)',
            },
          }}
        >
          Разместить заявку
        </Button>

        <Button
          fullWidth
          variant="contained"
          startIcon={
            <GridViewIcon />
          }
          onClick={handleOpenDemand}
          sx={{
            bgcolor: '#fff',
            color: 'primary.main',
            height: 60,
            justifyContent: 'flex-start',
            px: 2,
            '&:hover': {
              bgcolor: '#fff',
              boxShadow: '0 1px 0 rgba(0,0,0,.06)',
            },
          }}
        >
          Спрос в категории
        </Button>
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ 
            position: 'fixed', 
            bottom: 16, 
            right: 16, 
            zIndex: 1200,
            bgcolor: 'primary.main',
            color: '#fff',
            '&:hover': { bgcolor: 'primary.dark' }
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
          }}
        >
          {sidebarContent}
        </Drawer>
      </>
    );
  }

  return sidebarContent;
};

export default Sidebar;