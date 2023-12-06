import styles from "./Marquee.module.css"

const MarQuee = ({ children }) => {
  return (
    <>
      <div className={`${styles.marquee}`}>{children}</div>
      <div className={`${styles.marquee} ${styles.marquee2}`}>
        {children}
      </div>
    </>
  )
}

export default MarQuee
