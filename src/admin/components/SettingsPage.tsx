import React from 'react';
import { Settings, Globe, Save, Mail, Lock, User, Shield } from 'lucide-react';

const SettingsPage: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
          Pengaturan Umum
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Atur konfigurasi sistem</p>
      </div>

      {/* Settings Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/20">
                  <Settings className="w-5 h-5 mr-3" />
                  Umum
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                  <User className="w-5 h-5 mr-3" />
                  Profil
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                  <Lock className="w-5 h-5 mr-3" />
                  Keamanan
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                  <Globe className="w-5 h-5 mr-3" />
                  Situs
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                  <Mail className="w-5 h-5 mr-3" />
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                  <Shield className="w-5 h-5 mr-3" />
                  Keamanan
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Settings Content */}
        <div className="md:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Pengaturan Umum</h2>

            <div className="space-y-6">
              {/* Site Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nama Situs
                </label>
                <input
                  type="text"
                  defaultValue="AdminPro Dashboard"
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Site Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Deskripsi Situs
                </label>
                <textarea
                  rows={3}
                  defaultValue="Dashboard admin untuk mengelola konten, pengguna, dan statistik situs."
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
              </div>

              {/* Site URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  URL Situs
                </label>
                <input
                  type="url"
                  defaultValue="https://www.example.com"
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Theme */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tema Default
                </label>
                <select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>Auto (Berdasarkan Sistem)</option>
                </select>
              </div>

              {/* Timezone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Zona Waktu
                </label>
                <select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Asia/Jakarta (WIB)</option>
                  <option>UTC</option>
                  <option>Asia/Makassar (WITA)</option>
                  <option>Asia/Jayapura (WIT)</option>
                </select>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-end">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                <Save className="w-4 h-4" />
                <span>Simpan Pengaturan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;