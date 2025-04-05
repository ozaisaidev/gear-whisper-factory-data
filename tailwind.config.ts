
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                industrial: {
                  blue: '#1E4B8F',
                  gray: '#5A6978',
                  light: '#E5EBF1',
                  accent: '#4A90E2',
                  highlight: '#FFC107',
                  error: '#E53935',
                  success: '#43A047'
                },
                // New modern color palette based on the provided image
                modern: {
                  primary: '#5B63FE',   // The vibrant blue/purple from active menu
                  secondary: '#4ECC3E',  // The green from the charts
                  dark: '#1E2029',     // Dark background (sidebar)
                  light: '#FFFFFF',    // Light background (cards)
                  gray: '#9DA3AF',     // Muted text color
                  success: '#4ECC3E',  // Green success indicators
                  warning: '#FFC107',  // Yellow star highlights
                  danger: '#FF5252',   // For errors and alerts
                  chart: {
                    blue: '#5B63FE',
                    green: '#4ECC3E',
                    yellow: '#FFD166'
                  }
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          }
        },
        'fade-in-right': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)' 
          }
        },
        'fade-out': {
          '0%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': { 
            opacity: '0',
            transform: 'translateY(10px)' 
          }
        },
        'pulse-ring': {
          '0%': { 
            transform: 'scale(0.8)',
            opacity: '0.5' 
          },
          '50%': { 
            transform: 'scale(1.2)',
            opacity: '0.3' 
          },
          '100%': { 
            transform: 'scale(0.8)',
            opacity: '0.5' 
          }
        },
        'rotate-loader': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'bounce-in': {
          '0%': { 
            transform: 'scale(0.8)',
            opacity: '0' 
          },
          '70%': { 
            transform: 'scale(1.1)',
            opacity: '1' 
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1' 
          }
        },
        'slide-up': {
          '0%': { 
            transform: 'translateY(20px)',
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1' 
          }
        },
        'slide-down': {
          '0%': { 
            transform: 'translateY(-20px)',
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1' 
          }
        },
        'wave': {
          '0%, 100%': { transform: 'scaleY(0.5)' },
          '50%': { transform: 'scaleY(1.5)' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'fade-in-right': 'fade-in-right 0.4s ease-out',
        'fade-out': 'fade-out 0.4s ease-out',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-loader': 'rotate-loader 1.5s linear infinite',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
        'slide-down': 'slide-down 0.4s ease-out',
        'wave': 'wave 1.5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
