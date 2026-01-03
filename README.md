# 🍽️ Mini Restaurant Management App (Role Based)

## 📌 Project Overview

This is a role-based React application that allows Admins to manage restaurant data and Customers to view restaurants.
The app uses localStorage for data persistence and implements authentication, protected routes, CRUD operations, search, and filters using core React concepts.


## 🔐 Login Credentials
### Role	Email	Password
Admin	admin@gmail.com
	admin1234
	
Customer	customer@gmail.com
	customer1234
	

## 🚀 Features
Authentication & Authorization

Role-based login (Admin / Customer)

Protected routes using React Router

Unauthorized users cannot access dashboards


## Admin Features

Add restaurant using sidebar form

Auto-generated restaurant ID

Update restaurant details

Delete restaurant with confirmation

All data stored in localStorage (evalData key)


## Customer Features

View all restaurants

No add / update / delete access

Always sees latest data from localStorage


## Common Features

Restaurant cards with image, name, address, type, parking

Search by restaurant name or address (partial search)

Filter by restaurant type

Filter by parking availability

Search input auto-focus using useRef


## 🧠 React Concepts Used

useState

useEffect

useRef

Context API

React Router

Protected Routes

Conditional Rendering

Local Storage

Reusable Components


## 🗂️ Folder Structure

Module3Eval/

│

├── src/

│   ├── components/

│   │   ├── Navbar.jsx

│   │   ├── ProtectedRoute.jsx

│   │   └── RestaurantCard.jsx

│   │

│   ├── context/

│   │   └── AuthContext.jsx

│   │

│   ├── pages/

│   │   ├── Login.jsx

│   │   ├── AdminDashboard.jsx

│   │   ├── CustomerDashboard.jsx

│   │   └── UpdateRestaurant.jsx

│   │

│   ├── utils/

│   │   └── localStorage.js

│   │

│   ├── App.jsx

│   ├── main.jsx

│   └── index.css

│

├── public/

│

├── README.md

├── package.json

└── vite.config.js


## 🧪 Edge Case Handling

Empty form submission is prevented

Confirmation popup before update & delete

Alerts shown after add, update, delete

Form clears after successful addition


## ⚙️ How to Run the Project
npm install
npm run dev


## 🧾 Storage Details

All restaurant data is stored in localStorage

Key used: evalData

UI always renders data from localStorage


## 📝 Evaluation Notes

Minimum styling applied (logic focused)

No external state management libraries used

No backend / API used

All instructions strictly followed
