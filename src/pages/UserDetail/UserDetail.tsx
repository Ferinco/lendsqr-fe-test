import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/layout/Layout/Layout";
import StatusBadge from "@/components/ui/StatusBadge/StatusBadge";
import { getUserById } from "@/services/storage";
import styles from "./UserDetail.module.scss";

const TABS = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

const StarRating = ({ tier }: { tier: number }) => (
  <div className={styles.stars}>
    {[1, 2, 3].map((i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={i <= tier ? "#E9B200" : "none"}
      >
        <path
          d="M8 1l1.854 3.757L14 5.438l-3 2.924.708 4.129L8 10.25l-3.708 2.241L5 8.362 2 5.438l4.146-.681L8 1z"
          stroke="#E9B200"
          strokeWidth="1"
        />
      </svg>
    ))}
  </div>
);

const InfoItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className={styles.infoItem}>
    <span className={styles.infoLabel}>{label}</span>
    <span className={styles.infoValue}>{value || "—"}</span>
  </div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <h3 className={styles.sectionTitle}>{title}</h3>
);

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const user = getUserById(id!);

  if (!user) {
    return (
      <Layout>
        <div className={styles.notFound}>
          <p>User not found.</p>
          <button onClick={() => navigate("/users")}>← Back to Users</button>
        </div>
      </Layout>
    );
  }

  const formatCurrency = (n: number) =>
    `₦${n.toLocaleString("en-NG", { minimumFractionDigits: 2 })}`;

  return (
    <Layout>
      <div className={styles.page}>
        <button className={styles.backBtn} onClick={() => navigate("/users")}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8l4-4"
              stroke="#545F7D"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Back to Users
        </button>

        <div className={styles.topBar}>
          <h1>User Details</h1>
          <div className={styles.actions}>
            <button className={styles.blacklistBtn}>BLACKLIST USER</button>
            <button className={styles.activateBtn}>ACTIVATE USER</button>
          </div>
        </div>

        <div className={styles.profileCard}>
          <div className={styles.profileMain}>
            <div className={styles.avatar}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle
                  cx="24"
                  cy="18"
                  r="10"
                  stroke="#ADB5BD"
                  strokeWidth="2"
                />
                <path
                  d="M6 42c0-9.941 8.059-18 18-18s18 8.059 18 18"
                  stroke="#ADB5BD"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <h2>
                {user.profile.firstName} {user.profile.lastName}
              </h2>
              <span className={styles.userId}>{user.id}</span>
            </div>
          </div>

          <div className={styles.profileDivider} />

          <div className={styles.tierSection}>
            <span className={styles.tierLabel}>User's Tier</span>
            <StarRating tier={user.tier} />
          </div>

          <div className={styles.profileDivider} />

          <div className={styles.balanceSection}>
            <span className={styles.balance}>
              {formatCurrency(user.accountBalance)}
            </span>
            <span className={styles.bankInfo}>
              {user.accountNumber}/{user.bankName}
            </span>
          </div>
        </div>

        <div className={styles.tabCard}>
          <div className={styles.tabs}>
            {TABS.map((tab, i) => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === i ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            {activeTab === 0 && (
              <>
                <SectionHeader title="Personal Information" />
                <div className={styles.infoGrid}>
                  <InfoItem
                    label="FULL NAME"
                    value={`${user.profile.firstName} ${user.profile.lastName}`}
                  />
                  <InfoItem
                    label="PHONE NUMBER"
                    value={user.profile.phoneNumber}
                  />
                  <InfoItem label="EMAIL ADDRESS" value={user.email} />
                  <InfoItem label="BVN" value={user.profile.bvn} />
                  <InfoItem label="GENDER" value={user.profile.gender} />
                  <InfoItem label="MARITAL STATUS" value="Single" />
                  <InfoItem label="CHILDREN" value="None" />
                  <InfoItem
                    label="TYPE OF RESIDENCE"
                    value={user.profile.address}
                  />
                </div>

                <div className={styles.sectionDivider} />
                <SectionHeader title="Education and Employment" />
                <div className={styles.infoGrid}>
                  <InfoItem
                    label="LEVEL OF EDUCATION"
                    value={user.education.level}
                  />
                  <InfoItem
                    label="EMPLOYMENT STATUS"
                    value={user.education.employmentStatus}
                  />
                  <InfoItem
                    label="SECTOR OF EMPLOYMENT"
                    value={user.education.sector}
                  />
                  <InfoItem
                    label="DURATION OF EMPLOYMENT"
                    value={user.education.duration}
                  />
                  <InfoItem
                    label="OFFICE EMAIL"
                    value={user.education.officeEmail}
                  />
                  <InfoItem
                    label="MONTHLY INCOME"
                    value={`₦${user.education.monthlyIncome[0].toLocaleString()} - ₦${user.education.monthlyIncome[1].toLocaleString()}`}
                  />
                  <InfoItem
                    label="LOAN REPAYMENT"
                    value={user.education.loanRepayment.toLocaleString()}
                  />
                </div>

                <div className={styles.sectionDivider} />
                <SectionHeader title="Socials" />
                <div className={styles.infoGrid}>
                  <InfoItem label="TWITTER" value={user.socials.twitter} />
                  <InfoItem label="FACEBOOK" value={user.socials.facebook} />
                  <InfoItem label="INSTAGRAM" value={user.socials.instagram} />
                </div>

                <div className={styles.sectionDivider} />
                <SectionHeader title="Guarantor" />
                <div className={styles.infoGrid}>
                  <InfoItem
                    label="FULL NAME"
                    value={`${user.guarantor.firstName} ${user.guarantor.lastName}`}
                  />
                  <InfoItem
                    label="PHONE NUMBER"
                    value={user.guarantor.phoneNumber}
                  />
                  <InfoItem
                    label="EMAIL ADDRESS"
                    value={user.guarantor.email}
                  />
                  <InfoItem
                    label="RELATIONSHIP"
                    value={user.guarantor.relationship}
                  />
                </div>
              </>
            )}

            {activeTab !== 0 && (
              <div className={styles.tabPlaceholder}>
                <StatusBadge status="Active" />
                <p>This section is coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetail;
