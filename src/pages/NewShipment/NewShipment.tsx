import React, { useState } from 'react';
import { Package, MapPin, User, Upload, ArrowRight, ArrowLeft } from 'lucide-react';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input/Input';
import { Textarea } from '../../components/Textarea/Textarea';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Select } from '../../components/Select/Select';
import { StepProgress } from '../../components/StepProgress/StepProgress';

const steps = [
  { label: 'Package Details', description: 'Size & weight' },
  { label: 'Addresses', description: 'Sender & receiver' },
  { label: 'AI Scan', description: 'Optional' },
  { label: 'Confirmation', description: 'Review' },
];

const packageTypes = [
  { value: 'document', label: 'Document' },
  { value: 'parcel', label: 'Parcel' },
  { value: 'package', label: 'Package' },
  { value: 'freight', label: 'Freight' },
];

const weightUnits = [
  { value: 'kg', label: 'Kilograms (kg)' },
  { value: 'lb', label: 'Pounds (lb)' },
];

export default function NewShipment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    packageType: 'parcel',
    weight: '',
    weightUnit: 'kg',
    length: '',
    width: '',
    height: '',
    description: '',
    senderName: '',
    senderPhone: '',
    senderAddress: '',
    senderCity: '',
    senderState: '',
    senderZip: '',
    receiverName: '',
    receiverPhone: '',
    receiverAddress: '',
    receiverCity: '',
    receiverState: '',
    receiverZip: '',
    aiImage: null as File | null,
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      window.location.href = '/compare';
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, aiImage: e.target.files[0] });
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto  text-gray-900  dark:text-gray-100">
      
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'New Shipment' },
        ]}
      />

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Create New Shipment
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Fill in the details to compare shipping rates
        </p>
      </div>

      <Card>
        <div className="mb-8">
          <StepProgress steps={steps} currentStep={currentStep} />
        </div>

        {/* ================= STEP 1 ================= */}
        {currentStep === 0 && (
          <div className="space-y-6">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold dark:text-white">
                  Package Details
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tell us about your package
                </p>
              </div>
            </div>

            <Select
              label="Package Type"
              options={packageTypes}
              value={formData.packageType}
              onChange={(e) =>
                setFormData({ ...formData, packageType: e.target.value })
              }
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                type="number"
                label="Weight"
                value={formData.weight}
                onChange={(e) =>
                  setFormData({ ...formData, weight: e.target.value })
                }
                required
              />
              <Select
                label="Unit"
                options={weightUnits}
                value={formData.weightUnit}
                onChange={(e) =>
                  setFormData({ ...formData, weightUnit: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Input type="number" label="Length (cm)" value={formData.length}
                onChange={(e) => setFormData({ ...formData, length: e.target.value })} />
              <Input type="number" label="Width (cm)" value={formData.width}
                onChange={(e) => setFormData({ ...formData, width: e.target.value })} />
              <Input type="number" label="Height (cm)" value={formData.height}
                onChange={(e) => setFormData({ ...formData, height: e.target.value })} />
            </div>

            <Textarea
              label="Package Description"
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
        )}

        {/* ================= STEP 3 (AI Scan Example Styled) ================= */}
        {currentStep === 2 && (
          <div className="space-y-6">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center">
                <Upload className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold dark:text-white">
                  AI Package Scan (Optional)
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Let our AI estimate dimensions from a photo
                </p>
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:bg-slate-700 dark:border-gray-700 
              hover:border-blue-400 dark:hover:border-blue-500
              rounded-xl p-12 text-center transition-colors">

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />

              <label htmlFor="image-upload" className="cursor-pointer">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 
                  rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>

                <p className="text-lg font-medium dark:text-white">
                  {formData.aiImage
                    ? formData.aiImage.name
                    : 'Upload package image'}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Drop your image here or click to browse
                </p>

                <div className="mt-4">
                  <Button variant="secondary" type="button">
                    Choose File
                  </Button>
                </div>
              </label>
            </div>

            {formData.aiImage && (
              <div className="bg-green-50 dark:bg-green-900/30
                border border-green-200 dark:border-green-800
                rounded-lg p-4">
                <p className="text-green-800 dark:text-green-300 font-medium">
                  ✓ Image uploaded successfully
                </p>
              </div>
            )}

            <div className="bg-blue-50 dark:bg-blue-900/30
              border border-blue-200 dark:border-blue-800
              rounded-lg p-4">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Tip:</strong> Place a standard object next to your package for accurate measurements.
              </p>
            </div>
          </div>
        )}

        {/* ================= NAVIGATION ================= */}
        <div className="flex items-center justify-between mt-8 pt-6 
          border-t border-gray-200 dark:border-gray-700">

          <Button variant="ghost" onClick={handleBack} disabled={currentStep === 0}>
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => (window.location.href = '/dashboard')}
            >
              Cancel
            </Button>

            <Button onClick={handleNext}>
              {currentStep === steps.length - 1 ? 'Compare Prices' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </Card>
    </div>
  );
}