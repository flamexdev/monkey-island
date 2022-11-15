import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { watermark_url } from '../config'

// Import Components
import Title from '../components/title'
import Info_Heading from '../components/info_heading'
import Price_List from '../components/price_list'
import Info_Bottom from '../components/info_bottom'
import Closes_At from '../components/closes_at'

export default function Home() {
  return (
    <div className={styles.container} onClick={() => {
      document.body.requestFullscreen()
    }}>
      <Title />

      <div className={styles.info}>
        
        <Info_Heading />

        <Price_List />

        <Info_Bottom />

        <Closes_At />
        
      </div>

      <Image
        src={watermark_url}
        width={180}
        height={180}
        className={styles.watermark}
        alt="Branding Logo"
      />
    </div>
  )
}