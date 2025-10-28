import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-full mb-6">
            <Shield className="w-8 h-8 text-brand-orange" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">Last updated: December 2024</p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8"
        >
          {/* Section 1 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to COZ CHEM ("we", "our", "us"). This Privacy Policy
                  explains how we handle personal information collected through
                  our website www.cozchem.com, which provides information about
                  our company and products.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    <strong>Contact information</strong> (name, email, phone) —
                    if you contact us through our forms or email.
                  </li>
                  <li>
                    <strong>Technical information</strong> — such as your IP
                    address, browser type, and pages visited (collected
                    automatically via cookies or analytics tools).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  How We Use Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We use the collected data to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Respond to your inquiries or requests.</li>
                  <li>
                    Ensure website security and comply with legal requirements.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Cookies & Analytics
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may use cookies or analytics services (like Google
                  Analytics) to understand how visitors use our site. You can
                  disable cookies in your browser settings if you prefer.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Data Sharing
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell or rent your information. We may share limited
                  data with trusted service providers (e.g., website hosting or
                  analytics) who help us operate the site.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Data Retention & Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We keep your information only as long as necessary to respond
                  to your inquiries and maintain our website. We use reasonable
                  technical and organizational measures to protect your data.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You may request access, correction, or deletion of your
                  personal information by contacting us.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Updates to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. The
                  latest version will always be posted on this page.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Contact Us
              </h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> contactcozchem@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 92741 66689
                </p>
                <p>
                  <strong>Address:</strong> 5 Laxmi Society, O.P. Road,
                  Vadodara-390007, Gujarat, India
                </p>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center text-brand-orange hover:text-orange-600 font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
