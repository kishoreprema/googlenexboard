# 🚀 NexBoard | Enterprise AI-Powered Workflow Orchestration & Operational Analytics

NexBoard is a next-generation enterprise workflow orchestration and project intelligence platform designed to supercharge engineering velocity, streamline project tracking, and deliver predictive operational insights.

Built with a high-fidelity, sleek dark theme, NexBoard brings unified operational visibility, automated execution analytics, and deep capacity auditing to high-performing product and engineering organizations.

---

## 🌟 Key Platform Features

### 📊 1. Executive Control Center
* **Unified Velocity Analytics:** Track live delivery ratios, active task counters, and execution metrics to prevent scope creep.
* **Automated Progress Baselines:** Health gauges that dynamically calculate done-ratios and execution trends.
* **Workload Alignment Heatmaps:** Visual resource mapping to balance engineering capacity and tackle bottlenecks.

### 🔄 2. Kanban Workflow Orchestration
* **Advanced State Transitions:** Seamless movement of work packages through custom quality gates and peer reviews.
* **Metadata Tag System:** Instant identification of priority, issue keys, and assignees with smart badge overlays.
* **Collaborative Thread Logs:** Frictionless context alignment and asset sharing directly within active issues.

### 📅 3. My Planner & Agendas
* **High-Fidelity Calendar Engine:** contributors can self-schedule deliverables and meet milestones.
* **Chronological Gantt Tracks:** Clear visualization of task dependencies, critical paths, and target release windows.
* **Adaptive Drag Scheduling:** Instantly reschedule and stretch task scopes directly on the timeline.

### 📈 4. Operational Intelligence Suite
* **Cross-Project Shipping Rates:** Side-by-side performance comparisons across separate workspaces.
* **SLA & Bottleneck Analysis:** Spot high-risk delays and overdue tickets before they impact product launches.
* **Capacity Audits:** Dynamic team density mapping to maximize operational efficiency.

### 🔒 5. Enterprise Governance
* **Role-Based Access Controls (RBAC):** Restrict context access with dedicated security profiles.
* **Namespace Isolation:** Multi-project scoping boundaries to safeguard sensitive intellectual property.
* **Safety Guardrails:** Configuration lockouts protecting core governance systems from human error.

---

## 🛠️ Technology Stack

* **Frontend:** Clean Vanilla HTML5, CSS3 (Premium Dark Slate Theme with HSL Gradients & Glassmorphism), and Dynamic Vanilla ES6 Javascript.
* **Backend API (Serverless):** Node.js runtime executing secure serverless mail functions.
* **Email Transport:** Nodemailer secure SSL SMTP connection (Port 465).
* **Local Testing Server:** Express.js static file host and API routing simulator.

---

## 💻 How to Access & Test Locally

You can run the entire showcase site, complete with functional contact forms and automated email dispatch, on your local machine:

### 1. Install Dependencies
Navigate into your local directory and install dependencies:
```bash
npm install
```

### 2. Start the Local Server
Launch the Express static server:
```bash
npm start
```

### 3. Open the Site
Open your browser and navigate to:
👉 **[http://localhost:5000](http://localhost:5000)**

*Fill out the "Request Demo" form, submit it, and check your inbox at `kishoreprema2001@gmail.com` to see the automated lead notification in action!*

---

## ⚡ Production Deployment (Vercel)

This repository is fully optimized for **Vercel** with zero configuration required.

### One-Click Deploy via GitHub
1. Go to your **[Vercel Dashboard](https://vercel.com/dashboard)**.
2. Click **"Add New..."** ➔ **"Project"**.
3. Import this repository: **`googlenexboard`**.
4. Click **"Deploy"**!

*Vercel will automatically compile the frontend static assets and deploy `api/checkout.js` as an isolated Serverless Function accessible at `/api/checkout`.*

---

## 📩 Lead Mailer Configuration

Lead inquiries are dispatched using a secure SMTP SSL link. To modify the recipient email address or use another email service:

1. Open `api/checkout.js` (for Vercel) or `server.js` (for local server).
2. Locate the SMTP transporter block and update the credentials:
```javascript
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'YOUR_EMAIL@gmail.com',
        pass: 'YOUR_GOOGLE_APP_PASSWORD'
    }
});
```

---

## 📄 License & Terms

This project is licensed under the MIT License. Mentions of "Kishore" are entirely scrubbed from all customer-facing files to maintain standard brand privacy.
