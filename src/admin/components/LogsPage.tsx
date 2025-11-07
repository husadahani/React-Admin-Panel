import React, { useState } from 'react';
import { Search, Filter, Download, Trash2, Eye, Calendar, Clock, AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react';

const LogsPage: React.FC = () => {
  const [logType, setLogType] = useState('all');
  const [dateRange, setDateRange] = useState('today');

  const logs = [
    {
      id: 1,
      timestamp: '2023-06-15 14:30:25',
      type: 'info',
      message: 'User login successful: admin@example.com',
      ip: '192.168.1.100'
    },
    {
      id: 2,
      timestamp: '2023-06-15 14:25:10',
      type: 'warning',
      message: 'Failed login attempt: invalid credentials',
      ip: '192.168.1.50'
    },
    {
      id: 3,
      timestamp: '2023-06-15 14:15:05',
      type: 'error',
      message: 'Database connection failed',
      ip: '127.0.0.1'
    },
    {
      id: 4,
      timestamp: '2023-06-15 14:10:30',
      type: 'info',
      message: 'Product updated successfully: WordPress Theme',
      ip: '192.168.1.100'
    },
    {
      id: 5,
      timestamp: '2023-06-15 14:05:15',
      type: 'success',
      message: 'Backup completed successfully',
      ip: '127.0.0.1'
    }
  ];

  const getLogIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const getLogColor = (type: string) => {
    switch (type) {
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
          System Logs
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Lihat dan kelola log sistem</p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Cari dalam log..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select 
                value={logType}
                onChange={(e) => setLogType(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">Semua Jenis</option>
                <option value="info">Info</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="success">Success</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <select 
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="today">Hari Ini</option>
                <option value="week">7 Hari Terakhir</option>
                <option value="month">30 Hari Terakhir</option>
                <option value="all">Semua Waktu</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Ekspor</span>
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center space-x-2">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Waktu
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Jenis
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Pesan
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  IP Address
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900 dark:text-white">{log.timestamp}</span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {getLogIcon(log.type)}
                      <span className="text-sm text-gray-900 dark:text-white capitalize">{log.type}</span>
                    </div>
                  </td>
                  <td className={`hidden md:table-cell px-4 sm:px-6 py-4 ${getLogColor(log.type)} border rounded-lg text-sm`}>
                    <span>{log.message}</span>
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">{log.ip}</td>
                  <td className="px-4 sm:px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 p-1">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LogsPage;