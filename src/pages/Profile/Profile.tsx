import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Breadcrumb } from '../../components/Breadcrumb';

export default function Profile() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto
                    bg-white dark:bg-slate-800
                    text-gray-900 dark:text-white
                    p-6 rounded-xl transition-colors duration-300">

      <Breadcrumb items={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Profile' }
      ]} />

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold dark:text-white">
          Profile Settings
        </h1>
        <p className="text-gray-600 dark:text-slate-400 mt-1">
          Manage your account information
        </p>
      </div>

      {/* Profile Picture */}
      <Card className="dark:bg-slate-800 dark:border-slate-600">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              MI
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 
                               bg-white dark:bg-slate-700
                               rounded-full border-2 border-gray-200 dark:border-slate-600
                               flex items-center justify-center 
                               hover:bg-gray-50 dark:hover:bg-slate-600 
                               transition-colors">
              <Camera className="w-4 h-4 text-gray-600 dark:text-slate-400" />
            </button>
          </div>
          <div>
            <h3 className="text-xl font-semibold dark:text-white">
              Mohamed Ibrahim
            </h3>
            <p className="text-gray-600 dark:text-slate-400">
              mohamed@example.com
            </p>
            <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
              Member since February 2025
            </p>
          </div>
        </div>
      </Card>

      {/* Personal Information */}
      <Card className="dark:bg-slate-800 dark:border-slate-600">
        <h3 className="text-lg font-semibold dark:text-white mb-6">
          Personal Information
        </h3>

        <div className="
            space-y-4
            dark:[&_label]:text-slate-400
            dark:[&_input]:text-black
            dark:[&_input]:placeholder:text-gray-500
        ">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              defaultValue="Mohamed"
              icon={<User className="w-5 h-5" />}
            />
            <Input
              label="Last Name"
              defaultValue="Ibrahim"
              icon={<User className="w-5 h-5" />}
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            defaultValue="mohamed@example.com"
            icon={<Mail className="w-5 h-5" />}
          />

          <Input
            label="Phone Number"
            defaultValue="+20 (10) 222-1977"
            icon={<Phone className="w-5 h-5" />}
          />
        </div>
      </Card>

      {/* Default Address */}
      <Card className="dark:bg-slate-800 dark:border-slate-600">
        <h3 className="text-lg font-semibold dark:text-white mb-6">
          Default Shipping Address
        </h3>

        <div className="
            space-y-4
            dark:[&_label]:text-slate-400
            dark:[&_input]:text-black
            dark:[&_input]:placeholder:text-gray-500
        ">
          <Input
            label="Street Address"
            defaultValue="123 Street"
            icon={<MapPin className="w-5 h-5" />}
          />

          <div className="grid grid-cols-3 gap-4">
            <Input label="City" defaultValue="Menof" />
            <Input label="State" defaultValue="Menofia" />
            <Input label="ZIP Code" defaultValue="35681" />
          </div>
        </div>
      </Card>

      {/* Preferences */}
      <Card className="dark:bg-slate-800 dark:border-slate-600">
        <h3 className="text-lg font-semibold dark:text-white mb-6">
          Preferences
        </h3>

        <div className="space-y-4">
          {[
            {
              title: "Email Notifications",
              desc: "Receive updates about your shipments",
              checked: true
            },
            {
              title: "SMS Notifications",
              desc: "Get text alerts for deliveries",
              checked: true
            },
            {
              title: "Marketing Emails",
              desc: "Receive promotional offers and discounts",
              checked: false
            }
          ].map((item, i) => (
            <div key={i}
              className="flex items-center justify-between p-4
                         bg-gray-50 dark:bg-slate-700
                         rounded-lg transition-colors">
              <div>
                <p className="font-medium dark:text-white">
                  {item.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
              <input type="checkbox" className="toggle" defaultChecked={item.checked} />
            </div>
          ))}
        </div>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button>Save Changes</Button>
        <Button variant="ghost">Cancel</Button>
      </div>

    </div>
  );
}