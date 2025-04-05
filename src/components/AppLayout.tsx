
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel
} from '@/components/ui/sidebar';
import { Database, FileText, Mic, LogIn, Home, User, LogOut, FileUp, HelpCircle, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'sonner';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  const menuItems = [
    {
      name: 'Dashboard',
      icon: Home,
      path: '/',
      color: 'text-yellow-400'
    },
    {
      name: 'Data Entry',
      icon: Database,
      path: '/data-entry',
      color: 'text-green-400'
    },
    {
      name: 'Audio Analysis',
      icon: Mic,
      path: '/audio-analysis',
      color: 'text-purple-400'
    },
    {
      name: 'Export Data',
      icon: FileUp,
      path: '/export-data',
      color: 'text-sky-400'
    },
    {
      name: 'View Data',
      icon: Database,
      path: '/view-data',
      color: 'text-teal-400'
    }
  ];

  const sidebarItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const handleLoginClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      toast.info("Logged out successfully");
    } else {
      navigate('/login');
    }
  };

  const handleContactHelp = () => {
    toast.info("Please contact us at support@motoranalytics.com");
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <Sidebar className="border-r border-gray-800/10 bg-modern-dark z-20">
          <SidebarHeader className="py-6">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="text-modern-primary">⚡</span> Motor Analytics
                </h1>
                <p className="text-xs text-gray-400 mt-1">Factory Data Dashboard</p>
              </motion.div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider px-4 py-2">Main Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={sidebarItemVariants}
                    >
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild 
                          isActive={location.pathname === item.path}
                          className={`${location.pathname === item.path ? 'bg-modern-primary/20 text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                          <Link to={item.path} className="group relative">
                            {location.pathname === item.path && (
                              <motion.div 
                                layoutId="activeSidebar"
                                className="absolute left-0 top-0 w-1 h-full bg-modern-primary rounded-r-md"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            )}
                            <item.icon 
                              className={`${location.pathname === item.path ? 'text-modern-primary' : item.color} 
                                transition-all group-hover:scale-110 drop-shadow-lg filter text-opacity-100 w-5 h-5`} 
                            />
                            <span>{item.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </motion.div>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider px-4 py-2">Support</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild className="text-gray-400 hover:text-white">
                        <button 
                          className="w-full flex items-center group"
                          onClick={handleContactHelp}
                        >
                          <HelpCircle className="text-blue-400 group-hover:scale-110 transition-transform drop-shadow-lg w-5 h-5" />
                          <span>Contact / Help</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider px-4 py-2">Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild className="text-gray-400 hover:text-white">
                        <button 
                          className="w-full flex items-center group"
                          onClick={handleLoginClick}
                        >
                          <div className="relative">
                            {isLoggedIn ? (
                              <LogOut className="text-red-400 group-hover:scale-110 transition-transform drop-shadow-lg w-5 h-5" />
                            ) : (
                              <User className="text-modern-primary group-hover:scale-110 transition-transform drop-shadow-lg w-5 h-5" />
                            )}
                            {isLoggedIn && (
                              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                            )}
                          </div>
                          <span>{isLoggedIn ? 'Log Out' : 'Log In'}</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="mt-auto">
            <div className="p-4 text-center text-xs text-gray-500">
              <p>v1.0.0</p>
              <p>© 2025 Motor Analytics</p>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1">
          <div className="flex justify-end p-4 bg-white shadow-sm">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/export-data')}
              className="flex items-center px-4 py-2 bg-modern-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors shadow-sm"
            >
              <FileUp size={18} className="mr-2" />
              <span>Export Data</span>
            </motion.button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="min-h-screen w-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SidebarProvider>
  );
}
