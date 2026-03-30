import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `${styles.navItem} ${isActive ? styles.active : ""}`
    }
  >
    <span className={styles.navIcon}>{icon}</span>
    <span>{label}</span>
  </NavLink>
);

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => (
  <>
    {isOpen && <div className={styles.overlay} onClick={onClose} />}
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.switchOrg}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M3 5h7M3 9h7M3 13h4M13 7l4 4-4 4"
            stroke="#213F7D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Switch Organization</span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path
            d="M1 1l4 4 4-4"
            stroke="#213F7D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <span className={styles.navIcon}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect
              x="1"
              y="1"
              width="6"
              height="6"
              rx="1"
              stroke="#213F7D"
              strokeWidth="1.2"
            />
            <rect
              x="9"
              y="1"
              width="6"
              height="6"
              rx="1"
              stroke="#213F7D"
              strokeWidth="1.2"
            />
            <rect
              x="1"
              y="9"
              width="6"
              height="6"
              rx="1"
              stroke="#213F7D"
              strokeWidth="1.2"
            />
            <rect
              x="9"
              y="9"
              width="6"
              height="6"
              rx="1"
              stroke="#213F7D"
              strokeWidth="1.2"
            />
          </svg>
        </span>
        <span>Dashboard</span>
      </NavLink>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>Customers</span>
        <NavItem
          to="/users"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="5" r="3" stroke="#213F7D" strokeWidth="1.2" />
              <path
                d="M2 13c0-3.314 2.686-6 6-6s6 2.686 6 6"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Users"
        />
        <NavItem
          to="/guarantors"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="5"
                cy="5"
                r="2.5"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
              <circle
                cx="11"
                cy="5"
                r="2.5"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
              <path
                d="M1 13c0-2.761 1.791-5 4-5M15 13c0-2.761-1.791-5-4-5M5 13c0-2.761 1.343-5 3-5s3 2.239 3 5"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Guarantors"
        />
        <NavItem
          to="/loans"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M14 4H2a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1z"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
              <path d="M1 7h14" stroke="#213F7D" strokeWidth="1.2" />
            </svg>
          }
          label="Loans"
        />
        <NavItem
          to="/decision-models"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
              <path
                d="M8 5v4l2.5 1.5"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Decision Models"
        />
        <NavItem
          to="/savings"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 10c0-3.314 2.686-6 6-6a5.98 5.98 0 014.472 1.988M14 10H2M6 13h4"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Savings"
        />
        <NavItem
          to="/loan-requests"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1z"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
              <path
                d="M5 6h6M5 9h4"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Loan Requests"
        />
        <NavItem
          to="/whitelist"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 1L2 4v4c0 3.5 2.667 6.333 6 7 3.333-.667 6-3.5 6-7V4L8 1z"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          }
          label="Whitelist"
        />
        <NavItem
          to="/karma"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
              <path
                d="M5.5 8.5l2 2 3-4"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          label="Karma"
        />
      </div>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>Businesses</span>
        <NavItem
          to="/organization"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 14V6l6-4 6 4v8H2z"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M6 14v-4h4v4"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          }
          label="Organization"
        />
        <NavItem
          to="/loan-products"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect
                x="2"
                y="4"
                width="12"
                height="9"
                rx="1"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
              <path
                d="M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1M6 9h4"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Loan Products"
        />
        <NavItem
          to="/savings-products"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 3h10a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zM3 9h10a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 011-1z"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
            </svg>
          }
          label="Savings Products"
        />
        <NavItem
          to="/fees-charges"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
              <path
                d="M8 4.5V8l2 2"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Fees and Charges"
        />
        <NavItem
          to="/transactions"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 5h12M2 8h8M2 11h5"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Transactions"
        />
        <NavItem
          to="/services"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="2.5"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
              <path
                d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Services"
        />
        <NavItem
          to="/service-account"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="6" r="3" stroke="#213F7D" strokeWidth="1.2" />
              <path
                d="M2.5 14c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Service Account"
        />
        <NavItem
          to="/settlements"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 12h12M5 12V7M8 12V5M11 12V9"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Settlements"
        />
        <NavItem
          to="/reports"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
              <path
                d="M5 6h6M5 9h4"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Reports"
        />
      </div>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>Settings</span>
        <NavItem
          to="/preferences"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="2.5"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
              <path
                d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Preferences"
        />
        <NavItem
          to="/fees-pricing"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1z"
                stroke="#213F7D"
                strokeWidth="1.2"
              />
              <path
                d="M5 8h6M5 11h3"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Fees and Pricing"
        />
        <NavItem
          to="/audit-logs"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V5l-3-3z"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M9 2v3h3M5 8h6M5 11h4"
                stroke="#213F7D"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          }
          label="Audit Logs"
        />
      </div>

      <div className={styles.divider} />

      <button className={styles.logout}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 14H3.333A1.333 1.333 0 012 12.667V3.333A1.333 1.333 0 013.333 2H6M10.667 11.333L14 8M14 8L10.667 4.667M14 8H6"
            stroke="#E4033B"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Logout</span>
      </button>
      <span className={styles.version}>v1.2.0</span>
    </aside>
  </>
);

export default Sidebar;
