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
			fontFamily: {
				heading: ['var(--font-heading)', 'Plus Jakarta Sans', 'sans-serif'],
				body: ['var(--font-body)', 'DM Sans', 'sans-serif'],
			},
			colors: {
				'brand-teal': {
					DEFAULT: '#17a2b8',
					50: '#e6f7f9',
					100: '#b3e6ed',
					200: '#80d5e1',
					300: '#4dc4d5',
					400: '#26b8cc',
					500: '#17a2b8',
					600: '#128a9e',
					700: '#0d6e7e',
					800: '#08525f',
					900: '#04363f',
				},
				'accent-orange': {
					DEFAULT: '#ff6b35',
					50: '#fff3ed',
					100: '#ffdcc8',
					200: '#ffc5a3',
					300: '#ffae7e',
					400: '#ff8c59',
					500: '#ff6b35',
					600: '#e55a2b',
					700: '#cc4a22',
					800: '#993818',
					900: '#66250f',
				},
				'dark-navy': {
					DEFAULT: '#0a1628',
					50: '#e8ecf1',
					100: '#b8c4d4',
					200: '#889cb7',
					300: '#58749a',
					400: '#374f73',
					500: '#1a2d4d',
					600: '#0a1628',
					700: '#081220',
					800: '#060e18',
					900: '#040a10',
				},
				'light-cyan': {
					DEFAULT: '#e0f7fa',
					50: '#f5fdfe',
					100: '#e0f7fa',
					200: '#b2ebf2',
					300: '#80deea',
					400: '#4dd0e1',
					500: '#26c6da',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))'
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
					foreground: 'hsl(var(--accent-foreground))',
					light: 'hsl(var(--accent-light))'
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
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-section': 'var(--gradient-section)'
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'card': 'var(--shadow-card)',
				'cta': 'var(--shadow-cta)'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
