import React from 'react';
import { Mail, Users, BarChart3, Target, Calendar, Search, Edit, Trash2 } from 'lucide-react';

const MarketingPage: React.FC = () => {
  const campaigns = [
    {
      id: 1,
      name: 'Email Campaign Q2',
      type: 'Email',
      recipients: 1250,
      sent: '2023-06-15',
      status: 'Terkirim',
      openRate: '42.5%'
    },
    {
      id: 2,
      name: 'Newsletter Juni',
      type: 'Newsletter',
      recipients: 850,
      sent: '2023-06-10',
      status: 'Terkirim',
      openRate: '38.2%'
    },
    {
      id: 3,
      name: 'Promo Lebaran',
      type: 'SMS',
      recipients: 2100,
      sent: '2023-06-05',
      status: 'Scheduled',
      openRate: 'N/A'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
          Marketing Campaign
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Kelola kampanye pemasaran</p>
      </div>

      {/* Campaign Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Campaign</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">24</p>
              <p className="text-sm text-green-600 mt-1">+3 dari bulan lalu</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Email Terkirim</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">45,231</p>
              <p className="text-sm text-green-600 mt-1">+12.5% dari bulan lalu</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Open Rate Rata-rata</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">38.7%</p>
              <p className="text-sm text-green-600 mt-1">+2.3% dari bulan lalu</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Subscribers</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">12,567</p>
              <p className="text-sm text-blue-600 mt-1">+1.2% dari bulan lalu</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Cari campaign..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <select className="px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Semua Jenis</option>
              <option>Email</option>
              <option>Newsletter</option>
              <option>SMS</option>
            </select>
            <select className="px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Semua Status</option>
              <option>Terkirim</option>
              <option>Scheduled</option>
              <option>Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Marketing Campaigns Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Nama Campaign
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Jenis
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Penerima
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Open Rate
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {campaign.name}
                      </span>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {campaign.type}
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {campaign.recipients}
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{campaign.sent}</span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs sm:text-sm font-medium rounded-full ${
                        campaign.status === 'Terkirim'
                          ? 'bg-green-100 text-green-800'
                          : campaign.status === 'Scheduled'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {campaign.openRate}
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 p-1">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800 p-1">
                        <Trash2 className="w-4 h-4" />
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

export default MarketingPage;