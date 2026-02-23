import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Building2,
  ExternalLink,
  Info,
  SendHorizontal,
} from "lucide-react";
import FooterContact from "../../components/FooterContact/FooterContact";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "Shipping Rates Comparison",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert("Please enter a valid email");
      return;
    }

    console.log("Form Submitted:", formData);

    setFormData({
      fullName: "",
      email: "",
      subject: "Shipping Rates Comparison",
      message: "",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
        <div className="bg-gray-800 rounded-2xl shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          
          {/* LEFT SIDE - FORM */}
          <div className="p-10">
            <span className="text-sm bg-blue-900 text-blue-300 px-4 py-1 rounded-full font-medium">
              GET IN TOUCH
            </span>

            <h2 className="text-3xl font-semibold mt-4 text-white">Contact US</h2>

            <p className="text-gray-400 mt-2 mb-8">
              We're here to help with your shipping needs 24/7. Send us a message
              and we will respond shortly.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="bg-gray-700 border border-gray-600 text-white rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="bg-gray-700 border border-gray-600 text-white rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-gray-700 border border-gray-600 text-white rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Shipping Rates Comparison</option>
                <option>Tracking Shipment</option>
                <option>Business Inquiry</option>
              </select>

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you today?"
                required
                className="bg-gray-700 border border-gray-600 text-white rounded-lg p-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg shadow-md"
              >
                <span className="flex items-center gap-3">
                  Send Message <SendHorizontal size={16} />
                </span>
              </button>
            </form>
          </div>

          {/* RIGHT SIDE - SUPPORT INFO */}
          <div className="bg-blue-950 p-10">
            <div className="flex items-center mb-3 gap-4">
              <Info className="text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-6 text-white">
                Support Channels
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-blue-400" />
                <div>
                  <h4 className="font-medium text-white">Phone Support</h4>
                  <p className="text-gray-300">+1 (555) 000-1234</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="text-blue-400" />
                <div>
                  <h4 className="font-medium text-white">Live WhatsApp</h4>
                  <p className="text-gray-300">+971 50 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-blue-400" />
                <div>
                  <h4 className="font-medium text-white">Email Us</h4>
                  <p className="text-gray-300">support@shipsphere.com</p>
                </div>
              </div>

              <div className="mt-10 bg-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Building2 className="text-blue-400" />
                  <div>
                    <h4 className="font-medium text-white">
                      Regional Hub - Egypt
                    </h4>
                    <p className="text-gray-300 my-3">
                      Nile Business Tower, Floor 10 <br />
                      Smart Village, Giza, Egypt
                    </p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 flex items-center gap-2"
                      href="https://maps.app.goo.gl/TUYAcLi1ydvTzTFr9"
                    >
                      View on Map
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <FooterContact />
    </>
  );
};

export default Contact;