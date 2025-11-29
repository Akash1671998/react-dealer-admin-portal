# 🚀 React Dealer Admin Portal

A complete **Dealer Management Dashboard** built using **React + Material UI**, featuring a responsive admin layout, dealer CRUD functionalities, reusable modal components, validation-ready forms, and optimized state management via the Context API.

🌐 **Live Demo:**  
👉 https://effervescent-jelly-e5e194.netlify.app/

---

## 📌 Features

### 🖥 Dashboard
- Responsive Admin UI (Sidebar + Header)
- Dealer listing with:
  - Sorting by Dealer Name
  - Status Filter
  - Search by Name / Location
  - Pagination (10 per page)

### ➕ Add / Edit Dealer
- Dealer Profile Form:
  - Dealer Name  
  - Address  
  - Email  
  - Phone  
  - Operating Hours  
  - Status (Active / Inactive)
- Validation using **React Hook Form + Yup**
- Inline modal-based editing

### 🗂 Reusable Modal Component
- View Dealer (read-only)
- Edit Dealer (with validation)
- Designed for reuse across the entire app

### 🧠 State Management
- Global Dealer State using **React Context API**
- Reducer-based updates (ADD, EDIT, UPDATE)

---

## 🛠 Tech Stack

- **React (CRA)**
- **Material UI (MUI 5)**
- **React Router**
- **Context API**
- **React Hook Form**
- **Yup Validation**
- **Custom Hooks (useSearch, usePagination)**

---

## 📸 Screenshots

> Add screenshots here or keep sample placeholders:

| Dashboard | Add Dealer Form |
|----------|------------------|
| ![Dashboard](./screenshots/dashboard.png) | ![Form](./screenshots/form.png) |

| Modal View | Sidebar + Header |
|------------|------------------|
| ![Modal](./screenshots/modal.png) | ![Layout](./screenshots/layout.png) |

> Create a `screenshots/` folder and upload images.

---

## ▶️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/Akash1671998/react-dealer-admin-portal.git

cd react-dealer-admin-portal

# Install dependencies
npm install

# Start development server
npm start
```

---

## 🔧 Build for Production

```bash
npm run build
```

---

## 📁 Folder Structure

```
src/
 ├── components/
 │   ├── dealers/
 │   ├── layout/
 │   └── ui/
 ├── contexts/
 ├── hooks/
 ├── pages/
 ├── utils/
 ├── App.jsx
 └── index.js
```

---

## 🧪 Features Implemented as per Assignment

✔ Navigation sidebar + top header  
✔ Dealer list with columns  
✔ Sorting by dealer name  
✔ Status filtering  
✔ Search (name/location)  
✔ Pagination  
✔ Dealer form with validation  
✔ Preview & editing via modal  
✔ Reusable modal component  
✔ Fully responsive design  

---

## 📨 Submission Details

Submitted for the **Front End Developer (React JS)** assignment.  
Deployment + Repository provided as required.

---

## 👨‍💻 Author

**Akash Vishwakarma**  
Email: undefinetech@gmail.com
Contact: 8810393028
Front-End Developer (React JS)  
GitHub: https://github.com/Akash1671998  
LinkedIn: http://linkedin.com/in/akash-vishwakarma-831335221
