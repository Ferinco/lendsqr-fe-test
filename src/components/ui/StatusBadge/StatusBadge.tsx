import styles from "./StatusBadge.module.scss";

type Status = "Active" | "Inactive" | "Pending" | "Blacklisted";

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge = ({ status }: StatusBadgeProps) => (
  <span className={`${styles.badge} ${styles[status.toLowerCase()]}`}>
    <span className={styles.dot} />
    {status}
  </span>
);

export default StatusBadge;
