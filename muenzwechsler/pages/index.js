import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [price_list, set_price_list] = useState()

  useEffect(() => {
    set_price_list([
      {
        amount: 1,
        price: 1
      }, {
        amount: 6,
        price: 5
      }, {
        amount: 13,
        price: 10
      }, {
        amount: 28,
        price: 20
      }
    ])
  }, [])

  return (
    <div className={styles.container} onClick={() => {
      document.body.requestFullscreen()
    }}>
      <h1 className={styles.title}>
        Münzwechsler
      </h1>

      <div className={styles.info}>
        <p className={styles.info_heading}>Bitte PASSEND einwerfen!</p>

        <table>
          {price_list?.map(e =>
            <tr>
              <td className={styles.table_cost}>{e.amount}</td>
              <td className={styles.table_text}>Monkey Taler =</td>
              <td className={styles.table_price}>{e.price}€</td>
            </tr>
          )}
        </table>

        <p>
          Nur {price_list?.map(e => `${e.price}€ ${e.price < 5 ? "Münzen" : "Scheine"}`)
          .join(" / ")}
        </p>

        <p className={styles.no_money_back}>
          !!! Kein Rückgeld !!!<br/>
          Keine Annahme von 2€ Münzen
        </p>
      </div>

      <Image
        src={"http://monkeyislandbochum.de/wp-content/uploads/2019/12/monkeyislandnew-b.png"}
        width={180}
        height={180}
        className={styles.watermark}
      />
    </div>
  )
}