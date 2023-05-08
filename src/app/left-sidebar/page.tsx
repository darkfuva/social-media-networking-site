import styles from './sidebar.module.css'

export default function Sidebar() {
    return (
        <div className={`${styles.sidebar} secondaryColorBg`}>
            <div className={styles.sidebarSection}>asd</div>
            <div className={styles.sidebarSection}>bcd</div>
            <div className={styles.sidebarSection}>efg</div>
        </div>
    )
}