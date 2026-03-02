import React from 'react';
import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  Package,
  BarChart3,
  MapPin,
  Wallet,
  Settings,
  HelpCircle,
  FileText,
  User,
  Crown,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'New Shipment', href: '/shipment/new', icon: Package },
  { name: 'Tracking', href: '/tracking', icon: MapPin },
  { name: 'Shipment History', href: '/history', icon: FileText },
  { name: 'Compare Prices', href: '/compare', icon: BarChart3 },
  { name: 'Wallet', href: '/wallet', icon: Wallet },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Subscription', href: '/subscription', icon: Crown },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Help Center', href: '/help', icon: HelpCircle },
];

export function Sidebar() {
  const location = useLocation();
  
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <Package className="w-8 h-8 text-blue-600" />
        <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
          ShipFast
        </span>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== '/dashboard' && location.pathname.startsWith(item.href));
            
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
          <p className="text-sm font-medium">Upgrade to Pro</p>
          <p className="text-xs opacity-90 mt-1">Get 20% discount on all shipments</p>
          <button className="mt-3 w-full bg-white text-blue-600 rounded-md py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </aside>
  );
}