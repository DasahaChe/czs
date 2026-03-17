# React Sale Tracker - Project Context

## Project Overview

This is a **React-based procurement dashboard** application for tracking purchases and supplier management. The application provides a comprehensive interface for procurement officers to monitor purchase requests, track delivery statuses, and analyze spending across different product categories.

**Key Features:**
- Dashboard with procurement analytics and visualizations
- Interactive charts (line charts for income growth, pie charts for category distribution)
- Filterable purchase table with supplier filtering
- Category-based filtering (Dairy, Vegetables/Fruits, Beverages)
- Status tracking (In Process, On Approval, Expected, Completed, Overdue)
- Responsive design with mobile/tablet support

## Technology Stack

- **Frontend Framework:** React 18+
- **UI Library:** Material-UI (MUI) v5
- **Styling:** MUI Theme with custom styling, CSS-in-JS
- **Icons:** Material-UI Icons
- **Charts:** Custom Canvas-based charts (no external charting library)
- **Language:** JavaScript (JSX)

## Project Structure

```
react-sale/
└── src/
    └── components/
        ├── App.jsx              # Main application component
        ├── index.js             # Application entry point
        ├── Header.jsx           # Top navigation bar with search, notifications, user profile
        ├── Footer.jsx           # Footer with contact info and social links
        ├── Sidebar.jsx          # Navigation sidebar with menu items
        ├── Banners.jsx          # Promotional banners (desktop only)
        ├── Content/
        │   ├── Dashboard.jsx    # Main dashboard container
        │   ├── ChartBlock.jsx   # Chart wrapper component
        │   ├── StatsCards.jsx   # Statistics summary cards
        │   ├── TableBlock.jsx   # Purchase data table
        │   └── FilterPanel.jsx  # Filter controls for charts
        ├── theme/
        │   └── index.js         # MUI theme configuration with custom colors
        ├── utils/
        │   ├── data.js          # Mock procurement data (120+ records)
        │   ├── dataUtils.js     # Data processing utilities
        │   ├── chartUtils.js    # Chart rendering functions (Canvas API)
        │   └── hooks/
        │       └── useWindowSize.js  # Custom hook for window size tracking
```

## Key Components

### App.jsx
Main application component that manages global state:
- `selectedCategory` - Current product category filter
- `supplierFilter` - Selected supplier for filtering
- `chartPeriod` - Time period for charts (day/week/month/quarter/year/custom)
- `customDateRange` - Custom date range selection

### Dashboard
Main content area containing:
- Line chart for income growth tracking
- Statistics cards (Active, Pending, Attention Required)
- Pie chart for category distribution
- Action buttons
- Purchase table

### Theme
Custom MUI theme with:
- Primary color: Blue (#0B63A8)
- Custom fonts: TT Fors, Inter
- Custom component styling (buttons, tables, chips, badges)
- Responsive breakpoints for mobile/tablet/desktop

### Data
Mock data in `data.js` includes 120+ purchase records with:
- Product categories: Dairy, Vegetables/Fruits, Beverages
- Suppliers: Коровкин, Дом молока, Сыркин, Овощевод, etc.
- Statuses: В процессе, На согласовании, Ожидается, Завершено, Просрочено
- Date range: 2024-2026

## Chart Utilities

The `chartUtils.js` provides custom Canvas-based chart rendering:
- `renderLineChart()` - Line chart with multiple status lines
- `renderPieChart()` - Pie chart for category distribution
- Helper functions for date parsing, interval generation, currency formatting

## Building and Running

**Note:** No `package.json` was found in the project directory. The following are typical commands for a React project:

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests (if configured)
npm test
```

## Development Conventions

### Code Style
- Functional components with hooks (useState, useEffect, useMediaQuery)
- MUI sx prop for inline styling
- Russian language for UI text and data
- Custom fonts (TT Fors) with fallbacks to Inter, Roboto, Arial

### Component Patterns
- Props destructuring at component level
- Consistent naming: `on[Event]` for callback props
- Responsive design using MUI breakpoints (`xs`, `sm`, `md`, `lg`)
- Custom hooks for reusable logic (`useWindowSize`)

### Data Flow
- Top-down state management from App.jsx
- Filter functions passed as props to child components
- Mock data imported from `utils/data.js`

## UI/UX Features

- **Responsive Layout:** Grid-based layout adapting to mobile/tablet/desktop
- **Interactive Table:** Sortable columns, clickable supplier names for filtering
- **Visual Status Indicators:** Color-coded status badges
- **Animations:** Fade-in and slide-up animations for content
- **Custom Scrollbars:** Styled scrollbars for table container

## Known Considerations

1. **Typo in code:** `mouns` instead of `months` in chartUtils.js (period selector)
2. **Invalid dates:** Some delivery dates use invalid day values (e.g., 30.02.2026, 31.02.2026)
3. **No external routing:** Navigation links use `href` attributes without React Router
4. **Canvas charts:** Custom implementation may need maintenance for complex scenarios
