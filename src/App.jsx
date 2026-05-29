import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function MigrationLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

  const donationSentence = transactionId 
      ? `If you sent a Mo:Mo donation (ID: ${transactionId}), thank you so much for the support!` 
      : `I hope this free guide helps you on your journey to Austria!`;

    const templateParams = {
      user_email: email,
      transaction_id: transactionId,
      message: donationSentence
    };

    emailjs.send(
      'service_08zhuda',
      'template_tfcyj75',
      templateParams,
      'STIAdx8YE7cRCOrJ7'
    )
      .then(() => {
        alert('Success! Check your email (and spam) for confirmation.');
        setIsModalOpen(false);
        setEmail('');
        setTransactionId('');
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Desktop: Split Screen Layout | Mobile: Stacked */}
      <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">

        {/* LEFT/TOP: Visual Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative h-[50vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden"
          style={{ background: '#0B132B' }}
        >


          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="./reels.mp4" type="video/mp4" />
          </video>
          {/* Video Placeholder with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B132B]/60 to-[#0B132B]/90">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-center px-6"
              >
                <div className="text-[#ED2939] uppercase tracking-[0.3em] text-xs mb-4 font-medium">
                  Vienna • Graz • Salzburg
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-light tracking-tight">
                  Your Direct Path<br />
                  <span className="text-[#ED2939] font-semibold">to Austria</span>
                </h3>
              </motion.div>
            </div>
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#ED2939]/30"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#ED2939]/30"></div>
        </motion.div>

        {/* RIGHT/BOTTOM: Content Section */}
        <div className="relative bg-white pb-32 lg:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-xl mx-auto px-6 py-12 lg:py-20"
          >

            {/* Header */}
            <div className="mb-12 border-l-4 border-[#ED2939] pl-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    color: '#0B132B',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1'
                  }}>
                  Sampat Lama
                </h1>
                <p className="text-[#ED2939] text-sm md:text-base uppercase tracking-[0.2em] font-semibold">
                  Student Migration Mentor
                </p>
              </motion.div>
            </div>

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mb-12 space-y-4"
            >
              <p className="text-lg md:text-xl leading-relaxed"
                style={{
                  color: '#0B132B',
                  fontFamily: 'Crimson Pro, Georgia, serif',
                  fontWeight: 400
                }}>
                I help serious students navigate the real path to Austria without consultancy's heavy charges.
              </p>
            </motion.div>

            {/* Credentials Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-4">
                <div className="w-1 bg-[#ED2939]"></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#0B132B]/60 mb-1">
                    Status
                  </div>
                  <div className="text-base md:text-lg font-medium" style={{ color: '#0B132B' }}>
                    Active International Student in Austria
                  </div>
                </div>

                <div className="w-1 bg-[#ED2939]"></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#0B132B]/60 mb-1">
                    Expertise
                  </div>
                  <div className="text-base md:text-lg font-medium" style={{ color: '#0B132B' }}>
                    Debt-Free Visa & University Admissions
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mt-16 hidden lg:block"
            >
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 px-8 bg-[#ED2939] text-white font-semibold text-lg uppercase tracking-wider relative overflow-hidden group"
                style={{
                  boxShadow: '0 20px 40px rgba(237, 41, 57, 0.3)',
                  border: 'none'
                }}
              >
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-white/20"
                />
                <span className="relative z-10">Get Your Austria PDF Guide</span>
              </motion.button>
            </motion.div>

          </motion.div> 
        </div>
      </div>

      {/* MOBILE STICKY CTA - Fixed to bottom */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent"
      >
        <motion.button
          onClick={() => setIsModalOpen(true)}
          animate={{
            boxShadow: [
              '0 10px 30px rgba(237, 41, 57, 0.4)',
              '0 20px 50px rgba(237, 41, 57, 0.6)',
              '0 10px 30px rgba(237, 41, 57, 0.4)',
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-4 px-6 bg-[#ED2939] text-white font-bold text-base uppercase tracking-wider relative overflow-hidden"
          style={{ border: 'none' }}
        >
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              transform: 'translateX(-100%)',
              animation: 'shimmer 3s infinite'
            }}
          />
          <span className="relative z-10 flex items-center justify-center">
            <span>GET the Austria Guide</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </motion.button>
      </motion.div>

      {/* MODAL - Payment Gate */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#0B132B]/80 backdrop-blur-sm z-[100]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            >
              <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-none shadow-2xl">

                {/* Modal Header */}
                <div className="bg-[#0B132B] p-6 relative">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                    Secure Your Guide
                  </h2>
                  <p className="text-white/70 text-sm mt-2">
                   Get it FREE, or donate a Mo:Mo! (1 Plate = Rs. 200, Max = Rs. 2000)
                  </p>
                </div>

                {/* Modal Content */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">

                  {/* QR Code Placeholder */}
                  <div className="border-2 border-[#0B132B] p-4 flex flex-col items-center justify-center bg-gray-50 shadow-inner">
                    <img
                      src="esewa-qr.png"
                      alt="eSewa QR Code"
                      className="w-64 h-auto shadow-md border border-gray-200"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/250?text=QR+Not+Found";
                        console.error("QR image missing from public folder");
                      }}
                    />
                    <div className="mt-4 text-center">
                      <p className="text-[10px] uppercase tracking-widest text-[#0B132B]/60 font-bold">
                        eSewa QR Code
                      </p>
                      <p className="text-sm font-bold text-[#0B132B]">
                        Scan to Donate (Optional)
                      </p>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-[#0B132B] mb-2 uppercase tracking-wider">
                      Your Email Address
                      <span className="text-[#ED2939] ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-[#0B132B]/20 focus:border-[#ED2939] focus:outline-none transition-colors bg-white text-[#0B132B]"
                      style={{ fontFamily: 'Crimson Pro, Georgia, serif' }}
                    />
                    <p className="text-xs text-[#0B132B]/50 mt-1">
                      For PDF delivery
                    </p>
                  </div>

                  {/* Transaction ID Input */}
                  <div>
                    <label className="block text-sm font-medium text-[#0B132B] mb-2 uppercase tracking-wider">
                      eSewa Transaction ID (If Donated)
                   
                    </label>
                    <input
                      type="text"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      placeholder="Leave blank if downloading for free"
                      className="w-full px-4 py-3 border-2 border-[#0B132B]/20 focus:border-[#ED2939] focus:outline-none transition-colors bg-white text-[#0B132B]"
                      style={{ fontFamily: 'Crimson Pro, Georgia, serif' }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 bg-[#ED2939] text-white font-bold uppercase tracking-wider transition-all"
                    style={{
                      boxShadow: '0 10px 30px rgba(237, 41, 57, 0.3)',
                      border: 'none'
                    }}
                  >
                    GET THE ULTIMATE GUIDE!
                  </motion.button>

                  {/* Disclaimer */}
                  <div className="pt-4 border-t border-[#0B132B]/10">
                    <p className="text-xs text-[#0B132B]/50 leading-relaxed">
                      <strong className="text-[#0B132B]/70">Note:</strong> Your guide link will be delivered instantly via email. Please check your spam folder if it doesn't arrive within a few minutes!
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Google Fonts Import */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Crimson+Pro:wght@300;400;500;600&display=swap');
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
