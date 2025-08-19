# BWMS Client - Blockchain Warehouse Management System

A modern React-based frontend for the CBU Central Stores Management System with blockchain integration.

## 🚀 Features

- **Multi-Role Dashboard System**: Role-based access for Admin, Manager, Department Staff, Warehouse Staff, and Suppliers
- **Real-time Inventory Management**: Track stock items, quantities, and locations
- **Request Workflow**: Complete request lifecycle from creation to fulfillment
- **Blockchain Integration**: Immutable audit trail for all transactions
- **Responsive UI**: Modern design using Tailwind CSS and Radix UI components
- **Type-Safe**: Built with TypeScript for enhanced developer experience

## 🏗️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling with validation
- **Recharts** - Data visualization charts
- **Lucide React** - Modern icon library

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run start
   ```

## 🎯 User Roles & Features

### 👨‍💼 Administrator
- System overview dashboard with analytics
- User management and role assignment
- System settings and configuration
- Blockchain transaction logs
- Complete system oversight

### 👨‍💼 Manager  
- Request approval workflow
- Stock overview and analytics
- Delivery oversight and tracking
- Operational dashboards

### 👨‍💻 Department Staff
- Create new stock requests
- View request history and status
- Track department inventory needs

### 📦 Warehouse Staff
- Process incoming stock deliveries
- Move stock between locations
- Update stock alerts and thresholds
- Fulfill approved requests

### 🚚 Suppliers
- Submit delivery confirmations
- Track delivery status
- Provide feedback on orders

## 📁 Project Structure

```
client/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Radix UI components
│   │   ├── auth/            # Authentication components
│   │   └── MainApp.tsx      # Main application router
│   └── main.tsx             # Application entry point
├── pages/                   # Role-specific page components
│   ├── Admin/              # Administrator pages
│   ├── Manager/            # Manager pages
│   ├── DepartmentStaff/    # Department staff pages
│   ├── Supplier/           # Supplier pages
│   └── WarehouseStaff/     # Warehouse staff pages
├── contexts/               # React context providers
├── hooks/                  # Custom React hooks
├── reducers/              # State management reducers
├── types/                 # TypeScript type definitions
└── styles/                # Global styles
```

## 🔧 Configuration

The application uses Vite configuration in `vite.config.mts` and TypeScript configuration in `tsconfig.json`.

### Environment Setup

Make sure to configure your backend API endpoints and blockchain connection settings before running the application.

## 🚦 Getting Started

1. **First-time Setup**: If no admin exists, you'll be redirected to create the first administrator account
2. **Login**: Use your employee ID and email to access the system
3. **Role-based Access**: The interface adapts based on your assigned role

## 🔗 Integration

This frontend connects to:
- Django REST API backend
- Ethereum blockchain for transaction logging
- File storage for document management

## 📱 Responsive Design

The application is fully responsive and works across:
- Desktop computers
- Tablets
- Mobile devices

## 🛠️ Development

- Uses modern React patterns with functional components and hooks
- Context API for state management
- Custom hooks for business logic
- Component composition for reusability
- TypeScript for type safety

## 📄 License

Part of the BWMS (Blockchain Warehouse Management System) project.