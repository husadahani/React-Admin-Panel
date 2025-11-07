import React from 'react';
import { Package, User, Calendar, MapPin, Search } from 'lucide-react';

const OrdersPage: React.FC = () => {
  const orders = [
    {
      id: '#ORD-001',
      customer: 'John Doe',
      date: '2023-06-15',
      amount: 'Rp 1,250,000',
      status: 'Dikirim',
      payment: 'Lunas'
    },
    {
      id: '#ORD-002',
      customer: 'Jane Smith',
      date: '2023-06-14',
      amount: 'Rp 850,000',
      status: 'Diproses',
      payment: 'Lunas'
    },
    {
      id: '#ORD-003',
      customer: 'Mike Johnson',
      date: '2023-06-13',
      amount: 'Rp 2,100,000',
      status: 'Pending',
      payment: 'Belum Bayar'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
          Manajemen Order
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Kelola pesanan pelanggan</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Cari order..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <select className="px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Semua Status</option>
              <option>Diproses</option>
              <option>Dikirim</option>
              <option>Selesai</option>
            </select>
            <select className="px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Semua Pembayaran</option>
              <option>Lunas</option>
              <option>Belum Bayar</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  ID Order
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Pelanggan
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Jumlah
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Pembayaran
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {orders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {order.id}
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {order.customer}
                      </span>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{order.date}</span>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                    {order.amount}
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs sm:text-sm font-medium rounded-full ${
                        order.status === 'Dikirim'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Diproses'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs sm:text-sm font-medium rounded-full ${
                        order.payment === 'Lunas'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {order.payment}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 p-1">
                        <Package className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 p-1">
                        <MapPin className="w-4 h-4" />
                      </button>
                    </div>
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

export default OrdersPage;