// =========================================================================
// NEXBOARD GOOGLE SHOWCASE - INTERACTIVE JAVASCRIPT
// Handles screenshot slider transitions, option lists, and checkout modal
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------------------------
    // Slides/Screens Data Definition
    // -------------------------------------------------------------
    const screensData = {
        dashboard: {
            title: "Executive Control Center",
            desc: "A high-impact unified command center providing leaders with complete visibility into organizational health, team delivery speeds, and cross-functional performance.",
            badge: '<i class="fa-solid fa-chart-pie"></i> Executive Control Center (Live Platform UI)',
            img: "assets/dashboard.png",
            options: [
                {
                    title: "Unified Velocity Analytics",
                    desc: "Monitor real-time delivery ratios, active task counts, and velocity metrics to prevent scope creep."
                },
                {
                    title: "Automated Progress Baselines",
                    desc: "Dynamic project health gauges calculate done-ratios and execution trends computed automatically."
                },
                {
                    title: "Workload Alignment Heatmaps",
                    desc: "Visualize priority distribution profiles to balance engineering resources and tackle bottlenecks."
                },
                {
                    title: "Real-time Collaboration Ring",
                    desc: "Track active stakeholder presence and status signals to facilitate frictionless cross-team syncs."
                }
            ]
        },
        kanban: {
            title: "Kanban Workflow Orchestration",
            desc: "Drive continuous delivery and execution transparency across lanes custom-tailored for high-performing engineering cycles.",
            badge: '<i class="fa-solid fa-table-columns"></i> Kanban Orchestration Board (Live Platform UI)',
            img: "assets/kanban.png",
            options: [
                {
                    title: "Advanced State Transitions",
                    desc: "Transition work packages smoothly through customized quality gates, peer reviews, and deployment pipelines."
                },
                {
                    title: "Metadata Tag System",
                    desc: "Identify priority, tracking codes, and team assignments at a single glance with smart badge layouts."
                },
                {
                    title: "Collaborative Thread Logs",
                    desc: "Drive context-aware stakeholder alignment and asset sharing directly within active issue threads."
                },
                {
                    title: "Itemized Subtask Matrix",
                    desc: "Deconstruct complex milestones into actionable checklist criteria with clear ownership mappings."
                }
            ]
        },
        planner: {
            title: "Personal Workload Planner",
            desc: "Empower contributors to self-schedule, map critical path timelines, and maintain focus on high-impact objectives.",
            badge: '<i class="fa-solid fa-calendar-check"></i> My Planner & Calendar Tracks (Live Platform UI)',
            img: "assets/planner.png",
            options: [
                {
                    title: "High-Fidelity Calendar Engine",
                    desc: "Map individual deliverables directly onto standard calendar structures to schedule and meet deadlines."
                },
                {
                    title: "Chronological Gantt Tracks",
                    desc: "Examine interactive timeline trajectories highlighting task dependencies and release targets."
                },
                {
                    title: "Personal Task Dashboard",
                    desc: "Keep individuals aligned with unified focus lists, personal due dates, and priority indicators."
                },
                {
                    title: "Adaptive Drag Scheduling",
                    desc: "Instantly reschedule and stretch task scopes directly on visual Gantt tracks with auto-aligned target dates."
                }
            ]
        },
        analytics: {
            title: "Operational Intelligence & Metrics",
            desc: "Leverage predictive charts, delivery velocity trackers, and cross-project dashboards to make data-driven decisions.",
            badge: '<i class="fa-solid fa-chart-line"></i> Operational Analytics Suite (Live Platform UI)',
            img: "assets/analytics.png",
            options: [
                {
                    title: "Cross-Project Shipping Rates",
                    desc: "Compare delivery speeds across key project workspaces side-by-side with clear visual performance graphs."
                },
                {
                    title: "SLA & Bottleneck Analysis",
                    desc: "Identify high-risk delays and projects accumulating overdue scopes before they impact launch schedules."
                },
                {
                    title: "Status Density Distribution",
                    desc: "Review delivery ratios and task phase distributions to keep cross-functional pipelines flowing."
                },
                {
                    title: "Resource Capacity Audits",
                    desc: "Monitor team density mappings and project allocations to maximize engineering efficiency."
                }
            ]
        },
        admin: {
            title: "Enterprise Governance & Administration",
            desc: "Ensure organization-wide security, audit project accesses, and govern team profiles with strict enterprise compliance.",
            badge: '<i class="fa-solid fa-user-gear"></i> System Administration Panel (Live Platform UI)',
            img: "assets/admin.png",
            options: [
                {
                    title: "Role-Based Access Governance",
                    desc: "Assign strict security profiles and roles (Administrator, Manager, Contributor) with granular directories."
                },
                {
                    title: "Namespace Project Scoping",
                    desc: "Provision new project environments, set scope prefixes, and assign dedicated engineering leads."
                },
                {
                    title: "Secure Context Boundaries",
                    desc: "Isolate confidential workspaces so only authorized personnel can access sensitive intellectual properties."
                },
                {
                    title: "Admin Safety Guardrails",
                    desc: "Hardcoded core safety rules preventing configuration lockouts, human errors, or critical setting deletions."
                }
            ]
        }
    };

    // -------------------------------------------------------------
    // Showcase Slide Switcher Logic
    // -------------------------------------------------------------
    const tabBtns = document.querySelectorAll('.tab-btn');
    const screenImg = document.getElementById('screenshot-img');
    const screenBadge = document.getElementById('screen-badge');
    const detailsTitle = document.getElementById('details-title');
    const detailsDesc = document.getElementById('details-desc');
    const optionsContainer = document.getElementById('options-container');

    function switchShowcase(targetKey) {
        const data = screensData[targetKey];
        if (!data) return;

        // Add subtle fade transition effect
        screenImg.style.opacity = '0';
        optionsContainer.style.opacity = '0';

        setTimeout(() => {
            // Set image source and elements
            screenImg.src = data.img;
            screenBadge.innerHTML = data.badge;
            detailsTitle.textContent = data.title;
            detailsDesc.textContent = data.desc;

            // Render Options Checkbox List
            optionsContainer.innerHTML = '';
            data.options.forEach(opt => {
                const item = document.createElement('div');
                item.className = 'option-item';
                item.innerHTML = `
                    <div class="option-icon">
                        <i class="fa-solid fa-square-check"></i>
                    </div>
                    <div class="option-text">
                        <h4>${opt.title}</h4>
                        <p>${opt.desc}</p>
                    </div>
                `;
                optionsContainer.appendChild(item);
            });

            // Restore Opacity
            screenImg.style.opacity = '1';
            optionsContainer.style.opacity = '1';
        }, 150);
    }

    // Connect Tab Button clicks
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = btn.dataset.target;
            
            // Remove active states from other tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // Add active state to clicked tab
            btn.classList.add('active');

            // Switch content
            switchShowcase(target);
        });
    });

    // Initialize Showcase
    switchShowcase('dashboard');

    // -------------------------------------------------------------
    // Checkout Modal popup handlers
    // -------------------------------------------------------------
    const modal = document.getElementById('checkout-overlay');
    const formView = document.getElementById('form-view');
    const successView = document.getElementById('success-view');
    const successEmail = document.getElementById('success-email');

    window.openCheckoutModal = function() {
        formView.classList.remove('hidden');
        successView.classList.add('hidden');
        modal.classList.add('active');
    };

    window.closeCheckoutModal = function() {
        modal.classList.remove('active');
    };

    window.handleCheckoutSubmit = async function(e) {
        e.preventDefault();
        
        const nameVal = document.getElementById('c-name').value.trim();
        const emailVal = document.getElementById('c-email').value.trim();
        const messageVal = document.getElementById('c-message').value.trim();

        if (successEmail) {
            successEmail.textContent = emailVal;
        }

        const submitBtn = e.target.querySelector('button[type="submit"]');
        const origText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Dispatching Request...';

        // Check if hosted on a web origin to call relative API, otherwise target local backend server on port 5000
        const isWeb = window.location.protocol.startsWith('http');
        const targetUrl = isWeb ? '/api/checkout' : 'http://localhost:5000/api/checkout';

        try {
            const response = await fetch(targetUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: nameVal,
                    email: emailVal,
                    message: messageVal
                })
            });

            if (response.ok) {
                console.log("Lead request email successfully dispatched!");
            } else {
                console.error("API response error:", await response.text());
            }
        } catch (err) {
            console.error("Failed to POST lead details:", err);
        }

        // Delay briefly to allow standard animation feeling
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
            
            // Toggle screen to success
            formView.classList.add('hidden');
            successView.classList.remove('hidden');
        }, 1200);
    };

    // Close modal by clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCheckoutModal();
        }
    });
});
