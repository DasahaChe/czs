import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box, useMediaQuery } from '@mui/material';
import { theme } from './theme';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Content/Dashboard';
import Banners from './components/Banners';
import Footer from './components/Footer';

import { procurementData } from './utils/data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Молочная продукция');
  const [supplierFilter, setSupplierFilter] = useState(null);
  const [chartPeriod, setChartPeriod] = useState('week');
  const [customDateRange, setCustomDateRange] = useState({ start: null, end: null });
  
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  // Отфильтрованные данные для таблицы и графиков
  const getFilteredPurchases = () => {
    let filtered = [...procurementData.purchases];

    if (supplierFilter) {
      filtered = filtered.filter(p => p.supplier === supplierFilter);
    }

    if (selectedCategory && selectedCategory !== 'Молочная продукция') {
      if (selectedCategory === 'Овощи и фрукты') {
        filtered = filtered.filter(p => 
          p.product.toLowerCase().includes('овощ') || 
          p.product.toLowerCase().includes('фрукт')
        );
      } else if (selectedCategory === 'Напитки') {
        filtered = filtered.filter(p => 
          p.product.toLowerCase().includes('напиток') || 
          p.product.toLowerCase().includes('сок')
        );
      }
    }

    return filtered;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        <Box 
          sx={{ 
            height: '4px', 
            bgcolor: 'primary.main',
            width: '100%'
          }} 
        />

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'auto 1fr',
              lg: 'auto 1fr auto'
            },
            flex: 1,
            gap: { xs: 0, md: 2 },
            position: 'relative'
          }}
        >
          <Sidebar 
            onSupplierFilter={setSupplierFilter}
            currentFilter={supplierFilter}
          />
          
          <Dashboard 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            chartPeriod={chartPeriod}
            onChartPeriodChange={setChartPeriod}
            customDateRange={customDateRange}
            onCustomDateRangeChange={setCustomDateRange}
            filteredPurchases={getFilteredPurchases()}
            onSupplierFilter={setSupplierFilter}
            currentSupplierFilter={supplierFilter}
          />
          
          {!isMobile && !isTablet && <Banners />}
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;