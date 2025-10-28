import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, Shield } from "lucide-react";

const TermsOfUse = () => {
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-6">
            <Scale className="w-8 h-8 text-brand-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Use
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
                  Welcome to COZ CHEM. By accessing or using our website
                  www.cozchem.com, you agree to these Terms of Use. If you do
                  not agree, please do not use this website.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Website Purpose
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This website is provided for informational purposes. It
                  presents details about our company, products, and services.
                  While we do not process online purchases directly through the
                  website, if you are interested in buying or inquiring about
                  any product, you can contact us through the contact form or
                  via the email address provided on the website. Our team will
                  respond to your inquiry and provide further assistance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Use of Website
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You agree to use this website only for lawful purposes and in
                  a way that does not infringe on the rights of others or
                  restrict their use of the site.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2 font-semibold">
                  You must not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Use the site to transmit harmful or malicious code.</li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    website.
                  </li>
                  <li>
                    Copy, distribute, or modify our content without permission.
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
                  Intellectual Property
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  All text, images, graphics, logos, and other content on this
                  website are the property of COZ CHEM or its licensors and are
                  protected by copyright and trademark laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You may view content for personal or business reference only,
                  but not for resale or redistribution.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Information Accuracy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to keep all information on this site accurate and up
                  to date. However, we make no warranties or guarantees
                  regarding the accuracy, completeness, or reliability of any
                  content. Information may change without notice.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To the fullest extent permitted by law, COZ CHEM will not be
                  liable for any direct, indirect, or consequential damages
                  arising from your use of or inability to use this website or
                  any linked site.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Indemnification
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold COZ CHEM harmless from any
                  claims, damages, or losses arising from your misuse of this
                  website or violation of these Terms.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Changes to These Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update these Terms of Use from time to time. Any
                  changes will be posted on this page with an updated date.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Governing Law
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of Vadodara, Gujarat,
                  without regard to conflict of law principles. Any disputes
                  will be handled in the courts of Vadodara, Gujarat.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Questions About These Terms?
              </h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Use, please
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
            className="inline-flex items-center text-brand-blue hover:text-blue-700 font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfUse;
