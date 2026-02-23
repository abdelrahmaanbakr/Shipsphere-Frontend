import React from "react";

const FooterContact: React.FC = () => {
  return (
    <div className="w-full bg-gray-800 shadow-2xl py-12 px-6 rounded-xl border border-gray-700">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">

        {/* Stat Item */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-blue-400">500+</h3>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">
            Active Routes
          </p>
        </div>

        {/* Stat Item */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-blue-400">24/7</h3>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">
            Dedicated Support
          </p>
        </div>

        {/* Stat Item */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-blue-400">12M+</h3>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">
            Packages Shipped
          </p>
        </div>

        {/* Stat Item */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-blue-400">99%</h3>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">
            On-Time Delivery
          </p>
        </div>

      </div>
    </div>
  );
};

export default FooterContact;