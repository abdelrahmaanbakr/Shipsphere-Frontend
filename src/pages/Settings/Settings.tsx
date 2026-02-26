import { Bell, Lock, CreditCard, Globe, Shield } from 'lucide-react';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Breadcrumb } from '../../components/Breadcrumb';

export default function Settings() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto
                    bg-white dark:bg-slate-800
                    text-gray-900 dark:text-white
                    p-6 rounded-xl transition-colors duration-300">

      <Breadcrumb items={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Settings' }
      ]} />

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold dark:text-white">
          Settings
        </h1>
        <p className="text-gray-600 dark:text-slate-400 mt-1">
          Manage your account preferences and security
        </p>
      </div>

      {/* Notifications */}
      <Card className="dark:bg-slate-800 dark:border-slate-600">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
            <Bell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold dark:text-white">
              Notifications
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-400">
              Configure how you receive updates
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {['Shipment updates', 'Payment confirmations', 'Delivery alerts', 'Promotional offers'].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between p-4 
                         bg-gray-50 dark:bg-slate-700
                         rounded-lg">
              <span className="dark:text-white">{item}</span>
              <input type="checkbox" className="toggle" defaultChecked={item !== 'Promotional offers'} />
            </div>
          ))}
        </div>
      </Card>

      {/* Security */}
      <Card className="dark:bg-slate-800 dark:border-slate-600">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
            <Lock className="w-5 h-5 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold dark:text-white">
              Security
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-400">
              Update your password and security settings
            </p>
          </div>
        </div>

       
        <div className="
            space-y-4
            dark:[&_label]:text-slate-400
            dark:[&_input]:text-black
            dark:[&_input]:placeholder:text-gray-500
        ">

          <Input type="password" label="Current Password" placeholder="Enter current password" />
          <Input type="password" label="New Password" placeholder="Enter new password" />
          <Input type="password" label="Confirm New Password" placeholder="Confirm new password" />

          <div className="flex items-center justify-between p-4 
                          bg-gray-50 dark:bg-slate-700 
                          rounded-lg mt-6">
            <div>
              <p className="font-medium dark:text-white">
                Two-Factor Authentication
              </p>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                Add an extra layer of security
              </p>
            </div>
            <Button variant="secondary" size="sm">Enable</Button>
          </div>

        </div>
      </Card>

      {/* Payment Methods */}
      <Card className="dark:bg-slate-800 dark:border-slate-600">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold dark:text-white">
              Payment Methods
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-400">
              Manage your saved payment methods
            </p>
          </div>
          <Button variant="secondary" size="sm">Add New</Button>
        </div>

        <div className="space-y-3">
          {[
            { name: "Visa •••• 4242", expiry: "Expires 12/25" },
            { name: "Mastercard •••• 8888", expiry: "Expires 08/26" }
          ].map((card, i) => (
            <div key={i}
              className="flex items-center justify-between p-4 
                         bg-gray-50 dark:bg-slate-700
                         rounded-lg">
              <div>
                <p className="font-medium dark:text-white">
                  {card.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  {card.expiry}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm" className="text-red-600 dark:text-red-400">
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Preferences */}
      <Card className="dark:bg-slate-800 dark:border-slate-600">
        <div className="
            space-y-4
            dark:[&_label]:text-slate-400
            dark:[&_select]:text-black
        ">

          <Select label="Language" options={[
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Spanish' },
            { value: 'fr', label: 'French' },
          ]} defaultValue="en" />

          <Select label="Currency" options={[
            { value: 'usd', label: 'USD ($)' },
            { value: 'eur', label: 'EUR (€)' },
            { value: 'gbp', label: 'GBP (£)' },
          ]} defaultValue="usd" />

          <Select label="Timezone" options={[
            { value: 'est', label: 'Eastern Time (ET)' },
            { value: 'cst', label: 'Central Time (CT)' },
            { value: 'pst', label: 'Pacific Time (PT)' },
          ]} defaultValue="est" />

        </div>
      </Card>

    </div>
  );
}