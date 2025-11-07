import React from 'react';
import { Plus, Image, Edit, Trash2 } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'WordPress Premium Theme',
      code: 'WP-001',
      price: 'Rp 299,000',
      discount: '10%',
      status: 'Aktif'
    },
    {
      id: 2,
      name: 'React Admin Template',
      code: 'RT-002',
      price: 'Rp 599,000',
      discount: 'Rp 50,000',
      status: 'Aktif'
    },
    {
      id: 3,
      name: 'E-commerce Plugin',
      code: 'EC-003',
      price: 'Rp 149,000',
      discount: '15%',
      status: 'Nonaktif'
    }
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
            Manajemen Produk
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Kelola produk dan inventori</p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 w-full sm:w-auto">
          <Plus className="w-4 h-4" />
          <span>Tambah Produk</span>
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Produk
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Harga
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Diskon
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
              {products.map((product) => (
                <tr 
                  key={product.id} 
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center sm:w-12 sm:h-12">
                        <Image className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">{product.code}</p>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {product.price}
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {product.discount}
                  </td>
                  <td className="px-6 py-4">
                    <span 
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.status === 'Aktif' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {product.status}
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

export default ProductsPage;