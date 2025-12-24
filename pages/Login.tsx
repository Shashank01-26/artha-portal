import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Linkedin, Chrome, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simplified login for demo purposes
    login(email, email.split('@')[0]);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full animate-fade-in">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Form Header */}
          <div className="p-8 pb-0 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500">Access the exclusive Pune tech network.</p>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 hover:bg-white"
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 hover:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="flex justify-end">
                <button type="button" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 group mt-6"
              >
                Sign In
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-slate-400 font-bold tracking-wider">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all font-medium text-sm text-slate-700">
                <Linkedin size={18} className="text-[#0077b5]" />
                LinkedIn
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all font-medium text-sm text-slate-700">
                <Chrome size={18} className="text-[#4285F4]" />
                Google
              </button>
            </div>
          </div>

          <div className="p-6 bg-slate-50 border-t border-gray-100 text-center">
            <p className="text-slate-500 text-sm">
              Don't have an account?{' '}
              <Link
                to="/join"
                className="font-bold text-primary hover:underline transition-all"
              >
                Sign Up via Join Us
              </Link>
            </p>
          </div>
        </div>
        
        <p className="mt-8 text-center text-xs text-slate-400 leading-relaxed">
          By continuing, you agree to TEAP's{' '}
          <Link to="/terms" className="underline hover:text-slate-600">Terms of Service</Link>{' '}
          and{' '}
          <button className="underline hover:text-slate-600">Privacy Policy</button>.
        </p>
      </div>
    </div>
  );
};

export default Login;