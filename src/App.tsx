import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public pages
import HomePage from './public/pages/HomePage';
import AboutPage from './public/pages/AboutPage';
import ContactPage from './public/pages/ContactPage';
import PrivacyPage from './public/pages/PrivacyPage';
import TermsPage from './public/pages/TermsPage';

// Admin components
const AdminLayout = lazy(() => import('./admin/AdminLayout'));
const DashboardPage = lazy(() => import('./admin/components/DashboardPage'));
const ProductsPage = lazy(() => import('./admin/components/ProductsPage'));
const OrdersPage = lazy(() => import('./admin/components/OrdersPage'));
const UsersPage = lazy(() => import('./admin/components/UsersPage'));
const BlogPage = lazy(() => import('./admin/components/BlogPage'));
const MarketingPage = lazy(() => import('./admin/components/MarketingPage'));
const SettingsPage = lazy(() => import('./admin/components/SettingsPage'));
const SiteSettingsPage = lazy(() => import('./admin/components/SiteSettingsPage'));
const SmtpPage = lazy(() => import('./admin/components/SmtpPage'));
const LogsPage = lazy(() => import('./admin/components/LogsPage'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <AdminLayout>
              <DashboardPage />
            </AdminLayout>
          } />
          <Route path="/admin/dashboard" element={
            <AdminLayout>
              <DashboardPage />
            </AdminLayout>
          } />
          <Route path="/admin/products" element={
            <AdminLayout>
              <ProductsPage />
            </AdminLayout>
          } />
          <Route path="/admin/orders" element={
            <AdminLayout>
              <OrdersPage />
            </AdminLayout>
          } />
          <Route path="/admin/users" element={
            <AdminLayout>
              <UsersPage />
            </AdminLayout>
          } />
          <Route path="/admin/blog" element={
            <AdminLayout>
              <BlogPage />
            </AdminLayout>
          } />
          <Route path="/admin/marketing" element={
            <AdminLayout>
              <MarketingPage />
            </AdminLayout>
          } />
          <Route path="/admin/settings" element={
            <AdminLayout>
              <SettingsPage />
            </AdminLayout>
          } />
          <Route path="/admin/site-settings" element={
            <AdminLayout>
              <SiteSettingsPage />
            </AdminLayout>
          } />
          <Route path="/admin/smtp" element={
            <AdminLayout>
              <SmtpPage />
            </AdminLayout>
          } />
          <Route path="/admin/logs" element={
            <AdminLayout>
              <LogsPage />
            </AdminLayout>
          } />
          
          {/* Catch-all route for admin pages */}
          <Route path="/admin/*" element={
            <AdminLayout>
              <DashboardPage />
            </AdminLayout>
          } />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;