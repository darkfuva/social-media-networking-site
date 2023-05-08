import styles from './sidebar.module.css'

export default function Sidebar() {
    return (
        <div className="secondaryColorBg">
        <div className="scrollbox ">
        <div className={`${styles.sidebar} scrollbox-content`}>
            <div className={styles.sidebarSection}>asd</div>
            <div className={styles.sidebarSection}>bcd</div>
            <div className={styles.sidebarSection}>efg</div>
            <div className={styles.sidebarSection}>efg</div>
            <div className={styles.sidebarSection}>efg</div>
            <div className={styles.sidebarSection}>efg</div>

        </div>
        </div>
        </div>
    )
}