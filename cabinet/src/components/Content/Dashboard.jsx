import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import FilterPanel from './FilterPanel';
import ChartBlock from './ChartBlock';
import StatsCards from './StatsCards';
import TableBlock from './TableBlock';

const Dashboard = ({
  selectedCategory,
  onCategoryChange,
  chartPeriod,
  onChartPeriodChange,
  customDateRange,
  onCustomDateRangeChange,
  filteredPurchases,
  onSupplierFilter,
  currentSupplierFilter
}) => {
  const theme = useTheme();

  return (
    <Box 
      component="main" 
      sx={{ 
        flex: 1,
        p: { xs: 2, md: 4 },
        overflow: 'auto'
      }}
    >
      <Typography 
        variant="h1" 
        sx={{ 
          mb: 3,
          mt: 1,
          fontSize: { xs: '24px', md: '54px' }
        }}
      >
        Сводные данные
      </Typography>

      {/* Первый график */}
      <ChartBlock
        title="График прироста дохода"
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        chartPeriod={chartPeriod}
        onChartPeriodChange={onChartPeriodChange}
        customDateRange={customDateRange}
        onCustomDateRangeChange={onCustomDateRangeChange}
        filteredPurchases={filteredPurchases}
        chartId="up"
        chartType="line"
      />

      {/* Статистика */}
      <StatsCards filteredPurchases={filteredPurchases} />

      {/* Второй график */}
      <ChartBlock
        title="Общие сведения по платформе"
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        chartPeriod={chartPeriod}
        onChartPeriodChange={onChartPeriodChange}
        customDateRange={customDateRange}
        onCustomDateRangeChange={onCustomDateRangeChange}
        filteredPurchases={filteredPurchases}
        chartId="down"
        chartType="pie"
      />

      {/* Кнопки действий */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
        {['Разместить заявку онлайн', 'Разместить заявку оффлайн', 'Открыть спрос в категории'].map((text) => (
          <Box
            key={text}
            component="button"
            sx={{
              py: 1.5,
              px: 3,
              bgcolor: 'primary.main',
              color: '#fff',
              border: 'none',
              borderRadius: 2,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              },
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { sm: 340 },
            }}
          >
            {text}
          </Box>
        ))}
      </Box>

      {/* Таблица */}
      <TableBlock 
        filteredPurchases={filteredPurchases}
        onSupplierFilter={onSupplierFilter}
        currentSupplierFilter={currentSupplierFilter}
      />
    </Box>
  );
};

export default Dashboard;