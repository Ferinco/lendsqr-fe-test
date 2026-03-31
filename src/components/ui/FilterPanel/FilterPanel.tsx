import { useState } from "react";
import styles from "./FilterPanel.module.scss";

interface FilterValues {
  orgName: string;
  userName: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

interface FilterPanelProps {
  onFilter: (filters: FilterValues) => void;
  onReset: () => void;
  orgs: string[];
}

const FilterPanel = ({ onFilter, onReset, orgs }: FilterPanelProps) => {
  const [values, setValues] = useState<FilterValues>({
    orgName: "",
    userName: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  const set =
    (key: keyof FilterValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleReset = () => {
    setValues({
      orgName: "",
      userName: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
    onReset();
  };

  return (
    <div className={styles.panel}>
      <div className={styles.field}>
        <label>Organization</label>
        <select value={values.orgName} onChange={set("orgName")}>
          <option value="">Select</option>
          {orgs.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label>Username</label>
        <input
          type="text"
          placeholder="User"
          value={values.userName}
          onChange={set("userName")}
        />
      </div>

      <div className={styles.field}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={set("email")}
        />
      </div>

      <div className={styles.field}>
        <label>Date</label>
        <input type="date" value={values.date} onChange={set("date")} />
      </div>

      <div className={styles.field}>
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          value={values.phoneNumber}
          onChange={set("phoneNumber")}
        />
      </div>

      <div className={styles.field}>
        <label>Status</label>
        <select value={values.status} onChange={set("status")}>
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
          <option value="Blacklisted">Blacklisted</option>
        </select>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.resetBtn} onClick={handleReset}>
          Reset
        </button>
        <button
          type="button"
          className={styles.filterBtn}
          onClick={() => onFilter(values)}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
