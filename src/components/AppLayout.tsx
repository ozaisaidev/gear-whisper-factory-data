
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import { Database, BarChart2, FileText, Mic, LogIn } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();
  
  const menuItems = [
    {
      name: 'Data Entry',
      icon: Database,
      path: '/data-entry',
      color: 'text-amber-500'
    },
    {
      name: 'Analytics',
      icon: BarChart2,
      path: '/analytics',
      color: 'text-blue-500'
    },
    {
      name: 'Audio Analysis',
      icon: Mic,
      path: '/audio-analysis',
      color: 'text-purple-500'
    },
    {
      name: 'Export Data',
      icon: FileText,
      path: '/export-data',
      color: 'text-green-500'
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

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-industrial-light/30">
        <Sidebar className="border-r border-industrial-light">
          <SidebarHeader className="py-6">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-xl font-bold text-industrial-blue">Gear Whisper</h1>
                <p className="text-xs text-industrial-gray">Factory Data Dashboard</p>
              </motion.div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
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
                        >
                          <Link to={item.path} className="group">
                            <item.icon className={`${item.color} transition-transform group-hover:scale-110`} />
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
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button className="w-full flex items-center">
                          <LogIn className="text-industrial-blue" />
                          <span>Log In</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="mt-auto">
            <div className="p-4 text-center text-xs text-industrial-gray">
              <p>v1.0.0</p>
              <p>© 2023 Factory Solutions</p>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1">
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
