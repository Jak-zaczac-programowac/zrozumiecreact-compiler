import styles from "./Error.module.css";

export function Error({ children }) {
    return <span className={styles.error}>{children}</span>;
}
