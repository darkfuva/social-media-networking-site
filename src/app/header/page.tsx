import styles from './header.module.scss'


export default function AppHeader() {
    return (<div className={`${styles.headerBar} primaryColorBg`}>
        <div className={styles.leftSidebarSwitchContainer}>
            leftSwti
        </div>
        <div className={styles.brandDetailsContainer}>
            <div className={styles.brandNameContainer}>
            Social Worker Networking Site
            </div>
        </div>
    </div>)
}