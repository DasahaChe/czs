import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxHeight: 340,
  overflowY: 'auto',
  position: 'relative',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 0,
  '& .MuiTableHead-root': {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    backgroundColor: '#fff',
    boxShadow: '0 2px 2px -1px rgba(0,0,0,0.1)',
  },
  '&::-webkit-scrollbar': {
    width: 8,
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#c1c1c1',
    borderRadius: 4,
    '&:hover': {
      background: '#a8a8a8',
    },
  },
}));

const statusColors = {
  "В процессе": "#0471ff",
  "На согласовании": "#98f040",
  "Ожидается": "#686868",
  "Завершено": "#0a837d",
  "Просрочено": "#e03456"
};

const SupplierLink = styled('span')(({ theme, active }) => ({
  cursor: 'pointer',
  color: theme.palette.primary.main,
  textDecoration: 'underline',
  textDecorationStyle: 'dotted',
  padding: '2px 4px',
  borderRadius: 4,
  backgroundColor: active ? theme.palette.progressSoft : 'transparent',
  transition: 'all 0.2s',
  '&:hover': {
    textDecorationStyle: 'solid',
    backgroundColor: theme.palette.lightBlue,
  },
}));

const TableBlock = ({ filteredPurchases, onSupplierFilter, currentSupplierFilter }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ru-RU').format(amount);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortedPurchases = () => {
    if (!sortField) return filteredPurchases;

    return [...filteredPurchases].sort((a, b) => {
      let aValue, bValue;

      switch (sortField) {
        case 'status':
          const order = { "В процессе": 1, "На согласовании": 2, "Ожидается": 3, "Завершено": 4, "Просрочено": 5 };
          aValue = order[a.status] || 99;
          bValue = order[b.status] || 99;
          break;
        case 'amount':
          aValue = parseInt(a.amount);
          bValue = parseInt(b.amount);
          break;
        case 'deliveryDate':
          const parseDate = (dateStr) => {
            const [day, month, year] = dateStr.split('.');
            return new Date(year, month - 1, day).getTime();
          };
          aValue = parseDate(a.deliveryDate);
          bValue = parseDate(b.deliveryDate);
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const sortedPurchases = getSortedPurchases();

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h3">
          Текущие закупки ({filteredPurchases.length})
        </Typography>
        {currentSupplierFilter && (
          <Button 
            variant="outlined" 
            size="small"
            onClick={() => onSupplierFilter(null)}
            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
          >
            Сбросить фильтр ({currentSupplierFilter})
          </Button>
        )}
      </Box>

      {!currentSupplierFilter && (
        <Typography variant="caption" sx={{ display: 'block', mb: 2, color: 'text.secondary' }}>
          Кликните на имя поставщика для фильтрации
        </Typography>
      )}

      <StyledTableContainer component={Paper}>
        <Table size={isMobile ? "small" : "medium"} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Позиция</TableCell>
              <TableCell>Поставщик</TableCell>
              <TableCell 
                onClick={() => handleSort('status')}
                sx={{ cursor: 'pointer' }}
              >
                Статус {sortField === 'status' && (sortDirection === 'asc' ? '↑' : '↓')}
              </TableCell>
              <TableCell 
                onClick={() => handleSort('amount')}
                sx={{ cursor: 'pointer' }}
              >
                Сумма {sortField === 'amount' && (sortDirection === 'asc' ? '↑' : '↓')}
              </TableCell>
              <TableCell 
                onClick={() => handleSort('deliveryDate')}
                sx={{ cursor: 'pointer' }}
              >
                Срок поставки {sortField === 'deliveryDate' && (sortDirection === 'asc' ? '↑' : '↓')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedPurchases.map((purchase) => (
              <TableRow key={purchase.id}>
                <TableCell>{purchase.product}</TableCell>
                <TableCell>
                  <SupplierLink
                    active={currentSupplierFilter === purchase.supplier}
                    onClick={() => onSupplierFilter(purchase.supplier)}
                  >
                    {purchase.supplier}
                  </SupplierLink>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: 0.5,
                        bgcolor: statusColors[purchase.status] || '#ccc',
                        flexShrink: 0
                      }}
                    />
                    <Typography variant="body2">
                      {purchase.status}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(purchase.amount)} ₽
                </TableCell>
                <TableCell>{purchase.deliveryDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Box>
  );
};

export default TableBlock;