// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DealerFormPage from "./pages/DealerFormPage";
import DealerProfilePage from "./pages/DealerProfilePage";
import AppLayout from "./components/layout/AppLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="new-dealer" element={<DealerFormPage />} />
        <Route path="dealer/:id" element={<DealerProfilePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
