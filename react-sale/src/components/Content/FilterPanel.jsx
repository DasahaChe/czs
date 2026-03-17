import React, { useState } from 'react';
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Button,
  ButtonGroup,
  Typography,
  TextField,
  Stack,
  InputAdornment,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  FilterList as FilterIcon,
  DateRange as DateRangeIcon
} from '@mui/icons-material';

const periodButtons = [
  { id: 'day', label: 'Сегодня' },
  { id: 'week', label: 'Последние 7 дней' },
  { id: 'mouns', label: 'Последние 30 дней' },
  { id: 'quatro', label: 'Последние 90 дней' },
  { id: 'year', label: 'Последние 365 дней' },
];

const FilterPanel = ({
  selectedCategory,
  onCategoryChange,
  chartPeriod,
  onChartPeriodChange,
  customDateRange,
  onCustomDateRangeChange,
  onShow
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handlePeriodClick = (periodId) => {
    onChartPeriodChange(periodId);
    if (periodId !== 'time') {
      setShowDatePicker(false);
    } else {
      setShowDatePicker(true);
    }
  };

  const handleApplyDate = () => {
    if (customDateRange.start && customDateRange.end) {
      setShowDatePicker(false);
      onChartPeriodChange('time');
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <Box sx={{ mb: 2 }}>
      {/* Выбор категории */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          Показать в категории:
        </Typography>
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <Select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            sx={{
              height: 30,
              bgcolor: '#fff',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.grey,
              },
            }}
          >
            <MenuItem value="Молочная продукция">Молочная продукция</MenuItem>
            <MenuItem value="Овощи и фрукты">Овощи и фрукты</MenuItem>
            <MenuItem value="Напитки">Напитки</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Фильтр по дате */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <FilterIcon sx={{ color: 'primary.main', fontSize: 16 }} />
          <Typography variant="body2" sx={{ color: 'text.primary' }}>
            Выбрать диапазон
          </Typography>
        </Box>

        <ButtonGroup 
          variant="outlined" 
          size={isMobile ? "small" : "medium"}
          sx={{ 
            flexWrap: 'wrap',
            gap: 0.5,
            mb: 1,
            '& .MuiButtonGroup-grouped': {
              borderColor: theme.palette.grey,
              color: theme.palette.grey,
              '&:hover': {
                borderColor: 'primary.main',
                color: 'primary.main',
                bgcolor: 'transparent',
              },
            },
          }}
        >
          {periodButtons.map((btn) => (
            <Button
              key={btn.id}
              onClick={() => handlePeriodClick(btn.id)}
              variant={chartPeriod === btn.id ? 'contained' : 'outlined'}
              sx={{
                bgcolor: chartPeriod === btn.id ? 'primary.light' : 'transparent',
                color: chartPeriod === btn.id ? 'primary.main' : 'grey',
                borderColor: chartPeriod === btn.id ? 'primary.main' : 'grey',
                '&:hover': {
                  bgcolor: chartPeriod === btn.id ? 'primary.light' : 'transparent',
                },
              }}
            >
              {btn.label}
            </Button>
          ))}
          <Button
            onClick={() => handlePeriodClick('time')}
            variant={chartPeriod === 'time' ? 'contained' : 'outlined'}
            endIcon={<DateRangeIcon />}
            sx={{
              bgcolor: chartPeriod === 'time' ? 'primary.light' : 'transparent',
              color: chartPeriod === 'time' ? 'primary.main' : 'grey',
              borderColor: chartPeriod === 'time' ? 'primary.main' : 'grey',
            }}
          >
            Задать интервал
          </Button>
        </ButtonGroup>

        {/* Календарь */}
        {showDatePicker && (
          <Box 
            sx={{ 
              p: 2,
              bgcolor: 'background.paper',
              borderRadius: 1,
              border: 1,
              borderColor: 'divider',
              mb: 2
            }}
          >
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 500 }}>
              Выберите интервал
            </Typography>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2}
              alignItems="center"
            >
              <TextField
                label="С"
                type="date"
                size="small"
                value={customDateRange.start || ''}
                onChange={(e) => onCustomDateRangeChange({ 
                  ...customDateRange, 
                  start: e.target.value 
                })}
                InputLabelProps={{ shrink: true }}
                sx={{ minWidth: 150 }}
              />
              <TextField
                label="По"
                type="date"
                size="small"
                value={customDateRange.end || ''}
                onChange={(e) => onCustomDateRangeChange({ 
                  ...customDateRange, 
                  end: e.target.value 
                })}
                InputLabelProps={{ shrink: true }}
                sx={{ minWidth: 150 }}
              />
              <Button 
                variant="contained" 
                onClick={handleApplyDate}
                size="small"
              >
                Применить
              </Button>
              <Button 
                variant="outlined" 
                onClick={() => setShowDatePicker(false)}
                size="small"
              >
                Отмена
              </Button>
            </Stack>
          </Box>
        )}

        {/* Мета-информация об интервале */}
        {chartPeriod === 'time' && customDateRange.start && customDateRange.end && (
          <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
            Интервал {formatDate(customDateRange.start)} - {formatDate(customDateRange.end)}
          </Typography>
        )}
      </Box>

      {/* Кнопка Показать */}
      <Button 
        variant="contained" 
        onClick={onShow}
        fullWidth={isMobile}
        sx={{ 
          maxWidth: 340,
          height: 40
        }}
      >
        Показать
      </Button>
    </Box>
  );
};

export default FilterPanel;