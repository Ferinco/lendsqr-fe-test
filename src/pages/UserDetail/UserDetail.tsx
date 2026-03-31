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
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z"
              fill="#545F7D"
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
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.04053 35.1796C6.47961 32.2202 7.79365 29.6264 9.97961 27.4C12.7405 24.6 16.0732 23.2 19.9796 23.2C23.886 23.2 27.2204 24.6 29.9796 27.4C32.1796 29.6266 33.5062 32.2204 33.9593 35.1796M28.1405 14.0204C28.1405 16.247 27.3468 18.1532 25.7593 19.7408C24.1734 21.3408 22.253 22.1408 20.0001 22.1408C17.7594 22.1408 15.8409 21.3408 14.2409 19.7408C12.6534 18.1533 11.8596 16.247 11.8596 14.0204C11.8596 11.7673 12.6534 9.84679 14.2409 8.25959C15.8409 6.67367 17.7596 5.87991 20.0001 5.87991C22.2532 5.87991 24.1737 6.67367 25.7593 8.25959C27.3468 9.84711 28.1405 11.7674 28.1405 14.0204Z"
                  stroke="#213F7D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <h2>
                {user.profile?.firstName || user.userName}{" "}
                {user.profile?.lastName || ""}
              </h2>
              <span className={styles.userId}>{user.id}</span>
            </div>
          </div>

          <div className={styles.profileDivider} />

          <div className={styles.tierSection}>
            <span className={styles.tierLabel}>User's Tier</span>
            <StarRating tier={user.tier || 1} />
          </div>

          <div className={styles.profileDivider} />

          <div className={styles.balanceSection}>
            <span className={styles.balance}>
              {formatCurrency(user.accountBalance || user.balance || 0)}
            </span>
            <span className={styles.bankInfo}>
              {user.accountNumber || "N/A"}/{user.bankName || "N/A"}
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
                    value={`${user.profile?.firstName || user.userName} ${user.profile?.lastName || ""}`}
                  />
                  <InfoItem
                    label="PHONE NUMBER"
                    value={
                      user.profile?.phoneNumber || user.phoneNumber || "N/A"
                    }
                  />
                  <InfoItem label="EMAIL ADDRESS" value={user.email || "N/A"} />
                  <InfoItem label="BVN" value={user.profile?.bvn || "N/A"} />
                  <InfoItem
                    label="GENDER"
                    value={user.profile?.gender || "N/A"}
                  />
                  <InfoItem
                    label="MARITAL STATUS"
                    value={user.profile?.maritalStatus || "N/A"}
                  />
                  <InfoItem
                    label="CHILDREN"
                    value={user.profile?.children || "N/A"}
                  />
                  <InfoItem
                    label="TYPE OF RESIDENCE"
                    value={
                      user.profile?.typeOfResidence ||
                      user.profile?.address ||
                      "N/A"
                    }
                  />
                </div>

                <div className={styles.sectionDivider} />
                <SectionHeader title="Education and Employment" />
                <div className={styles.infoGrid}>
                  <InfoItem
                    label="LEVEL OF EDUCATION"
                    value={user.education?.level || "N/A"}
                  />
                  <InfoItem
                    label="EMPLOYMENT STATUS"
                    value={user.education?.employmentStatus || "N/A"}
                  />
                  <InfoItem
                    label="SECTOR OF EMPLOYMENT"
                    value={user.education?.sector || "N/A"}
                  />
                  <InfoItem
                    label="DURATION OF EMPLOYMENT"
                    value={user.education?.duration || "N/A"}
                  />
                  <InfoItem
                    label="OFFICE EMAIL"
                    value={user.education?.officeEmail || user.email || "N/A"}
                  />
                  <InfoItem
                    label="MONTHLY INCOME"
                    value={
                      user.education?.monthlyIncome
                        ? `₦${user.education.monthlyIncome[0]?.toLocaleString() || "0"} - ₦${user.education.monthlyIncome[1]?.toLocaleString() || "0"}`
                        : "N/A"
                    }
                  />
                  <InfoItem
                    label="LOAN REPAYMENT"
                    value={
                      user.education?.loanRepayment
                        ? user.education.loanRepayment.toLocaleString()
                        : "N/A"
                    }
                  />
                </div>

                <div className={styles.sectionDivider} />
                <SectionHeader title="Socials" />
                <div className={styles.infoGrid}>
                  <InfoItem
                    label="TWITTER"
                    value={user.socials?.twitter || "N/A"}
                  />
                  <InfoItem
                    label="FACEBOOK"
                    value={user.socials?.facebook || "N/A"}
                  />
                  <InfoItem
                    label="INSTAGRAM"
                    value={user.socials?.instagram || "N/A"}
                  />
                </div>

                <div className={styles.sectionDivider} />
                <SectionHeader title="Guarantor" />
                <div className={styles.infoGrid}>
                  <InfoItem
                    label="FULL NAME"
                    value={
                      user.guarantor
                        ? `${user.guarantor.firstName} ${user.guarantor.lastName}`
                        : "N/A"
                    }
                  />
                  <InfoItem
                    label="PHONE NUMBER"
                    value={user.guarantor?.phoneNumber || "N/A"}
                  />
                  <InfoItem
                    label="EMAIL ADDRESS"
                    value={user.guarantor?.email || "N/A"}
                  />
                  <InfoItem
                    label="RELATIONSHIP"
                    value={user.guarantor?.relationship || "N/A"}
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
