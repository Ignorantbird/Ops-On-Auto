/*
 * Ops On Auto - Business Automation Platform
 * Copyright (c) 2025 Ops On Auto (https://opsonauto.com)
 * All rights reserved. Unauthorized copying prohibited.
 * 
 * Proprietary and confidential software.
 * Contact: info@opsonauto.com for licensing inquiries.
 */

// Add this header to the top of these key files:
// - src/App.tsx
// - src/main.tsx  
// - src/components/Navigation.tsx
// - src/pages/Index.tsx
// - Any other critical component files

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
