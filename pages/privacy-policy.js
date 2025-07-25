export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#1F3CAB] mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        At Vikrin, your privacy is important to us. This Privacy Policy outlines how we collect,
        use, and protect your information.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>We collect only essential personal data such as name and email for communication.</li>
        <li>We never sell or share your data with third parties without consent.</li>
        <li>Your data is stored securely and only accessible to authorized personnel.</li>
        <li>We may use cookies to enhance site functionality.</li>
      </ul>
      <p className="text-gray-700">
        If you have questions, contact us at{" "}
        <a href="mailto:contact@vikrin.com" className="text-blue-600 underline">contact@vikrin.com</a>.
      </p>
    </div>
  );
}