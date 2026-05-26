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
            title: "Workspace Analytics Dashboard",
            desc: "Assess the health, progress, and speed of all project teams under a single consolidated control center.",
            badge: '<i class="fa-solid fa-chart-pie"></i> Dashboard Screen (Original UI Mockup)',
            img: "assets/dashboard.png",
            options: [
                {
                    title: "Total Task Metrics & Progress",
                    desc: "Live analytics counters tracking exact ratios of completed vs pending tasks in real-time."
                },
                {
                    title: "Circular Completion Gauge",
                    desc: "Interactive completion progress gauge displaying overall done rates computed automatically."
                },
                {
                    title: "Priority Workload Distribution",
                    desc: "Doughnut and bar charts separating high, medium, and low priority tickets in visual layers."
                },
                {
                    title: "Active Team Online Indicators",
                    desc: "Monitor active team member presence (Available, Busy, Away) directly with colored status rings."
                }
            ]
        },
        kanban: {
            title: "Developer Kanban Columns",
            desc: "Organize, prioritize, and drag-and-drop tasks throughout custom developer lanes.",
            badge: '<i class="fa-solid fa-table-columns"></i> Kanban Board Screen (Original UI Mockup)',
            img: "assets/kanban.png",
            options: [
                {
                    title: "Custom Column State Transitions",
                    desc: "Flow cards smoothly across multiple developer columns: To Do, In Progress, Review, and Done."
                },
                {
                    title: "Member Avatars & Tag Badges",
                    desc: "Visually stamp assignees, unique ticket key IDs, and priority tags directly on the card face."
                },
                {
                    title: "Integrated Ticket Chat threads",
                    desc: "Engage in developer chat logs directly inside individual task threads to coordinate code merges."
                },
                {
                    title: "Interactive Descriptions & Checklists",
                    desc: "Log detailed specs, check off itemized checklists, and drag-drop subtasks seamlessly."
                }
            ]
        },
        planner: {
            title: "My Planner & Task Schedules",
            desc: "Coordinate personal agendas, calendars, and timelines to manage workloads effectively.",
            badge: '<i class="fa-solid fa-calendar-check"></i> My Planner Screen (Original UI Mockup)',
            img: "assets/planner.png",
            options: [
                {
                    title: "Interactive FullCalendar Grid",
                    desc: "Map tasks directly onto weekly/monthly calendar slots to visual schedules and track targets."
                },
                {
                    title: "Comprehensive Gantt timeline Tracks",
                    desc: "Review chronological Gantt timeline paths displaying project scopes and milestones."
                },
                {
                    title: "Personal Planner Item Lists",
                    desc: "Quickly review task checkoffs, due priorities, and targets custom-tailored for your user account."
                },
                {
                    title: "Direct Date-Drag Controls",
                    desc: "Drag the margins of Gantt chart columns to stretch or shorten due dates in real-time."
                }
            ]
        },
        analytics: {
            title: "PM Reports & Project Analytics",
            desc: "Examine advanced project-wise timelines, overdue parameters, and team metrics.",
            badge: '<i class="fa-solid fa-chart-line"></i> Analytics Screen (Original UI Mockup)',
            img: "assets/analytics.png",
            options: [
                {
                    title: "Horizontal Project-wise Completion",
                    desc: "Compare the shipping rate of multiple project keys side-by-side in horizontal graphs."
                },
                {
                    title: "Overdue Velocity Traps",
                    desc: "Assess critical bottlenecks with lists pointing to the projects accumulating overdue tickets."
                },
                {
                    title: "Status Breakdown per Project",
                    desc: "Review overall done percentages and progress ratios across separate projects."
                },
                {
                    title: "Members density counts",
                    desc: "Track team counts allocated to specific workspaces to balance workloads correctly."
                }
            ]
        },
        admin: {
            title: "System & User Administration",
            desc: "Manage user profiles, permissions, passwords, and project access directories.",
            badge: '<i class="fa-solid fa-user-gear"></i> Admin Dashboard (Original UI Mockup)',
            img: "assets/admin.png",
            options: [
                {
                    title: "Granular Role Management",
                    desc: "Add new users, edit existing details, assign credentials, and set roles (Admin, PM, Employee)."
                },
                {
                    title: "Custom Project key Registration",
                    desc: "Register new project scopes, assign prefix keys (e.g. WEB, IOS), and designate managers."
                },
                {
                    title: "Secure Project Access Allocations",
                    desc: "Allocate and secure project directories so only assigned team members can view project boards."
                },
                {
                    title: "Safe Admin Lockout Protection",
                    desc: "Hardcoded safety parameters preventing accidental deletion or lockout of default system admins."
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
