
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import LoadingWave from '@/components/LoadingWave';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      // Simulate API call since we don't have Tauri
      setTimeout(() => {
        localStorage.setItem('loggedIn', 'true');
        setIsLoading(false);
        
        // Trigger success animation instead of immediate navigation
        setLoginSuccess(true);
        
        // Navigate after animation completes
        setTimeout(() => {
          toast.success("Login successful");
          navigate('/');
        }, 1500);
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error("Invalid email or password.");
      setIsLoading(false);
    }
  };

  // Success animation variants
  const containerVariants = {
    initial: { scale: 1 },
    success: { 
      scale: [1, 1.05, 1],
      transition: { duration: 0.5 }
    }
  };
  
  const successVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { 
      opacity: 1, 
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: { 
        duration: 0.6,
        times: [0, 0.3, 0.6, 1],
        ease: "easeInOut" 
      }
    }
  };

  const confettiVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const confettiItemVariants = {
    initial: { y: -10, opacity: 0 },
    animate: { 
      y: [0, -30, -60], 
      x: (i: number) => [0, (i % 2 === 0 ? 20 : -20) * (i+1), (i % 2 === 0 ? 40 : -40) * (i+1)],
      rotate: [0, 45, 90, 180, 360],
      opacity: [0, 1, 1, 0],
      transition: { 
        duration: 1.5,
        ease: "easeOut" 
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-modern-dark to-modern-dark/70 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        variants={loginSuccess ? containerVariants : {}}
        animate={loginSuccess ? "success" : ""}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden relative"
      >
        {/* Confetti animation overlay */}
        {loginSuccess && (
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
            variants={confettiVariants}
            initial="initial"
            animate="animate"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-3 h-8 rounded-full top-1/2 left-1/2 ${
                  ['bg-blue-500', 'bg-green-500', 'bg-yellow-400', 'bg-purple-500', 'bg-modern-primary'][i % 5]
                }`}
                custom={i}
                variants={confettiItemVariants}
              />
            ))}
          </motion.div>
        )}

        <div className="p-8">
          <div className="text-center mb-8">
            <AnimatePresence mode="wait">
              {loginSuccess ? (
                <motion.div
                  key="success"
                  initial="initial"
                  animate="animate"
                  variants={successVariants}
                  className="flex justify-center mb-4"
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle size={28} className="text-green-500" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="lock"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex justify-center mb-4"
                >
                  <div className="bg-modern-primary/10 p-3 rounded-full">
                    <Lock size={28} className="text-modern-primary" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.h1 
              className="text-2xl font-bold text-gray-800"
              animate={loginSuccess ? { scale: [1, 1.1, 1], color: ["#1f2937", "#5B63FE", "#1f2937"] } : {}}
              transition={{ duration: 0.5 }}
            >
              {loginSuccess ? "Login Successful!" : "Motor Analytics"}
            </motion.h1>
            <AnimatePresence>
              {!loginSuccess && (
                <motion.p 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-500 mt-1"
                >
                  Sign in to your account
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          
          <AnimatePresence>
            {!loginSuccess && (
              <motion.form
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: 20 }}
                onSubmit={handleSubmit}
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-primary/50 focus:border-modern-primary outline-none transition-colors"
                        placeholder="email@example.com"
                      />
                      <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-primary/50 focus:border-modern-primary outline-none transition-colors"
                        placeholder="••••••••"
                      />
                      <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-modern-primary text-white font-medium py-2 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="h-6 scale-75">
                        <LoadingWave />
                      </div>
                    ) : (
                      <>
                        <span>Sign In</span>
                        <ArrowRight size={16} className="ml-2" />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
          
          {loginSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-green-600 mb-2">Redirecting you to dashboard...</p>
              <div className="flex justify-center">
                <LoadingWave />
              </div>
            </motion.div>
          )}
        </div>
        
        <div className="py-4 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">© 2025 Motor Analytics. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
