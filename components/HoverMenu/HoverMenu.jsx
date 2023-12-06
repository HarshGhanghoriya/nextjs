import Link from "next/link"
import styles from "./HoverMenu.module.css"



export default function HoverMenu({ children, listItem = [] }) {
  return (
    <div className={styles["menu-wrap"]}>
      <ul className={styles.menu}>
        <li className={`${styles["menu-item"]}`} style={{display:"flex"}}>
          {children}
          <ul className={`${styles["drop-menu"]} pt-10`}>
            {listItem.map((item, i) => (
              <Link href={item.url} passHref={true}>
                <li className={`${styles["drop-menu-item"]}`}>{item.title}</li>
              </Link>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}
