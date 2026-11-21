/**
 * EduNotice & Circular Sync - Digital Notice Board & Circular Acknowledgement System
 * Enterprise / Institutional Edition for Apex Institute of Technology & Sciences
 */

// --- INITIAL SEED DATA ---
const INITIAL_USERS = [
  {
    id: 'user_admin',
    name: 'Dr. K. S. Raman',
    role: 'admin',
    roleLabel: 'Dean of Academics & Admin',
    department: 'Central Administration',
    email: 'dean@apex.edu.in',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'user_faculty',
    name: 'Prof. Ananya Sharma',
    role: 'faculty',
    roleLabel: 'Associate Professor & HOD I/C',
    department: 'Computer Science & Engineering',
    email: 'ananya.sharma@apex.edu.in',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'user_student1',
    name: 'Aarav Patel',
    role: 'student',
    roleLabel: '3rd Year B.Tech (Roll: 2024CS089)',
    department: 'Computer Science & Engineering',
    email: 'aarav.p@student.apex.edu.in',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'user_student2',
    name: 'Sneha Gupta',
    role: 'student',
    roleLabel: '3rd Year B.Tech (Roll: 2024CS112)',
    department: 'Computer Science & Engineering',
    email: 'sneha.g@student.apex.edu.in',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'user_student3',
    name: 'Vikram Sengupta',
    role: 'student',
    roleLabel: '2nd Year B.Tech (Roll: 2024EC045)',
    department: 'Electronics & Communication',
    email: 'vikram.s@student.apex.edu.in',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  }
];

const INITIAL_NOTICES = [
  {
    id: 'CIRC-2026-101',
    refNo: 'AITS/DEAN/2026/CIR-101',
    title: 'Statutory Anti-Ragging Undertaking & Code of Academic Integrity 2026-27',
    category: 'administrative',
    priority: 'urgent',
    targetAudience: 'students',
    targetDepartment: 'all',
    isMandatory: true,
    publishedAt: '2026-11-20T09:30:00Z',
    deadline: '2026-11-28',
    isPinned: true,
    author: {
      name: 'Dr. K. S. Raman',
      role: 'Dean of Academics',
      department: 'Central Administration'
    },
    summary: 'Mandatory digital undertaking required from all enrolled undergraduate and postgraduate students as per Supreme Court & UGC statutory directives.',
    content: `All students enrolled across all degree programs for the academic cycle 2026-2027 are hereby instructed to read and digitally affirm the Statutory Anti-Ragging Policy and Institutional Code of Conduct.

Key Directives:
1. Zero Tolerance Policy: Apex Institute strictly enforces zero tolerance towards ragging, harassment, or verbal intimidation in physical or digital spaces.
2. Disciplinary Consequences: Violation invites immediate suspension, institutional rustication, and filing of formal FIR as mandated by state legislation.
3. Hostels & Laboratories: Extended surveillance and anti-ragging squad spot-checks remain operational 24/7.
4. Mandatory Digital Acknowledgment: Every student must digitally submit this undertaking before November 28, 2026, failing which laboratory clearance and examination admit cards shall be withheld.

By acknowledging this circular, you declare under penalty of institutional disciplinary action that you have never engaged in and shall never partake in any form of ragging.`,
    attachment: {
      filename: 'Apex_Statutory_Anti_Ragging_Affidavit_2026.pdf',
      size: '1.8 MB',
      type: 'pdf'
    },
    acknowledgements: [
      {
        userId: 'user_student2',
        userName: 'Sneha Gupta',
        userRole: 'student',
        department: 'Computer Science & Engineering',
        timestamp: '2026-11-20T11:45:10Z',
        verificationCode: 'ACK-8F29-2026-0091',
        ipAddress: '172.16.24.108 (Campus Wi-Fi AP-04)'
      }
    ],
    bookmarkedBy: ['user_student1', 'user_faculty'],
    archived: false
  },
  {
    id: 'CIRC-2026-102',
    refNo: 'AITS/COE/2026/SEM-EXAM-04',
    title: 'End-Semester Theory & Practical Examination Schedule - Winter 2026',
    category: 'examinations',
    priority: 'high',
    targetAudience: 'all',
    targetDepartment: 'all',
    isMandatory: true,
    publishedAt: '2026-11-19T14:15:00Z',
    deadline: '2026-11-26',
    isPinned: true,
    author: {
      name: 'Controller of Examinations',
      role: 'Examination Cell',
      department: 'Central Administration'
    },
    summary: 'Comprehensive date-sheet for Practical Assessments (Dec 01 - Dec 08) and University Theory Exams (Dec 12 - Dec 30). Mandatory minimum 75% attendance verification.',
    content: `The Office of the Controller of Examinations announces the finalized schedule for Winter 2026 End-Semester Examinations for all branches of B.Tech, M.Tech, and MCA.

Important Instructions:
1. Hall Ticket Dispatch: Digital hall tickets with unique QR verification will be unlocked only for students who have completed fee dues and digitally acknowledged this notification.
2. Mandatory 75% Attendance: Students failing to meet the minimum statutory attendance threshold of 75% across theory and lab credits will not be permitted into examination halls.
3. Schedule Breakdown:
   - Practical & Viva-Voce Examinations: 01 December 2026 to 08 December 2026
   - Theory Examinations: 12 December 2026 to 30 December 2026
4. Permitted Items: Only non-programmable scientific calculators (FX-991ES or equivalent), student ID cards, and physical hall tickets are permitted.

Students and Faculty members assigned invigilation duties must acknowledge receipt of this timetable.`,
    attachment: {
      filename: 'Winter_2026_End_Sem_Timetable_Detailed.pdf',
      size: '2.4 MB',
      type: 'pdf'
    },
    acknowledgements: [
      {
        userId: 'user_faculty',
        userName: 'Prof. Ananya Sharma',
        userRole: 'faculty',
        department: 'Computer Science & Engineering',
        timestamp: '2026-11-19T16:20:00Z',
        verificationCode: 'ACK-3C18-2026-0044',
        ipAddress: '172.16.12.55 (Faculty Wing-B)'
      },
      {
        userId: 'user_student2',
        userName: 'Sneha Gupta',
        userRole: 'student',
        department: 'Computer Science & Engineering',
        timestamp: '2026-11-20T08:15:22Z',
        verificationCode: 'ACK-3C18-2026-0078',
        ipAddress: '172.16.24.110 (Campus Wi-Fi)'
      }
    ],
    bookmarkedBy: ['user_student1'],
    archived: false
  },
  {
    id: 'CIRC-2026-103',
    refNo: 'AITS/CSE/2026/FAC-DUTY-12',
    title: 'Faculty Invigilation Roster & Centralized Paper Evaluation Norms',
    category: 'academic',
    priority: 'high',
    targetAudience: 'faculty',
    targetDepartment: 'all',
    isMandatory: true,
    publishedAt: '2026-11-18T10:00:00Z',
    deadline: '2026-11-24',
    isPinned: false,
    author: {
      name: 'Dr. K. S. Raman',
      role: 'Dean of Academics',
      department: 'Central Administration'
    },
    summary: 'Roster allocations for internal faculty invigilation shifts, confidentiality norms, and rubric-driven centralized script evaluation timelines.',
    content: `All teaching faculty across engineering departments are allocated specific slots for examination duty. 

Directives for Faculty Members:
1. Reporting Protocol: Invigilators must report to the Confidential Exam Vault 45 minutes prior to the commencement of each session.
2. Mobile Free Zone: Examination halls are strictly zero-mobile zones for invigilators and students alike.
3. Central Evaluation: Script evaluation must be conducted strictly within the designated Central Assessment Hall (Room 304). No answer scripts may be removed from the campus.
4. Submission Deadline: Evaluated marks must be keyed into the ERP portal within 72 hours of examination conclusion.

Please acknowledge this circular to confirm acceptance of your invigilation assignments.`,
    attachment: {
      filename: 'Faculty_Invigilation_Roster_Allocation_Winter2026.pdf',
      size: '1.2 MB',
      type: 'pdf'
    },
    acknowledgements: [],
    bookmarkedBy: [],
    archived: false
  },
  {
    id: 'CIRC-2026-104',
    refNo: 'AITS/TPO/2026/CAMPUS-TECHCORP',
    title: 'Campus Recruitment: TechCorp Systems Eligibility & Pre-Placement Talk',
    category: 'placements',
    priority: 'urgent',
    targetAudience: 'students',
    targetDepartment: 'Computer Science & Engineering',
    isMandatory: true,
    publishedAt: '2026-11-21T08:00:00Z',
    deadline: '2026-11-25',
    isPinned: true,
    author: {
      name: 'Training & Placement Office',
      role: 'T&P Officer',
      department: 'Corporate Relations'
    },
    summary: 'Mandatory registration for shortlisted 3rd and 4th year CSE/IT students. CTC Package: ₹18.5 LPA. Pre-Placement Talk on Nov 26 in Auditorium-1.',
    content: `TechCorp Systems (Global Enterprise Cloud Solutions) will be visiting Apex Institute for on-campus full-time and internship hiring for the role of Associate Software Engineer & Cloud Reliability Engineer.

Eligibility Criteria:
- Degree: B.Tech (CSE, IT, ECE)
- CGPA: 7.50 and above with zero standing arrears
- Compensation: ₹18.50 LPA (Full-time) + ₹45,000/month (6-month internship stipend)

Process Timeline:
- Pre-Placement Talk (PPT): 26 November 2026, 10:00 AM (Auditorium 1 - Formal Dress Code)
- Online Coding Assessment: 26 November 2026, 02:00 PM (CAD Lab 1 & 2)
- Technical & Leadership Interviews: 27 November 2026

Shortlisted candidates MUST digitally acknowledge this circular to confirm their seat for the online proctored coding assessment. Candidates who fail to acknowledge will be automatically de-listed.`,
    attachment: {
      filename: 'TechCorp_Job_Description_Curriculum_2026.pdf',
      size: '950 KB',
      type: 'pdf'
    },
    acknowledgements: [],
    bookmarkedBy: ['user_student1'],
    archived: false
  },
  {
    id: 'CIRC-2026-105',
    refNo: 'AITS/SAC/2026/HACK-01',
    title: 'HackNovate 2026: 36-Hour National Collegiate Hackathon - Call for Teams',
    category: 'events',
    priority: 'normal',
    targetAudience: 'all',
    targetDepartment: 'all',
    isMandatory: false,
    publishedAt: '2026-11-17T11:20:00Z',
    deadline: '2026-12-05',
    isPinned: false,
    author: {
      name: 'Prof. Ananya Sharma',
      role: 'Faculty Coordinator - ACM Chapter',
      department: 'Computer Science & Engineering'
    },
    summary: 'Annual Flagship Hackathon with prize pool of ₹2,50,000 sponsored by tech partners. Tracks in Generative AI, Sustainable Tech, Smart Mobility, and Cybersecurity.',
    content: `The Department of Computer Science & Engineering in association with the ACM Student Chapter cordially invites student teams (2-4 members) from all departments to register for HackNovate 2026.

Highlights:
- 36 Hours non-stop building with complimentary food, sleeping lounges, and high-speed fiber internet.
- Mentorship from senior engineering managers at leading tech startups.
- Direct interview fast-tracks for the top 5 finishing teams.
- Grand Prize: ₹1,20,000 | Runner-up: ₹80,000 | Best Freshers Team: ₹50,000.

Registrations close on December 05, 2026 via the portal.`,
    attachment: {
      filename: 'HackNovate_2026_Rulebook_Themes.pdf',
      size: '3.1 MB',
      type: 'pdf'
    },
    acknowledgements: [
      {
        userId: 'user_student1',
        userName: 'Aarav Patel',
        userRole: 'student',
        department: 'Computer Science & Engineering',
        timestamp: '2026-11-18T14:10:00Z',
        verificationCode: 'ACK-99AA-2026-0012',
        ipAddress: '172.16.24.45'
      }
    ],
    bookmarkedBy: ['user_student1', 'user_student3'],
    archived: false
  },
  {
    id: 'CIRC-2026-106',
    refNo: 'AITS/IT/2026/MAINT-09',
    title: 'Planned Campus Wi-Fi & Data Center Migration Window this Sunday',
    category: 'maintenance',
    priority: 'low',
    targetAudience: 'all',
    targetDepartment: 'all',
    isMandatory: false,
    publishedAt: '2026-11-16T16:00:00Z',
    deadline: '2026-11-23',
    isPinned: false,
    author: {
      name: 'IT Services Directorate',
      role: 'Network Administrator',
      department: 'Central Administration'
    },
    summary: 'Routine maintenance of campus backbone optical fiber links and cloud firewall upgrade. Internet access will be intermittently unavailable between 02:00 AM and 06:00 AM.',
    content: `Please be advised that the Central IT Infrastructure Division will perform scheduled maintenance and firmware updates on core distribution switches on Sunday, November 23, 2026.

Impact Summary:
- Campus Wi-Fi (Apex_Student & Apex_Staff) will experience sporadic outages from 02:00 AM to 06:00 AM.
- Academic ERP and Library E-Resource portals will be inaccessible during this window.
- Normal connectivity will be restored by 06:30 AM Sunday. We regret any inconvenience caused.`,
    attachment: null,
    acknowledgements: [],
    bookmarkedBy: [],
    archived: false
  }
];

// --- STORE & STATE MANAGEMENT ---
class NoticeAppStore {
  constructor() {
    this.STORAGE_KEY_NOTICES = 'edunotice_notices_v1';
    this.STORAGE_KEY_USER = 'edunotice_current_user_id';
    this.users = INITIAL_USERS;
    this.currentUserId = localStorage.getItem(this.STORAGE_KEY_USER) || 'user_student1';
    this.notices = this.loadNotices();
    this.activeFilterCategory = 'all';
    this.activeFilterStatus = 'all'; // 'all', 'pending_ack', 'acknowledged', 'bookmarked', 'urgent'
    this.searchQuery = '';
    this.selectedNoticeId = null;
  }

  loadNotices() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY_NOTICES);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Failed to parse notices from localStorage:', e);
    }
    this.saveNotices(INITIAL_NOTICES);
    return INITIAL_NOTICES;
  }

  saveNotices(notices) {
    this.notices = notices;
    localStorage.setItem(this.STORAGE_KEY_NOTICES, JSON.stringify(this.notices));
  }

  getCurrentUser() {
    return this.users.find(u => u.id === this.currentUserId) || this.users[0];
  }

  setCurrentUser(userId) {
    this.currentUserId = userId;
    localStorage.setItem(this.STORAGE_KEY_USER, userId);
  }

  resetAllData() {
    localStorage.removeItem(this.STORAGE_KEY_NOTICES);
    this.notices = JSON.parse(JSON.stringify(INITIAL_NOTICES));
    this.saveNotices(this.notices);
  }

  addNotice(newNotice) {
    this.notices.unshift(newNotice);
    this.saveNotices(this.notices);
  }

  deleteNotice(id) {
    this.notices = this.notices.filter(n => n.id !== id);
    this.saveNotices(this.notices);
  }

  togglePin(id) {
    const notice = this.notices.find(n => n.id === id);
    if (notice) {
      notice.isPinned = !notice.isPinned;
      this.saveNotices(this.notices);
    }
  }

  toggleBookmark(id, userId) {
    const notice = this.notices.find(n => n.id === id);
    if (notice) {
      if (!notice.bookmarkedBy) notice.bookmarkedBy = [];
      const idx = notice.bookmarkedBy.indexOf(userId);
      if (idx >= 0) {
        notice.bookmarkedBy.splice(idx, 1);
      } else {
        notice.bookmarkedBy.push(userId);
      }
      this.saveNotices(this.notices);
    }
  }

  acknowledgeNotice(noticeId, user) {
    const notice = this.notices.find(n => n.id === noticeId);
    if (!notice) return false;
    if (!notice.acknowledgements) notice.acknowledgements = [];

    // Check if already acknowledged
    const existing = notice.acknowledgements.find(a => a.userId === user.id);
    if (existing) return true;

    // Generate simulated cryptographic verification token
    const randomHex = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, '0');
    const verificationCode = `ACK-${randomHex}-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const ackRecord = {
      userId: user.id,
      userName: user.name,
      userRole: user.role,
      department: user.department,
      timestamp: new Date().toISOString(),
      verificationCode: verificationCode,
      ipAddress: `172.16.${Math.floor(10 + Math.random() * 40)}.${Math.floor(2 + Math.random() * 250)} (Campus SSL Session)`
    };

    notice.acknowledgements.push(ackRecord);
    this.saveNotices(this.notices);
    return ackRecord;
  }

  getEligibleRecipients(notice) {
    // Determine which users in the system must acknowledge or receive this notice
    return this.users.filter(user => {
      // Admin doesn't need to acknowledge their own or general notices unless targeted
      if (notice.targetAudience === 'all') {
        return user.role !== 'admin'; // all staff and students
      }
      if (notice.targetAudience === 'students' && user.role === 'student') {
        if (notice.targetDepartment && notice.targetDepartment !== 'all') {
          return user.department.toLowerCase().includes(notice.targetDepartment.toLowerCase());
        }
        return true;
      }
      if (notice.targetAudience === 'faculty' && user.role === 'faculty') {
        return true;
      }
      return false;
    });
  }

  getComplianceStats(notice) {
    const eligible = this.getEligibleRecipients(notice);
    const eligibleIds = new Set(eligible.map(u => u.id));
    
    // Count how many eligible acknowledged
    const acks = notice.acknowledgements || [];
    const acknowledgedCount = acks.filter(a => eligibleIds.has(a.userId)).length;
    const totalCount = eligible.length || 1;
    const percentage = Math.round((acknowledgedCount / totalCount) * 100);

    return {
      eligibleCount: eligible.length,
      acknowledgedCount,
      pendingCount: eligible.length - acknowledgedCount,
      percentage: Math.min(100, percentage),
      eligibleUsers: eligible
    };
  }

  getGlobalKPIs() {
    const currentUser = this.getCurrentUser();
    const relevantNotices = this.notices.filter(n => this.isNoticeVisibleToUser(n, currentUser));
    
    const mandatoryNotices = relevantNotices.filter(n => n.isMandatory);
    let myPendingSignatures = 0;
    
    mandatoryNotices.forEach(n => {
      const acks = n.acknowledgements || [];
      const isSigned = acks.some(a => a.userId === currentUser.id);
      if (!isSigned) {
        myPendingSignatures++;
      }
    });

    const totalUrgent = relevantNotices.filter(n => n.priority === 'urgent').length;

    // Overall compliance calculation across all mandatory circulars
    let totalEligibleAcross = 0;
    let totalAckAcross = 0;
    this.notices.filter(n => n.isMandatory).forEach(n => {
      const stats = this.getComplianceStats(n);
      totalEligibleAcross += stats.eligibleCount;
      totalAckAcross += stats.acknowledgedCount;
    });
    const institutionalComplianceRate = totalEligibleAcross > 0 
      ? Math.round((totalAckAcross / totalEligibleAcross) * 100) 
      : 100;

    return {
      totalNotices: relevantNotices.length,
      myPendingSignatures,
      totalUrgent,
      institutionalComplianceRate
    };
  }

  isNoticeVisibleToUser(notice, user) {
    if (user.role === 'admin') return true; // admin sees everything

    if (notice.targetAudience === 'all') return true;

    if (notice.targetAudience === 'faculty') {
      return user.role === 'faculty';
    }

    if (notice.targetAudience === 'students') {
      if (user.role !== 'student') return false;
      if (notice.targetDepartment && notice.targetDepartment !== 'all') {
        return user.department.toLowerCase().includes(notice.targetDepartment.toLowerCase());
      }
      return true;
    }

    return true;
  }
}

// --- TOAST NOTIFICATION UTILITY ---
const Toast = {
  show(title, message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item flex items-start gap-3 p-4 rounded-xl shadow-xl border bg-white max-w-sm';

    let iconSvg = '';
    let borderClass = 'border-slate-200';

    if (type === 'success') {
      borderClass = 'border-emerald-300 bg-emerald-50/90 text-emerald-900';
      iconSvg = `<svg class="w-6 h-6 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
    } else if (type === 'urgent' || type === 'error') {
      borderClass = 'border-rose-300 bg-rose-50/90 text-rose-900';
      iconSvg = `<svg class="w-6 h-6 text-rose-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`;
    } else {
      borderClass = 'border-indigo-300 bg-indigo-50/90 text-indigo-900';
      iconSvg = `<svg class="w-6 h-6 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
    }

    toast.classList.add(...borderClass.split(' '));
    toast.innerHTML = `
      ${iconSvg}
      <div class="flex-1">
        <h4 class="text-sm font-bold tracking-tight">${title}</h4>
        <p class="text-xs text-slate-600 mt-0.5">${message}</p>
      </div>
      <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-600 p-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }
};

// --- APP CONTROLLER ---
class EduNoticeApp {
  constructor() {
    this.store = new NoticeAppStore();
    this.init();
  }

  init() {
    this.bindEvents();
    this.renderUserSwitcher();
    this.renderKPIs();
    this.renderUrgentBanner();
    this.renderNoticesList();
    this.updateNotificationBadge();
  }

  bindEvents() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.store.searchQuery = e.target.value.toLowerCase().trim();
        this.renderNoticesList();
      });
    }

    // Category pills
    document.querySelectorAll('.filter-category-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-category-btn').forEach(b => {
          b.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
          b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
        });
        btn.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
        btn.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200');

        this.store.activeFilterCategory = btn.dataset.category;
        this.renderNoticesList();
      });
    });

    // Status filter tabs
    document.querySelectorAll('.filter-status-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-status-tab').forEach(t => {
          t.classList.remove('text-indigo-600', 'border-indigo-600', 'font-semibold');
          t.classList.add('text-slate-500', 'border-transparent', 'font-medium');
        });
        tab.classList.add('text-indigo-600', 'border-indigo-600', 'font-semibold');
        tab.classList.remove('text-slate-500', 'border-transparent', 'font-medium');

        this.store.activeFilterStatus = tab.dataset.status;
        this.renderNoticesList();
      });
    });

    // Reset data button
    const btnReset = document.getElementById('btnResetData');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        if (confirm('Reset demo notices, circulars, and acknowledgements to institutional default state?')) {
          this.store.resetAllData();
          this.renderKPIs();
          this.renderUrgentBanner();
          this.renderNoticesList();
          Toast.show('Data Restored', 'Notice board and circular roster reset to defaults.', 'info');
        }
      });
    }

    // Create notice modal trigger
    const btnOpenCreate = document.getElementById('btnOpenCreateModal');
    if (btnOpenCreate) {
      btnOpenCreate.addEventListener('click', () => {
        this.openCreateModal();
      });
    }

    // Modal close backdrops & escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });

    // Create notice form submit
    const createNoticeForm = document.getElementById('createNoticeForm');
    if (createNoticeForm) {
      createNoticeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCreateNoticeSubmit();
      });
    }
  }

  renderUserSwitcher() {
    const userSwitcher = document.getElementById('userSwitcher');
    const currentUser = this.store.getCurrentUser();

    if (userSwitcher) {
      userSwitcher.innerHTML = `
        <div class="flex items-center gap-2.5">
          <img src="${currentUser.avatar}" alt="${currentUser.name}" class="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500/20" />
          <div class="text-left hidden sm:block">
            <div class="text-xs font-semibold text-slate-800 leading-tight">${currentUser.name}</div>
            <div class="text-[11px] text-slate-500 flex items-center gap-1">
              <span class="inline-block w-1.5 h-1.5 rounded-full ${currentUser.role === 'admin' ? 'bg-amber-500' : currentUser.role === 'faculty' ? 'bg-blue-500' : 'bg-emerald-500'}"></span>
              ${currentUser.roleLabel.split('(')[0]}
            </div>
          </div>
        </div>
        <select id="userRoleSelect" class="ml-2 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-1.5 px-2.5 rounded-lg border-0 cursor-pointer focus:ring-2 focus:ring-indigo-500 transition">
          ${this.store.users.map(u => `
            <option value="${u.id}" ${u.id === currentUser.id ? 'selected' : ''}>
              Switch: ${u.name} (${u.role.toUpperCase()})
            </option>
          `).join('')}
        </select>
      `;

      const select = document.getElementById('userRoleSelect');
      if (select) {
        select.addEventListener('change', (e) => {
          this.switchPersona(e.target.value);
        });
      }
    }

    // Also update role badge in header / action visibility
    const adminActions = document.getElementById('adminActionContainer');
    if (adminActions) {
      if (currentUser.role === 'admin' || currentUser.role === 'faculty') {
        adminActions.classList.remove('hidden');
      } else {
        adminActions.classList.add('hidden');
      }
    }
  }

  switchPersona(userId) {
    this.store.setCurrentUser(userId);
    const user = this.store.getCurrentUser();
    this.renderUserSwitcher();
    this.renderKPIs();
    this.renderUrgentBanner();
    this.renderNoticesList();
    this.updateNotificationBadge();
    Toast.show('Switched Identity', `Viewing system as ${user.name} (${user.role.toUpperCase()})`, 'info');
  }

  updateNotificationBadge() {
    const badge = document.getElementById('notificationBadge');
    if (!badge) return;

    const user = this.store.getCurrentUser();
    const kpis = this.store.getGlobalKPIs();

    if (kpis.myPendingSignatures > 0) {
      badge.textContent = kpis.myPendingSignatures;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }

  renderKPIs() {
    const kpis = this.store.getGlobalKPIs();
    const currentUser = this.store.getCurrentUser();

    const kpiTotal = document.getElementById('kpiTotalNotices');
    const kpiPending = document.getElementById('kpiPendingSignatures');
    const kpiPendingLabel = document.getElementById('kpiPendingLabel');
    const kpiUrgent = document.getElementById('kpiUrgentAlerts');
    const kpiCompliance = document.getElementById('kpiComplianceRate');

    if (kpiTotal) kpiTotal.textContent = kpis.totalNotices;
    if (kpiUrgent) kpiUrgent.textContent = kpis.totalUrgent;

    if (kpiPending) {
      if (currentUser.role === 'admin') {
        // Admin sees total circulars needing signoffs
        kpiPending.textContent = this.store.notices.filter(n => n.isMandatory).length;
        if (kpiPendingLabel) kpiPendingLabel.textContent = 'Mandatory Circulars';
      } else {
        kpiPending.textContent = kpis.myPendingSignatures;
        if (kpiPendingLabel) kpiPendingLabel.textContent = 'Your Pending Signatures';
      }
    }

    if (kpiCompliance) {
      kpiCompliance.textContent = `${kpis.institutionalComplianceRate}%`;
    }
  }

  renderUrgentBanner() {
    const banner = document.getElementById('urgentCircularBanner');
    if (!banner) return;

    const currentUser = this.store.getCurrentUser();
    // Find unacknowledged urgent mandatory circular for this user
    const urgentNotice = this.store.notices.find(n => {
      if (n.priority !== 'urgent' || !n.isMandatory) return false;
      if (!this.store.isNoticeVisibleToUser(n, currentUser)) return false;
      const acks = n.acknowledgements || [];
      return !acks.some(a => a.userId === currentUser.id);
    });

    if (urgentNotice && currentUser.role !== 'admin') {
      banner.classList.remove('hidden');
      banner.innerHTML = `
        <div class="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 rounded-2xl p-4 sm:p-5 text-white shadow-lg shadow-rose-900/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex items-start gap-3.5">
            <div class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 animate-soft-pulse">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[11px] font-black uppercase tracking-wider bg-black/30 px-2 py-0.5 rounded-full">Urgent Action Required</span>
                <span class="text-xs text-rose-100">Deadline: ${urgentNotice.deadline}</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold mt-1 text-white leading-snug">${urgentNotice.title}</h3>
              <p class="text-xs sm:text-sm text-rose-100/90 mt-0.5 line-clamp-1">${urgentNotice.summary}</p>
            </div>
          </div>
          <button onclick="window.app.openNoticeModal('${urgentNotice.id}')" class="whitespace-nowrap px-4 py-2.5 bg-white text-rose-700 hover:bg-rose-50 font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center gap-1.5 flex-shrink-0 self-stretch sm:self-auto justify-center">
            Review & Sign Now
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      `;
    } else {
      banner.classList.add('hidden');
      banner.innerHTML = '';
    }
  }

  getFilteredNotices() {
    const currentUser = this.store.getCurrentUser();
    let list = this.store.notices.filter(n => this.store.isNoticeVisibleToUser(n, currentUser));

    // Category filter
    if (this.store.activeFilterCategory !== 'all') {
      list = list.filter(n => n.category === this.store.activeFilterCategory);
    }

    // Status filter
    if (this.store.activeFilterStatus === 'pending_ack') {
      list = list.filter(n => {
        if (!n.isMandatory) return false;
        const acks = n.acknowledgements || [];
        return !acks.some(a => a.userId === currentUser.id);
      });
    } else if (this.store.activeFilterStatus === 'acknowledged') {
      list = list.filter(n => {
        const acks = n.acknowledgements || [];
        return acks.some(a => a.userId === currentUser.id);
      });
    } else if (this.store.activeFilterStatus === 'bookmarked') {
      list = list.filter(n => {
        const bookmarks = n.bookmarkedBy || [];
        return bookmarks.includes(currentUser.id);
      });
    } else if (this.store.activeFilterStatus === 'urgent') {
      list = list.filter(n => n.priority === 'urgent');
    }

    // Search query
    if (this.store.searchQuery) {
      const q = this.store.searchQuery;
      list = list.filter(n => 
        n.title.toLowerCase().includes(q) ||
        n.refNo.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.author.name.toLowerCase().includes(q) ||
        n.author.department.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q)
      );
    }

    // Sort: Pinned first, then urgent, then date
    list.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;

      const priorityWeight = { urgent: 4, high: 3, normal: 2, low: 1 };
      const diff = (priorityWeight[b.priority] || 0) - (priorityWeight[a.priority] || 0);
      if (diff !== 0) return diff;

      return new Date(b.publishedAt) - new Date(a.publishedAt);
    });

    return list;
  }

  renderNoticesList() {
    const container = document.getElementById('noticesContainer');
    const emptyState = document.getElementById('emptyState');
    if (!container) return;

    const notices = this.getFilteredNotices();
    const currentUser = this.store.getCurrentUser();

    if (notices.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    container.innerHTML = notices.map(notice => {
      const acks = notice.acknowledgements || [];
      const hasAcknowledged = acks.some(a => a.userId === currentUser.id);
      const isBookmarked = (notice.bookmarkedBy || []).includes(currentUser.id);
      const compliance = this.store.getComplianceStats(notice);

      // Card border highlight
      let borderHighlight = '';
      if (notice.isMandatory && !hasAcknowledged && currentUser.role !== 'admin') {
        borderHighlight = notice.priority === 'urgent' ? 'shimmer-border-urgent' : 'shimmer-border-mandatory';
      } else if (hasAcknowledged) {
        borderHighlight = 'shimmer-border-success';
      }

      // Priority badge
      const priorityBadges = {
        urgent: `<span class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200"><span class="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse"></span>URGENT</span>`,
        high: `<span class="inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">HIGH PRIORITY</span>`,
        normal: `<span class="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">NORMAL</span>`,
        low: `<span class="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">INFORMATIONAL</span>`
      };

      // Category badge
      const categoryLabels = {
        academic: 'Academic',
        examinations: 'Examinations',
        administrative: 'Administration',
        events: 'Events & Tech',
        placements: 'Placement & Internships',
        maintenance: 'Maintenance'
      };

      // Format date
      const pubDate = new Date(notice.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      return `
        <article class="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between ${borderHighlight}">
          <div class="p-5 sm:p-6">
            <!-- Header meta -->
            <div class="flex items-start justify-between gap-3 mb-3">
              <div class="flex flex-wrap items-center gap-2">
                ${priorityBadges[notice.priority] || ''}
                <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  ${categoryLabels[notice.category] || notice.category}
                </span>
                ${notice.isPinned ? `
                  <span class="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                    <svg class="w-3 h-3 fill-indigo-600" viewBox="0 0 24 24"><path d="M16 12V4H17V2H7V4H8V12L6 14V16H11V22H13V16H18V14L16 12Z"/></svg>
                    Pinned
                  </span>
                ` : ''}
              </div>

              <!-- Action buttons: Bookmark & Admin More -->
              <div class="flex items-center gap-1.5 flex-shrink-0">
                <button onclick="window.app.toggleBookmark('${notice.id}')" title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark Notice'}" class="p-1.5 rounded-lg hover:bg-slate-100 transition ${isBookmarked ? 'text-amber-500' : 'text-slate-400 hover:text-slate-600'}">
                  <svg class="w-5 h-5 ${isBookmarked ? 'fill-amber-500' : 'fill-none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                </button>

                ${currentUser.role === 'admin' ? `
                  <button onclick="window.app.togglePin('${notice.id}')" title="${notice.isPinned ? 'Unpin' : 'Pin to top'}" class="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-indigo-600 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                  </button>
                  <button onclick="window.app.deleteNotice('${notice.id}')" title="Delete Notice" class="p-1.5 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                ` : ''}
              </div>
            </div>

            <!-- Reference Number -->
            <div class="text-[11px] font-mono-code text-slate-400 mb-1">
              Ref: ${notice.refNo}
            </div>

            <!-- Title -->
            <h3 onclick="window.app.openNoticeModal('${notice.id}')" class="text-base sm:text-lg font-bold text-slate-900 leading-snug cursor-pointer hover:text-indigo-600 transition mb-2">
              ${notice.title}
            </h3>

            <!-- Summary -->
            <p class="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
              ${notice.summary}
            </p>

            <!-- Attachment badge if any -->
            ${notice.attachment ? `
              <div onclick="window.app.openPdfViewerModal('${notice.attachment.filename}', '${notice.title.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-2 p-2 px-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 cursor-pointer transition mb-4">
                <svg class="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                <span class="truncate max-w-[200px] font-mono-code text-[11px]">${notice.attachment.filename}</span>
                <span class="text-[10px] text-slate-400">(${notice.attachment.size})</span>
              </div>
            ` : ''}

            <!-- Author & Target Info -->
            <div class="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <div class="flex items-center gap-1.5 truncate">
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span class="font-medium text-slate-700 truncate">${notice.author.name}</span>
                <span class="text-slate-400">•</span>
                <span class="text-slate-500">${pubDate}</span>
              </div>

              ${notice.deadline ? `
                <div class="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md flex-shrink-0">
                  Due: ${notice.deadline}
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Bottom Status & Acknowledgement Bar -->
          <div class="bg-slate-50 px-5 sm:px-6 py-3 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <!-- Left: Acknowledgement status for user OR admin compliance -->
            <div>
              ${notice.isMandatory ? `
                ${currentUser.role === 'admin' || currentUser.role === 'faculty' ? `
                  <div class="flex items-center gap-2">
                    <div class="text-xs font-semibold text-slate-700">
                      Compliance: <span class="text-indigo-600">${compliance.percentage}%</span>
                      <span class="text-slate-400 text-[11px] font-normal">(${compliance.acknowledgedCount}/${compliance.eligibleCount} signed)</span>
                    </div>
                    <div class="w-16 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div class="bg-indigo-600 h-1.5 rounded-full" style="width: ${compliance.percentage}%"></div>
                    </div>
                  </div>
                ` : `
                  ${hasAcknowledged ? `
                    <div class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-lg">
                      <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Digitally Acknowledged
                    </div>
                  ` : `
                    <div class="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-100/90 px-2.5 py-1 rounded-lg animate-pulse">
                      <svg class="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                      Requires Your Acknowledgement
                    </div>
                  `}
                `}
              ` : `
                <span class="text-xs text-slate-500">General Announcement</span>
              `}
            </div>

            <!-- Right Buttons -->
            <div class="flex items-center gap-2 self-end sm:self-auto">
              ${(currentUser.role === 'admin' || currentUser.role === 'faculty') && notice.isMandatory ? `
                <button onclick="window.app.openComplianceAuditModal('${notice.id}')" class="text-xs font-semibold text-slate-600 hover:text-indigo-600 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                  Audit Roster
                </button>
              ` : ''}

              <button onclick="window.app.openNoticeModal('${notice.id}')" class="text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition flex items-center gap-1">
                Read Notice
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // --- MODAL CONTROLLERS ---
  openNoticeModal(noticeId) {
    const notice = this.store.notices.find(n => n.id === noticeId);
    if (!notice) return;

    this.store.selectedNoticeId = noticeId;
    const modal = document.getElementById('noticeDetailModal');
    const content = document.getElementById('noticeDetailContent');
    if (!modal || !content) return;

    const currentUser = this.store.getCurrentUser();
    const acks = notice.acknowledgements || [];
    const myAck = acks.find(a => a.userId === currentUser.id);
    const compliance = this.store.getComplianceStats(notice);

    const pubDate = new Date(notice.publishedAt).toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    content.innerHTML = `
      <!-- Header banner -->
      <div class="p-6 bg-slate-900 text-white rounded-t-2xl relative">
        <div class="flex items-center justify-between gap-4 mb-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono-code px-2.5 py-1 rounded bg-slate-800 text-indigo-300 border border-slate-700">
              Ref: ${notice.refNo}
            </span>
            <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${notice.priority === 'urgent' ? 'bg-rose-500 text-white' : 'bg-slate-700 text-slate-200'}">
              ${notice.priority.toUpperCase()}
            </span>
          </div>
          <button onclick="window.app.closeAllModals()" class="text-slate-400 hover:text-white p-1 rounded-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <h2 class="text-xl sm:text-2xl font-black text-white leading-tight mb-3">
          ${notice.title}
        </h2>

        <div class="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-300">
          <div><strong class="text-slate-100">Issuer:</strong> ${notice.author.name} (${notice.author.department})</div>
          <div><strong class="text-slate-100">Issued On:</strong> ${pubDate}</div>
          ${notice.deadline ? `<div><strong class="text-amber-300">Action Deadline:</strong> ${notice.deadline}</div>` : ''}
        </div>
      </div>

      <!-- Main Body -->
      <div class="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
        <!-- Target audience badge -->
        <div class="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          <span><strong>Target Audience:</strong> ${notice.targetAudience.toUpperCase()} (${notice.targetDepartment === 'all' ? 'All Departments' : notice.targetDepartment})</span>
        </div>

        <!-- Full Notice Text -->
        <div class="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed whitespace-pre-line font-normal">
          ${notice.content}
        </div>

        <!-- Attachment Download / Preview -->
        ${notice.attachment ? `
          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600 flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 class="text-xs font-bold text-slate-800 font-mono-code">${notice.attachment.filename}</h4>
                <p class="text-[11px] text-slate-500">Official Annexure Document • ${notice.attachment.size}</p>
              </div>
            </div>
            <button onclick="window.app.openPdfViewerModal('${notice.attachment.filename}', '${notice.title.replace(/'/g, "\\'")}')" class="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-lg border border-slate-300 transition flex items-center gap-1.5 shadow-sm">
              <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              Preview Document
            </button>
          </div>
        ` : ''}

        <!-- ACKNOWLEDGEMENT SECTION -->
        ${notice.isMandatory ? `
          <div class="border-t border-slate-200 pt-6">
            <h4 class="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              Digital Verification & Circular Acknowledgement
            </h4>

            ${myAck ? `
              <!-- Already Acknowledged Seal -->
              <div class="signature-seal p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <span class="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Digital Signature Verified</span>
                    <h5 class="text-sm font-bold text-slate-800 mt-1">${myAck.userName} (${myAck.department})</h5>
                    <div class="text-[11px] text-slate-600 mt-0.5 font-mono-code">
                      Timestamp: ${new Date(myAck.timestamp).toLocaleString()}<br>
                      Verification Token: <strong class="text-indigo-700">${myAck.verificationCode}</strong><br>
                      SSL Session: ${myAck.ipAddress}
                    </div>
                  </div>
                </div>
                <button onclick="window.print()" class="text-xs font-semibold px-3.5 py-2 bg-white text-slate-700 hover:bg-slate-100 rounded-lg border border-blue-200 shadow-sm flex items-center gap-1.5 self-end sm:self-auto">
                  <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                  Print Certificate
                </button>
              </div>
            ` : `
              <!-- Pending Acknowledgement Form -->
              <div class="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <p class="text-xs text-amber-900 leading-relaxed mb-4">
                  <strong>Statutory Declaration:</strong> By providing your digital acknowledgement, you certify under institutional penalty that you have read, understood, and accept all clauses in this notification. This action is time-stamped, securely hashed, and recorded in the permanent institutional compliance audit trail.
                </p>

                <label class="flex items-start gap-3 cursor-pointer select-none mb-4">
                  <input type="checkbox" id="ackTermsCheckbox" class="w-4 h-4 mt-0.5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
                  <span class="text-xs text-slate-800 font-medium">
                    I confirm that I, <span class="font-bold text-slate-900">${currentUser.name}</span>, have read and agree to comply with circular <strong>${notice.refNo}</strong>.
                  </span>
                </label>

                <div class="flex items-center justify-end gap-3">
                  <button onclick="window.app.closeAllModals()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800">
                    Cancel
                  </button>
                  <button id="btnSubmitAck" onclick="window.app.handleAcknowledgeSubmit('${notice.id}')" class="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-indigo-600/20 transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    Confirm Digital Acknowledgement
                  </button>
                </div>
              </div>
            `}
          </div>
        ` : ''}

        <!-- Institutional Compliance Summary for Admin -->
        ${(currentUser.role === 'admin' || currentUser.role === 'faculty') && notice.isMandatory ? `
          <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between">
            <div>
              <h5 class="text-xs font-bold text-slate-800">Overall Institution Compliance Progress</h5>
              <p class="text-[11px] text-slate-600">${compliance.acknowledgedCount} of ${compliance.eligibleCount} eligible stakeholders have signed (${compliance.percentage}%)</p>
            </div>
            <button onclick="window.app.openComplianceAuditModal('${notice.id}')" class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition">
              View Detailed Roster
            </button>
          </div>
        ` : ''}
      </div>

      <!-- Footer -->
      <div class="p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl flex items-center justify-between text-xs text-slate-500">
        <span>Apex Institute of Technology & Sciences • Digital Circular Management Engine</span>
        <button onclick="window.app.closeAllModals()" class="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg transition">
          Close
        </button>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  handleAcknowledgeSubmit(noticeId) {
    const checkbox = document.getElementById('ackTermsCheckbox');
    if (!checkbox || !checkbox.checked) {
      Toast.show('Checkbox Required', 'Please check the confirmation box before signing.', 'error');
      return;
    }

    const currentUser = this.store.getCurrentUser();
    const ack = this.store.acknowledgeNotice(noticeId, currentUser);

    if (ack) {
      Toast.show('Acknowledgement Recorded!', `Signed with Verification Code ${ack.verificationCode}`, 'success');
      this.renderKPIs();
      this.renderUrgentBanner();
      this.renderNoticesList();
      this.updateNotificationBadge();
      // Re-render open modal so user sees digital seal immediately
      this.openNoticeModal(noticeId);
    }
  }

  openComplianceAuditModal(noticeId) {
    const notice = this.store.notices.find(n => n.id === noticeId);
    if (!notice) return;

    this.store.selectedNoticeId = noticeId;
    const modal = document.getElementById('complianceModal');
    const content = document.getElementById('complianceModalContent');
    if (!modal || !content) return;

    const compliance = this.store.getComplianceStats(notice);
    const acks = notice.acknowledgements || [];

    content.innerHTML = `
      <div class="p-6 bg-slate-900 text-white rounded-t-2xl flex items-start justify-between gap-4">
        <div>
          <span class="text-xs font-mono-code text-indigo-400 bg-slate-800 px-2 py-0.5 rounded">
            Audit Ledger: ${notice.refNo}
          </span>
          <h2 class="text-lg sm:text-xl font-bold mt-1 text-white">${notice.title}</h2>
          <p class="text-xs text-slate-400 mt-0.5">Statutory Circular Compliance & Acknowledgment Audit Trail</p>
        </div>
        <button onclick="window.app.closeAllModals()" class="text-slate-400 hover:text-white p-1">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <!-- Quick Metrics Bar -->
      <div class="grid grid-cols-3 divide-x divide-slate-200 border-b border-slate-200 bg-slate-50 text-center py-4">
        <div>
          <div class="text-2xl font-black text-slate-800">${compliance.eligibleCount}</div>
          <div class="text-xs text-slate-500 font-medium">Eligible Stakeholders</div>
        </div>
        <div>
          <div class="text-2xl font-black text-emerald-600">${compliance.acknowledgedCount}</div>
          <div class="text-xs text-slate-500 font-medium">Signed & Verified</div>
        </div>
        <div>
          <div class="text-2xl font-black ${compliance.pendingCount > 0 ? 'text-rose-600' : 'text-slate-400'}">${compliance.pendingCount}</div>
          <div class="text-xs text-slate-500 font-medium">Pending Sign-off</div>
        </div>
      </div>

      <!-- Table Content -->
      <div class="p-6 max-h-[55vh] overflow-y-auto">
        <div class="flex items-center justify-between mb-4">
          <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider">Stakeholder Sign-off Matrix</h4>
          <div class="flex items-center gap-2">
            <button onclick="window.app.sendReminderToPending('${notice.id}')" class="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 text-xs font-bold rounded-lg flex items-center gap-1.5 transition">
              <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              Ping Pending Stakeholders
            </button>
            <button onclick="window.app.exportAuditToCSV('${notice.id}')" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Export CSV Ledger
            </button>
          </div>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-100 text-slate-700 uppercase font-semibold text-[11px] border-b border-slate-200">
              <tr>
                <th class="p-3">Stakeholder</th>
                <th class="p-3">Role / Dept</th>
                <th class="p-3">Compliance Status</th>
                <th class="p-3">Timestamp</th>
                <th class="p-3">Verification Hash</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 bg-white">
              ${compliance.eligibleUsers.map(user => {
                const ack = acks.find(a => a.userId === user.id);
                const isSigned = !!ack;

                return `
                  <tr class="hover:bg-slate-50 transition">
                    <td class="p-3 font-semibold text-slate-800 flex items-center gap-2">
                      <img src="${user.avatar}" class="w-6 h-6 rounded-full object-cover" />
                      <div>
                        <div>${user.name}</div>
                        <div class="text-[10px] text-slate-400 font-mono-code">${user.email}</div>
                      </div>
                    </td>
                    <td class="p-3 text-slate-600">
                      <span class="capitalize font-medium">${user.role}</span>
                      <div class="text-[10px] text-slate-400">${user.department}</div>
                    </td>
                    <td class="p-3">
                      ${isSigned ? `
                        <span class="inline-flex items-center gap-1 font-bold text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Acknowledged
                        </span>
                      ` : `
                        <span class="inline-flex items-center gap-1 font-bold text-[11px] text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                          <span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
                          Pending
                        </span>
                      `}
                    </td>
                    <td class="p-3 text-slate-600 font-mono-code text-[11px]">
                      ${isSigned ? new Date(ack.timestamp).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'}
                    </td>
                    <td class="p-3 font-mono-code text-[11px] text-slate-700">
                      ${isSigned ? `<span class="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-200">${ack.verificationCode}</span>` : '—'}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Footer -->
      <div class="p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl flex items-center justify-between">
        <span class="text-xs text-slate-500">Audited under UGC & Apex Institute Statutory Guidelines</span>
        <button onclick="window.app.closeAllModals()" class="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg transition">
          Close Ledger
        </button>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  sendReminderToPending(noticeId) {
    const notice = this.store.notices.find(n => n.id === noticeId);
    if (!notice) return;
    const stats = this.store.getComplianceStats(notice);
    Toast.show('Notification Broadcast Sent', `Automated SMS & Email reminders sent to ${stats.pendingCount} pending stakeholders.`, 'success');
  }

  exportAuditToCSV(noticeId) {
    const notice = this.store.notices.find(n => n.id === noticeId);
    if (!notice) return;

    const compliance = this.store.getComplianceStats(notice);
    const acks = notice.acknowledgements || [];

    let csvContent = '\uFEFF'; // UTF-8 BOM for Microsoft Excel
    csvContent += `APEX INSTITUTE OF TECHNOLOGY & SCIENCES - CIRCULAR ACKNOWLEDGEMENT AUDIT REPORT\r\n`;
    csvContent += `Notice Ref:,"${notice.refNo}"\r\n`;
    csvContent += `Title:,"${notice.title.replace(/"/g, '""')}"\r\n`;
    csvContent += `Date Generated:,"${new Date().toISOString()}"\r\n`;
    csvContent += `Overall Compliance:,"${compliance.percentage}% (${compliance.acknowledgedCount}/${compliance.eligibleCount} signed)"\r\n\r\n`;

    csvContent += `User ID,Full Name,Role,Department,Email,Status,Signed Timestamp,Verification Hash,Client IP\r\n`;

    compliance.eligibleUsers.forEach(u => {
      const ack = acks.find(a => a.userId === u.id);
      const isSigned = !!ack;
      csvContent += `"${u.id}","${u.name}","${u.role}","${u.department}","${u.email}","${isSigned ? 'ACKNOWLEDGED' : 'PENDING'}","${isSigned ? ack.timestamp : ''}","${isSigned ? ack.verificationCode : ''}","${isSigned ? ack.ipAddress : ''}"\r\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Circular_Audit_${notice.refNo.replace(/[^a-zA-Z0-9]/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    Toast.show('CSV Exported', 'Official Compliance Ledger CSV downloaded.', 'success');
  }

  openPdfViewerModal(filename, title) {
    const modal = document.getElementById('pdfViewerModal');
    const content = document.getElementById('pdfViewerContent');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="p-4 bg-slate-900 text-white rounded-t-2xl flex items-center justify-between">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          <span class="text-sm font-bold font-mono-code">${filename}</span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="window.print()" class="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            Print
          </button>
          <button onclick="window.app.closeAllModals()" class="text-slate-400 hover:text-white p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      </div>

      <!-- Simulated High-Res Official Document Canvas -->
      <div class="p-8 sm:p-12 bg-slate-200/90 max-h-[75vh] overflow-y-auto flex justify-center">
        <div class="bg-white shadow-2xl p-10 max-w-2xl w-full text-slate-800 border border-slate-300 relative print-break-inside-avoid">
          <!-- Institutional Header -->
          <div class="text-center border-b-2 border-slate-900 pb-4 mb-6">
            <div class="text-xs font-bold tracking-widest uppercase text-slate-500">Autonomous Statutory University Body</div>
            <h1 class="text-xl font-black uppercase text-indigo-950 mt-1">Apex Institute of Technology & Sciences</h1>
            <p class="text-[11px] text-slate-600">Accredited 'A++' Grade by NAAC • Approved by AICTE • New Delhi</p>
            <p class="text-[10px] text-slate-500 mt-0.5">Technology Park Campus, Silicon Expressway • apex.edu.in</p>
          </div>

          <!-- Document Ref & Date -->
          <div class="flex justify-between text-xs font-mono-code mb-6 text-slate-700">
            <div><strong>DOC NO:</strong> SEC/2026/ANNEX-09</div>
            <div><strong>DATE:</strong> 21 November 2026</div>
          </div>

          <!-- Watermark -->
          <div class="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
            <span class="text-7xl font-black uppercase transform -rotate-45 text-slate-900">APEX OFFICIAL</span>
          </div>

          <!-- Title -->
          <h2 class="text-center text-sm font-black underline uppercase mb-6 tracking-wide text-slate-900">
            OFFICIAL ANNEXURE: ${title}
          </h2>

          <div class="text-xs leading-relaxed space-y-4 text-justify font-serif">
            <p><strong>TO ALL CONCERNED DEPARTMENTS, FACULTY MEMBERS, AND STUDENTS:</strong></p>
            <p>1. This official annexure accompanies the primary circular registered under the centralized registry. All requirements detailed herein carry mandatory statutory weight under institutional ordinances.</p>
            <p>2. Compliance with this directive is subject to quarterly regulatory compliance review and statutory scrutiny.</p>
            <p>3. Failure to comply or furnish electronic sign-off by the specified cutoff date invites disqualification from institutional campus privileges and academic enrollment clearances.</p>
          </div>

          <!-- Official Stamp / Seal -->
          <div class="mt-12 pt-8 flex justify-between items-end">
            <div class="text-[11px] text-slate-500 font-mono-code">
              Digitally verified through<br>EduNotice Secure Cloud PKI
            </div>
            <div class="text-center">
              <div class="w-24 h-12 border-2 border-indigo-900 border-dashed rounded-lg flex items-center justify-center text-[10px] font-bold text-indigo-900 uppercase mx-auto mb-1 opacity-80">
                OFFICIAL SEAL<br>DEAN ACADEMICS
              </div>
              <div class="text-xs font-bold text-slate-900">Dr. K. S. Raman</div>
              <div class="text-[10px] text-slate-500">Registrar & Dean of Academics</div>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  openCreateModal() {
    const modal = document.getElementById('createNoticeModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  handleCreateNoticeSubmit() {
    const title = document.getElementById('noticeTitleInput').value.trim();
    const category = document.getElementById('noticeCategoryInput').value;
    const priority = document.getElementById('noticePriorityInput').value;
    const targetAudience = document.getElementById('noticeAudienceInput').value;
    const isMandatory = document.getElementById('noticeMandatoryInput').checked;
    const deadline = document.getElementById('noticeDeadlineInput').value;
    const summary = document.getElementById('noticeSummaryInput').value.trim();
    const content = document.getElementById('noticeContentInput').value.trim();
    const attachmentName = document.getElementById('noticeAttachmentInput').value.trim();

    if (!title || !content) {
      Toast.show('Missing Fields', 'Please fill in the title and notice details.', 'error');
      return;
    }

    const currentUser = this.store.getCurrentUser();
    const newId = `CIRC-2026-${Math.floor(100 + Math.random() * 900)}`;
    const refNo = `AITS/${category.substring(0, 3).toUpperCase()}/2026/${Math.floor(10 + Math.random() * 90)}`;

    const newNotice = {
      id: newId,
      refNo: refNo,
      title: title,
      category: category,
      priority: priority,
      targetAudience: targetAudience,
      targetDepartment: 'all',
      isMandatory: isMandatory,
      publishedAt: new Date().toISOString(),
      deadline: deadline || null,
      isPinned: false,
      author: {
        name: currentUser.name,
        role: currentUser.roleLabel.split('(')[0].trim(),
        department: currentUser.department
      },
      summary: summary || title,
      content: content,
      attachment: attachmentName ? {
        filename: attachmentName.endsWith('.pdf') ? attachmentName : `${attachmentName}.pdf`,
        size: '1.5 MB',
        type: 'pdf'
      } : null,
      acknowledgements: [],
      bookmarkedBy: [],
      archived: false
    };

    this.store.addNotice(newNotice);
    this.closeAllModals();
    document.getElementById('createNoticeForm').reset();

    this.renderKPIs();
    this.renderUrgentBanner();
    this.renderNoticesList();
    this.updateNotificationBadge();

    Toast.show('Notice Published!', `Successfully broadcasted "${title}" to the board.`, 'success');
  }

  deleteNotice(id) {
    if (confirm('Are you sure you want to delete this notice? This action cannot be undone.')) {
      this.store.deleteNotice(id);
      this.renderKPIs();
      this.renderUrgentBanner();
      this.renderNoticesList();
      this.updateNotificationBadge();
      Toast.show('Notice Deleted', 'Removed from notice board.', 'info');
    }
  }

  togglePin(id) {
    this.store.togglePin(id);
    this.renderNoticesList();
  }

  toggleBookmark(id) {
    const user = this.store.getCurrentUser();
    this.store.toggleBookmark(id, user.id);
    this.renderNoticesList();
  }

  closeAllModals() {
    ['noticeDetailModal', 'complianceModal', 'createNoticeModal', 'pdfViewerModal'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    });
    document.body.classList.remove('overflow-hidden');
  }
}

// Global bootstrap
document.addEventListener('DOMContentLoaded', () => {
  window.app = new EduNoticeApp();
});
