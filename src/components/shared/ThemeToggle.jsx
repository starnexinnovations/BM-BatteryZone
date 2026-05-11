import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-14 h-7 rounded-full transition-all duration-400 flex items-center ${
        isDark
          ? 'bg-dark-elevated border border-dark-border'
          : 'bg-amber-100 border border-amber-200'
      } ${className}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      id="theme-toggle"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        className={`absolute w-5 h-5 rounded-full flex items-center justify-center shadow-md transition-colors ${
          isDark
            ? 'bg-accent text-dark-bg'
            : 'bg-white text-amber-600'
        }`}
        animate={{ x: isDark ? 30 : 4 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? <FiMoon size={11} /> : <FiSun size={11} />}
      </motion.div>
      {/* Track icons */}
      <FiSun size={10} className={`absolute left-1.5 transition-opacity ${isDark ? 'opacity-30 text-slate-500' : 'opacity-0'}`} />
      <FiMoon size={10} className={`absolute right-1.5 transition-opacity ${isDark ? 'opacity-0' : 'opacity-30 text-amber-400'}`} />
    </button>
  );
}
