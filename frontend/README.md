# Zorvyn Financial Dashboard

A modern, responsive, and highly interactive financial tracking dashboard. Zorvyn provides a premium UI/UX for users to monitor their balances, visualize spending categories, track trends over time, and manage logs of financial transactions.

## 🚀 Key Features

*   **Modern Interactive UI:** Built using functional React components and styled meticulously with **Tailwind CSS v4** focusing on responsive design, dynamic hover effects, and modern aesthetics.
*   **Comprehensive Dashboard Overview:** Features summary cards and data visualizations rendering time-based balance trends and categorical spending distributions using **Recharts**.
*   **Advanced Transaction Management:** 
    *   **Filter & Search:** Filter complex transaction logs by type (Income vs. Expense) or seamlessly search by merchant and categories.
    *   **Advanced Sorting:** Sort dynamically by Date or Amount in both ascending and descending logic.
    *   **Export:** Directly export your current filtered and sorted transactions to a CSV format.
    *   **Inline Editing/Deletion:** Control records by editing details inline or deleting unneeded entries.
*   **Theming Options:** A fully fledged, integrated Light/Dark mode featuring `prefers-color-scheme` OS detection alongside manual toggle interactions, retaining persistence via Context API and LocalStorage.
*   **Fast & Performant:** Bootstrapped via **Vite** enabling blistering fast module replacements (HMR) and highly optimized build sizes running on **React 19**.

## 🛠 Technology Stack

*   **Core framework:** React 19, Vite
*   **Routing logic:** React Router v7
*   **Styling & UI Elements:** Tailwind CSS v4, Lucide React (Icons)
*   **Data Visualization:** Recharts
*   **State Management:** React Context API & LocalStorage
*   **JavaScript Linting:** ESLint v9

## 📂 Project Structure Overview

The project structure scales logically via custom components and routes:

```text
src/
├── assets/
│   └── dummyData/                   # Mockup data schemas (transactionData)
├── components/                      # Reusable modular UI
│   ├── CategorialVisualization.jsx  # Recharts Pie/Donut implementation
│   ├── InsightCard.jsx              # Reusable stat blocks for Insights
│   ├── Navbar.jsx                   # Primary application layout navigation
│   ├── SummaryCard.jsx              # Dashboard high-level metric blocks
│   ├── TimeChart.jsx                # Recharts Line/Bar temporal tracking
│   ├── TransactionCard.jsx          # Individual transaction representation
│   └── TransactionFiltering.jsx     # Complex filter & sort controllers
├── pages/                           # Page-level Routing components
│   ├── Dashboard.jsx                # Overview home panel
│   ├── FooterPage.jsx               # Application footer section 
│   ├── HomePage.jsx                 # Parent Layout framing internal routes
│   ├── Insights.jsx                 # Deep dive metrics and categorizations
│   └── Transactions.jsx             # Complete Transaction interaction module
├── App.jsx                          # Route definitions mapping
├── AppContext.jsx                   # Global Theme and State provider
└── main.jsx                         # React DOM Mount Phase
```

## ⚙️ Getting Started (Developer Setup)

### Prerequisites
Ensure you have Node.js (v18+) and your preferred package manager (npm/yarn/pnpm/bun) installed on your system.

### Installation

1.  **Clone down the application repository**.
2.  **Navigate** into the frontend directory:
    ```bash
    cd frontend
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Spin up the Vite development server:**
    ```bash
    npm run dev
    ```
5.  Access the server typically located at `http://localhost:5173`.

### Building for Production
To construct an optimized, minified bundle prepared for deployment (generates a `dist` folder):
```bash
npm run build
```
You can preview the built production payload locally by running:
```bash
npm run preview
```
