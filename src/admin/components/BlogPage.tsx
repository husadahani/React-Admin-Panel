import React from 'react';
import { Edit3, Calendar, Eye, MessageCircle, Search, Plus, Edit, Trash2 } from 'lucide-react';

const BlogPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'Tips dan Trik Pengembangan Web Modern',
      author: 'Admin User',
      date: '2023-06-15',
      views: 1245,
      comments: 23,
      status: 'Publik'
    },
    {
      id: 2,
      title: 'Optimasi Performa Aplikasi React',
      author: 'Admin User',
      date: '2023-06-10',
      views: 987,
      comments: 12,
      status: 'Publik'
    },
    {
      id: 3,
      title: 'Membangun API dengan Node.js',
      author: 'Admin User',
      date: '2023-06-05',
      views: 765,
      comments: 8,
      status: 'Draft'
    }
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
            Manajemen Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Kelola artikel dan konten blog</p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 w-full sm:w-auto">
          <Plus className="w-4 h-4" />
          <span>Tulis Artikel Baru</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Cari artikel..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <select className="px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Semua Status</option>
              <option>Publik</option>
              <option>Draft</option>
            </select>
            <select className="px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Semua Kategori</option>
              <option>Tutorial</option>
              <option>Berita</option>
            </select>
          </div>
        </div>
      </div>

      {/* Blog Posts Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Judul
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Penulis
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Views
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Komentar
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                        <Edit3 className="w-5 h-5 text-primary-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {post.title}
                      </span>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {post.author}
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{post.date}</span>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span>{post.views}</span>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4 text-gray-400" />
                      <span>{post.comments}</span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs sm:text-sm font-medium rounded-full ${
                        post.status === 'Publik'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {post.status}
                    </span>
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

export default BlogPage;