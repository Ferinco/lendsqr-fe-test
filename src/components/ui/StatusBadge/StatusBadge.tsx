import styles from "./StatusBadge.module.scss";

type Status = "Active" | "Inactive" | "Pending" | "Blacklisted";

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge = ({ status }: StatusBadgeProps) => (
  <span className={`${styles.badge} ${styles[status.toLowerCase()]}`}>
    {status}
  </span>
);

export default StatusBadge;
