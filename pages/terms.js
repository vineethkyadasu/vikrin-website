export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#1F3CAB] mb-6">Terms & Conditions</h1>
      <p className="text-gray-700 mb-4">
        By using Vikrin’s services, you agree to the following terms and conditions:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Our services must not be used for illegal or harmful purposes.</li>
        <li>All content provided is owned by Vikrin unless otherwise stated.</li>
        <li>We reserve the right to modify or terminate services at any time.</li>
        <li>Any disputes will be resolved under Indian law.</li>
      </ul>
      <p className="text-gray-700">
        If you have concerns, reach us at{" "}
        <a href="mailto:contact@vikrin.com" className="text-blue-600 underline">contact@vikrin.com</a>.
      </p>
    </div>
  );
}