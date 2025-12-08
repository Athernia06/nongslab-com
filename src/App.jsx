import React, { useState } from 'react';
import Header from './component/layout/Header';
import Hero from './component/section/Hero';
import Separator from './component/section/Separator.jsx';
import About from "./component/section/About.jsx";
import OurServices from "./component/section/Our_services.jsx";
import AdditionalServices from './component/section/Additional_services.jsx';
import WorkProcess from './component/section/Our_works.jsx';
import Footer from './component/layout/Footer.jsx';
import Countdown from './component/layout/Countdown.jsx';

function App() {
  const [showCountdown, setShowCountdown] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const handleCountdownComplete = () => {
    setShowCountdown(false);
    // Trigger fade-in animation setelah countdown hilang
    setTimeout(() => {
      setFadeIn(true);
    }, 50);
  };

  // ========================================
  // PILIH SALAH SATU OPSI DI BAWAH INI
  // ========================================

  // ============================================================
  // OPSI 1: COUNTDOWN BERDASARKAN TANGGAL & WAKTU SPESIFIK
  // ============================================================
  // Uncomment (hapus //) untuk menggunakan opsi ini
  
  const targetDate = "2025-12-16 23:59:59"; // Format: YYYY-MM-DD HH:MM:SS
  
  // Contoh lain untuk opsi 1:
  // const targetDate = "2026-01-01 00:00:00"; // 1 Januari 2026 tengah malam
  // const targetDate = "2025-12-25 10:00:00"; // 25 Desember 2025 jam 10 pagi
  // const targetDate = new Date(2025, 11, 31, 23, 59, 59); // 31 Des 2025, 23:59:59


  // ============================================================
  // OPSI 2: COUNTDOWN BERDASARKAN DURASI DARI SEKARANG
  // ============================================================
  // Uncomment (hapus //) untuk menggunakan opsi ini, 
  // dan COMMENT (tambahkan //) pada OPSI 1 di atas
  
  // const countdownDuration = {
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 10
  // };

  // Contoh lain untuk opsi 2:
  // const countdownDuration = { days: 7 }; // 7 hari dari sekarang
  // const countdownDuration = { hours: 24 }; // 24 jam dari sekarang
  // const countdownDuration = { minutes: 30 }; // 30 menit dari sekarang
  // const countdownDuration = { seconds: 60 }; // 60 detik dari sekarang
  // const countdownDuration = { days: 5, hours: 12, minutes: 30 }; // Kombinasi


  // ========================================
  // JANGAN UBAH CODE DI BAWAH INI
  // ========================================

  return (
    <div className="App font-roboto">
      {showCountdown ? (
        <div className="animate-fadeIn">
          <Countdown 
            onComplete={handleCountdownComplete}
            targetDate={targetDate} // OPSI 1
            // countdownDuration={countdownDuration} // OPSI 2
          />
        </div>
      ) : (
        <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <Header />
          <main>
            <Hero />
            <Separator />
            <About />
            <OurServices />
            <AdditionalServices />
            <WorkProcess />
          </main>
          <Footer />
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }
      `}</style>
    </div>
  );
}

export default App;