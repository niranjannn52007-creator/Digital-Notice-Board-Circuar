# EduNotice & Circular Sync
### Digital Notice Board & Circular Acknowledgement Management System

An institutional web application engineered for colleges, universities, and educational campuses. It solves the statutory compliance challenge of circulating academic directives, examination notices, fee deadlines, anti-ragging undertakings, and policy mandates with **verifiable digital sign-offs** and **real-time audit rosters**.

---

## 📌 Problem Solved
Traditional physical bulletin boards and generic email blasts suffer from significant communication loopholes:
1. **Lack of Proof of Delivery**: No empirical record proving that a student or faculty member read and understood a critical academic notice.
2. **Delayed Compliance Tracking**: Dean and Exam Cell administrators spend days collecting physical acknowledgment slips or following up via phone calls.
3. **Information Overload**: Urgent circulars get buried under casual club announcements.
4. **Audit Readiness Deficit**: Regulatory inspections (e.g., UGC, NAAC, AICTE) demand timestamped compliance records for anti-ragging policies and examination undertakings.

**EduNotice & Circular Sync** provides a synchronized, role-based platform where every mandatory circular requires a time-stamped digital acknowledgment, backed by a cryptographic verification token.

---

## 🌟 Key Features

### 1. Multi-Persona Interactive Switcher
Experience the system from three distinct educational roles with a single click in the top navigation bar:
- **Dean / Administrator (`Dr. K. S. Raman`)**:
  - Broadcast institutional circulars with priority flags (Urgent, High, Normal, Informational).
  - Enforce mandatory acknowledgement requirements and deadlines.
  - Access the **Live Compliance Audit Ledger**.
  - Ping pending stakeholders with 1-click reminder alerts.
  - Export official **CSV Compliance Rosters** with UTF-8 BOM encoding for Microsoft Excel.
  - Pin, unpin, or delete notices.
- **Faculty Member (`Prof. Ananya Sharma`)**:
  - Review and sign administrative circulars (invigilation duty rosters, evaluation timelines).
  - Publish department-level student announcements and technical symposium notices.
  - Filter notices by "Requires My Signature" or "Acknowledged".
- **Student (`Aarav Patel` / `Sneha Gupta` / `Vikram Sengupta`)**:
  - Prominent **Urgent Action Banner** highlighting critical pending circulars.
  - Read official annexures and circular details.
  - Digitally sign undertakings with real-time cryptographic seal generation.
  - Access previewable official institutional PDF annexures.
  - Bookmark essential notices for quick reference.

### 2. Digital Circular Acknowledgement Workflow
1. **Identification**: Mandatory circulars are tagged with an animated badge: `Requires Your Acknowledgement`.
2. **Review & Affirmation**: Opening the circular displays full statutory clauses and terms.
3. **Legal Checkbox**: The stakeholder checks: *"I confirm that I have read and agree to comply with this circular"*.
4. **Digital Verification Generation**: Upon submission, the engine logs:
   - Stakeholder Name, Email, and Department.
   - Exact UTC/Local Timestamp.
   - Unique verification hash (e.g., `ACK-8F29-2026-0091`).
   - Simulated SSL session & IP origin.
5. **Permanent Digital Seal**: The card badge updates to `Digitally Acknowledged` with a printable certificate preview.

### 3. Institutional Compliance Ledger & Audit Matrix
Administrators and Faculty have instant access to the compliance ledger:
- Real-time progress bar: `42 of 60 Signed (70%)`.
- Full roster breakdown showing who has acknowledged and who remains pending.
- **Ping Pending Stakeholders**: Simulates automated push, SMS, and email alerts.
- **Export to CSV**: Produces a clean spreadsheet containing all stakeholder compliance statuses, timestamps, and verification tokens for institutional archives.

### 4. Categorization & Filtering Engine
- **Categories**: Academic, Examinations, Administration, Placements & Training, Events & Hackathons, Maintenance.
- **Status Tabs**: All Circulars, Requires My Signature, Acknowledged, Bookmarked, Urgent Only.
- **Instant Search**: Real-time filtering across titles, reference numbers, content keywords, and issuing departments.

### 5. Document & Annexure Previewer
- High-fidelity simulated institutional letterhead viewer with NAAC accreditation badges, reference codes, watermarks, and Dean's official signature seal.
- Direct printable layout with `@media print` CSS optimization.

---

## 🚀 How to Run the Application

The application is completely self-contained with no external server requirements needed to run.

### Option 1: Direct Browser Launch
1. Navigate to the project directory:
   ```
   c:\Users\kishor kumar\OneDrive\Attachments\Documents\project 1\
   ```
2. Double-click **`index.html`** or right-click and choose **Open with > Google Chrome / Microsoft Edge / Firefox**.
3. The application will boot immediately with interactive demo data populated!

### Option 2: Local HTTP Server (e.g., VS Code Live Server or Python)
If you have a local web server tool installed:
```powershell
# Using Python (if installed)
python -m http.server 8080

# Or open with VS Code "Live Server" extension
```

---

## 🗂️ File Structure
```
project 1/
│
├── index.html        # Responsive Single Page Application UI with Tailwind CSS & Modals
├── app.js            # Reactive Store, State Machine, Audit Engine & Event Handlers
├── styles.css        # Typography, Glassmorphism, Animations & Print Stylesheet
└── README.md         # Comprehensive Project Documentation & Architecture Guide
```

---

## 🔒 Security & Verification Concept (Backend Roadmap)

In an enterprise or production deployment, the digital acknowledgement protocol integrates with institutional authentication:

```
[Stakeholder (Student/Faculty)]
               │
               ▼  1. SSO / Campus Active Directory Login (OAuth2 / SAML)
    [EduNotice Portal]
               │
               ▼  2. Read Circular & Click Acknowledge
    [Digital Signature Gateway]
         ├── Generates SHA-256 HMAC (UserId + CircularId + Timestamp + SecretKey)
         ├── Captures User Agent, Client IP, Biometric/MFA confirmation (optional)
         └── Appends Immutable Record to PostgreSQL/Prisma Ledger
               │
               ▼  3. Instant Broadcast via WebSocket
    [Dean / Admin Live Compliance Dashboard]
```

### Production Tech Stack Recommendations
- **Frontend**: Next.js 14 / React with Tailwind CSS, Lucide Icons, and TanStack Table.
- **Backend**: Node.js (NestJS / Express) or Python (FastAPI).
- **Database**: PostgreSQL with Prisma ORM or SQLAlchemy.
- **File Storage**: AWS S3 / Cloudflare R2 for storing original signed PDF circulars.
- **Notifications**: Redis Pub/Sub + WebSockets for real-time alerts, Twilio for SMS reminders, SendGrid for automated compliance digests.

---

## 🎓 Academic / Capstone Project Notes
This project can be presented as:
- **Title**: *Design and Implementation of a Digital Notice Board with Cryptographic Circular Acknowledgement and Regulatory Compliance Tracking*
- **Domain**: Campus Management Systems / Web Engineering / Human-Computer Interaction
- **Key Metrics Highlighted**: 100% auditable sign-off trail, elimination of paper-based circular circulation, sub-second search and categorization, and mobile-first responsiveness.
