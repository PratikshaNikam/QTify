import styles from "./Cards.module.css";
export default function Card() {
  return(
    <div class={styles.cards}>
      <div>
        <div className={styles.title_section}>
          <h3>Top Albums</h3>
          <h4 className={styles.showText}>Show All</h4>
        </div>

        <div className={styles.cards_section}>
          <div>
            <div className={styles.carausel_wrapper}>
              <div className={[styles.swiper, styles.swiper_horizontal]}>
                <div className={styles.swiper_wrapper}>

                </div>
                
                </div>
            </div>
        
          </div>

        </div>
      </div>

    </div>
  )
}