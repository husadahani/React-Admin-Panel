import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, Package, ShoppingCart, Users, Edit3, Mail, Activity,
  Settings, Globe, Server, Menu, X, Search, Bell, Zap
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Toggle dark mode based on system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleDarkMode = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    if (mediaQuery.matches) {
      document.documentElement.classList.add('dark');
    }

    mediaQuery.addEventListener('change', handleDarkMode);

    return () => {
      mediaQuery.removeEventListener('change', handleDarkMode);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getActivePageId = () => {
    const path = location.pathname;
    if (path === '/admin' || path === '/admin/dashboard') return 'dashboard';
    return path.split('/').pop() || 'dashboard';
  };

  const currentPage = getActivePageId();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/admin/dashboard' },
    { id: 'products', label: 'Produk', icon: Package, path: '/admin/products' },
    { id: 'orders', label: 'Order', icon: ShoppingCart, path: '/admin/orders' },
    { id: 'users', label: 'User', icon: Users, path: '/admin/users' },
    { id: 'blog', label: 'Blog', icon: Edit3, path: '/admin/blog' },
    { id: 'marketing', label: 'Marketing', icon: Mail, path: '/admin/marketing' },
    { id: 'logs', label: 'Logs', icon: Activity, path: '/admin/logs' },
  ];

  const settingItems = [
    { id: 'settings', label: 'Setting', icon: Settings, path: '/admin/settings' },
    { id: 'site-settings', label: 'Site Setting', icon: Globe, path: '/admin/site-settings' },
    { id: 'smtp', label: 'SMTP', icon: Server, path: '/admin/smtp' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 font-sans">
      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">AdminPro</span>
          </div>
          <button
            id="closeSidebar"
            className="lg:hidden text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            onClick={toggleSidebar}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-4 py-6 sidebar-scrollbar overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Pengaturan
            </p>
            <div className="space-y-2">
              {settingItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-0 flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex items-center space-x-4 flex-1">
              <button
                id="openSidebar"
                className="lg:hidden text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                onClick={toggleSidebar}
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="hidden sm:flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-2.5 w-full max-w-md">
                <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Cari..."
                  className="bg-transparent border-none outline-none text-sm text-gray-700 dark:text-gray-300 flex-1 text-base"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="sm:hidden relative p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <Search className="w-5 h-5" />
              </button>
              <button className="relative p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">A</span>
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Admin User
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;