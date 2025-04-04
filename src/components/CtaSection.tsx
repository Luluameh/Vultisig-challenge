const CtaSection = () => {
  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-br from-vult-dark to-vult-dark-secondary"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          SECURE YOUR DIGITAL ASSETS NOW!
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join thousands of users trusting Vultisig for their crypto security.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="bg-vult-primary text-vult-dark font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition text-lg"
          >
            DOWNLOAD VULTISIG
          </a>
          <a
            href="#"
            className="border-2 border-vult-primary text-vult-primary font-bold px-8 py-4 rounded-lg hover:bg-vult-primary hover:bg-opacity-10 transition text-lg"
          >
            JOIN DISCORD
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
