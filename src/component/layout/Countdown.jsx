import { useState, useEffect } from 'react';
import CoverLogo from '../../assets/footer_logo.svg';


export default function CountdownLanding({ onComplete, targetDate, countdownDuration }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let target;

    // OPSI 1: Jika menggunakan targetDate (tanggal spesifik)
    if (targetDate) {
      target = new Date(targetDate).getTime();
    } 
    // OPSI 2: Jika menggunakan countdownDuration (durasi dari sekarang)
    else if (countdownDuration) {
      const { days = 0, hours = 0, minutes = 0, seconds = 0 } = countdownDuration;
      const durationInMs = 
        (days * 24 * 60 * 60 * 1000) +
        (hours * 60 * 60 * 1000) +
        (minutes * 60 * 1000) +
        (seconds * 1000);
      target = new Date().getTime() + durationInMs;
    }
    // Default: 30 hari dari sekarang
    else {
      target = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
    }

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          finished: true
        };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        finished: false
      };
    };

    // Set initial time
    const initial = calculateTimeLeft();
    setTimeLeft(initial);

    // Check if already finished
    if (initial.finished) {
      setIsLoading(true);
      setTimeout(() => {
        if (onComplete && typeof onComplete === 'function') {
          onComplete();
        }
      }, 2000);
      return;
    }

    const timer = setInterval(() => {
      const result = calculateTimeLeft();
      setTimeLeft(result);

      // Check if countdown has reached zero
      if (result.finished) {
        clearInterval(timer);
        
        // Aktifkan loader
        setIsLoading(true);
        
        // Tunggu 2 detik untuk animasi loader, lalu panggil onComplete
        setTimeout(() => {
          if (onComplete && typeof onComplete === 'function') {
            onComplete();
          }
        }, 2000);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete, targetDate, countdownDuration]);

  const CountdownBox = ({ value, label }) => (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 min-w-[140px] shadow-lg border border-orange-200">
      <div className="text-6xl font-bold text-orange-600 mb-2">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-orange-500 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  // Loader Component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 flex items-center justify-center">
        <div className="text-center">
          {/* Spinner */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-orange-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-orange-400 border-r-orange-500 rounded-full animate-spin"></div>
          </div>
          
          {/* Loading Text */}
          <h2 className="text-xl font-bold text-orange-800 mb-4">
            Loading Your Experience
          </h2>
          <div className="flex justify-center gap-1">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
    {/* Hero Section - Logo, Headline, Sub-headline */}
    <div className="mb-16">
      {/* Logo & Headline Group */}
      <div className="mb-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img 
            src={CoverLogo}
            alt="Nongslab Logo" 
            className="w-32 h-32 object-contain"
          />

        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#0A0A0A] leading-tight">
          Nongslab Website is
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Launching Soon
          </span>
        </h1>
      </div>

      {/* Sub-headline */}
      <p className="text-lg md:text-xl text-[#0A0A0A] max-w-2xl mx-auto">
        We're working hard to bring you a new and improved experience. Stay tuned!
      </p>
    </div>

    {/* Countdown */}
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
      <CountdownBox value={timeLeft.days} label="DAYS" />
      <CountdownBox value={timeLeft.hours} label="HOURS" />
      <CountdownBox value={timeLeft.minutes} label="MINUTES" />
      <CountdownBox value={timeLeft.seconds} label="SECONDS" />
    </div>

    {/* Optional: Notify Me Section
    <div className="mt-16">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 w-full px-6 py-4 bg-white/70 border border-orange-300 rounded-xl text-orange-900 placeholder-orange-400 focus:outline-none focus:border-orange-500 transition-colors"
        />
        <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
          Notify Me
        </button>
      </div>
    </div> */}
  </div>
    </div>
  );
}