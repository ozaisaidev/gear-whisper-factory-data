
# Motor Analytics Dashboard - AI Documentation

This document provides a high-level overview of the Motor Analytics Dashboard application structure, helping AI assistants understand the codebase organization and functionality.

## Project Overview

This is a modern React-based dashboard for motor data analysis and management in factory settings. The application allows users to:
- Enter and manage motor and gear assembly data
- Upload and analyze audio recordings for motors at different RPM levels
- View and export collected data
- Visualize analytics related to motor performance

## Key Files and Components

### Core Structure

- **src/App.tsx**: Main application entry point that sets up routing and global providers
- **src/components/AppLayout.tsx**: Layout wrapper with sidebar navigation used across all pages
- **src/pages/**: Directory containing all main page components

### UI Components

- **src/components/Dashboard.tsx**: Main dashboard with overview cards and data summary
- **src/components/Header.tsx**: Application header with navigation controls
- **src/components/DataEntryForm.tsx**: Form for entering motor data and audio recordings
- **src/components/DataTable.tsx**: Table for displaying motor data records with filtering/sorting

### Pages

- **src/pages/Index.tsx**: Homepage/dashboard landing page
- **src/pages/DataEntry.tsx**: Page for the data entry form
- **src/pages/ViewData.tsx**: Page displaying all motor data records with edit/delete actions
- **src/pages/ExportData.tsx**: Data export functionality page
- **src/pages/AudioAnalysis.tsx**: Audio analysis visualization page
- **src/pages/Login.tsx**: User authentication page

### UI Framework and Styling

- The application uses Tailwind CSS for styling with custom design tokens
- shadcn/ui components provide the design system foundation
- Custom animation effects using Framer Motion
- Responsive design that works across device sizes

## Key Functionalities

- **Authentication**: Basic login/logout functionality
- **Data Management**: CRUD operations for motor data records
- **Audio Analysis**: Upload and visualization of audio files for motors
- **Data Export**: Export functionality for collected data
- **Analytics**: Basic data visualization and analysis tools

## Implementation Notes

- React Router is used for client-side routing
- React Query manages server state and data fetching
- Framer Motion provides animations and transitions
- Form state is managed with controlled components
- Mock data is currently used in place of a backend API

This documentation should help AI assistants understand the project structure and make appropriate changes while preserving the existing functionality and design patterns.
