import styles from "./rightSidebar.module.css";

export default function RightSidebar() {
  return (
    <div className="secondaryColorBg">
      <div className="scrollbox ">
        <div className={`${styles.rightSidebar} scrollbox-content`}>
          <div className={styles.sidebarSection}>asd</div>
          <div className={styles.sidebarSection}>asd</div>
          <div className={styles.sidebarSection}>asd</div>
          <div className={styles.sidebarSection}>asd</div>
          <div className={styles.sidebarSection}>asd</div>
          <div className={styles.sidebarSection}>asd</div>
          <div className={styles.sidebarSection}>asd</div>
        </div>
      </div>
    </div>
  );
}
