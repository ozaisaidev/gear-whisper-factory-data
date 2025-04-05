
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import LoadingWave from '@/components/LoadingWave';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
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
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful");
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-modern-dark to-modern-dark/70 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <div className="bg-modern-primary/10 p-3 rounded-full">
                <Lock size={28} className="text-modern-primary" />
              </div>
            </motion.div>
            <h1 className="text-2xl font-bold text-gray-800">Motor Analytics</h1>
            <p className="text-gray-500 mt-1">Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit}>
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
          </form>
          
          <div className="mt-6 text-center">
            <button 
              className="text-modern-primary hover:underline text-sm"
              onClick={() => navigate('/')}
            >
              Return to Dashboard
            </button>
          </div>
        </div>
        
        <div className="py-4 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">© 2025 Motor Analytics. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
