import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { CheckCircle2, Package, Download, ArrowRight } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const courier = location.state?.courier;
  
  return (
    <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        {/* الكرت الرئيسي */}
        <Card className="text-center py-12 dark:bg-gray-900 dark:border-gray-800 transition-colors duration-300">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Payment Successful!</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Your shipment has been confirmed and will be picked up soon.</p>
          
          {/* تفاصيل الشحنة */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-8 border border-transparent dark:border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Tracking Number</p>
                <p className="font-semibold text-gray-900 dark:text-white">SH-2024-{Math.floor(Math.random() * 1000)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Courier</p>
                <p className="font-semibold text-gray-900 dark:text-white">{courier?.name || 'DHL Express'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Amount Paid</p>
                <p className="font-semibold text-gray-900 dark:text-white">${courier?.price.toFixed(2) || '45.99'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Estimated Delivery</p>
                <p className="font-semibold text-gray-900 dark:text-white">{courier?.deliveryTime || '2-3 days'}</p>
              </div>
            </div>
          </div>
          
          {/* أزرار التحكم */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={() => navigate('/tracking')}>
              <Package className="w-4 h-4 mr-2" />
              Track Shipment
            </Button>
            <Button variant="secondary" onClick={() => navigate('/dashboard')} className="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
              <ArrowRight className="w-4 h-4 mr-2" />
              Go to Dashboard
            </Button>
            <Button variant="ghost" className="dark:text-gray-400 dark:hover:text-white">
              <Download className="w-4 h-4 mr-2" />
              Download Receipt
            </Button>
          </div>
        </Card>
        
        {/* كرت "ما الخطوة القادمة" */}
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900/30">
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 dark:text-blue-100 mb-2">What's Next?</h3>
            <p className="text-sm text-gray-700 dark:text-blue-200/80">
              You'll receive an email confirmation shortly. The courier will contact you to schedule a pickup within 24 hours.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}