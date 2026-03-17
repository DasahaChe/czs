import React, { useEffect, useRef } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import FilterPanel from './FilterPanel';
import { renderLineChart, renderPieChart } from '../../utils/chartUtils';

const ChartBlock = ({
  title,
  selectedCategory,
  onCategoryChange,
  chartPeriod,
  onChartPeriodChange,
  customDateRange,
  onCustomDateRangeChange,
  filteredPurchases,
  chartId,
  chartType
}) => {
  const chartRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    if (chartType === 'line' && chartRef.current) {
      renderLineChart(chartRef.current, filteredPurchases, chartPeriod, customDateRange);
    } else if (chartType === 'pie' && infoRef.current) {
      renderPieChart(infoRef.current, filteredPurchases);
    }
  }, [filteredPurchases, chartPeriod, customDateRange, chartType]);

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 1 }}>
        <Typography variant="h2">{title}</Typography>
      </Box>

      <FilterPanel
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        chartPeriod={chartPeriod}
        onChartPeriodChange={onChartPeriodChange}
        customDateRange={customDateRange}
        onCustomDateRangeChange={onCustomDateRangeChange}
      />

      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2
      }}>
        <Paper 
          ref={chartRef}
          id={chartId}
          sx={{ 
            width: { xs: '100%', md: chartType === 'line' ? '66.66%' : '100%' },
            height: 350,
            overflow: 'hidden',
            position: 'relative',
            bgcolor: 'background.paper',
            borderRadius: 1
          }}
        />
        {chartType === 'line' && (
          <Paper 
            ref={infoRef}
            id="all"
            sx={{ 
              width: { xs: '100%', md: '33.33%' },
              minHeight: 350,
              bgcolor: 'background.paper',
              borderRadius: 1
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default ChartBlock;