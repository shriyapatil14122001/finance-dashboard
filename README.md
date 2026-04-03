📊 Finance Dashboard
📝 Overview
The Finance Dashboard is a frontend web application designed to help users track and understand their financial activity.
It provides a clear summary of income, expenses, and balance, along with interactive charts and a transaction management system.
This project focuses on UI design, state management, and data visualization without relying on a backend.
🎯 Approach
The application is built using a simple and modular frontend approach:
HTML is used to structure the dashboard (cards, charts, table, form)
CSS is used for layout, responsiveness, and styling
JavaScript handles:
Application state (transactions, role, filters)
DOM updates
Event handling
📌 State Management
Transactions are stored in a JavaScript array
Data is persisted using localStorage
UI updates dynamically whenever data changes
📊 Data Flow
User adds a transaction
Data is stored in array + localStorage
Dashboard updates:
Summary cards
Transaction table
Charts
🚀 Features
📌 1. Dashboard Overview
Displays:
Total Balance
Total Income
Total Expenses
Updates dynamically based on transactions
📊 2. Data Visualization
Line Chart
Shows transaction trends over time
Pie Chart
Shows income vs expense distribution
Implemented using Chart.js
📋 3. Transactions Section
Displays list of transactions with:
Date
Amount
Category
Type (Income/Expense)
Functionalities:
Add transaction
Search/filter by category
🔐 4. Role-Based UI
Viewer
Can only view data
Admin
Can add transactions
Role switching is handled using a dropdown (frontend simulation)
🌙 5. Dark Mode
Toggle between light and dark themes for better user experience
💾 6. Data Persistence
Uses localStorage
Data remains available after page refresh
📱 7. Responsive Design
Works across different screen sizes
Uses flexible layouts (Grid/Flexbox)
🛠️ Technologies Used
HTML
CSS
JavaScript
Chart.js (via CDN)
📂 Project Structure
Bash
finance-dashboard/
│── index.html
│── style.css
│── script.js
⚙️ Setup Instructions
🔹 Option 1: Run Locally
Download or clone the repository
Bash
git clone https://github.com/your-username/finance-dashboard.git
Open the project folder
Open index.html in your browser
🔹 Option 2: Using VS Code
Open folder in VS Code
Install Live Server extension
Right-click index.html → Click "Open with Live Server"
🧪 How to Use
Select role as Admin
Add transaction by filling:
Date
Amount
Category
Type
Click Add
👉 Dashboard updates instantly:
Cards
Table
Charts
💡 Key Highlights
Clean and intuitive UI
Real-time updates
Chart-based insights
Local storage persistence
Simple and scalable structure
🎯 Future Enhancements
Edit and delete transactions
Backend integration (API + database)
Authentication system
Export data (CSV/JSON)
Advanced filters and analytics
👩‍💻 Author
Shriya Patil
Computer Science Engineer
Skills: Java, SQL, HTML, CSS, JavaScript
📌 Conclusion
This project demonstrates the ability to design and build a functional frontend dashboard with proper state handling, user interaction, and data visualization, making it suitable for internship-level development roles.
