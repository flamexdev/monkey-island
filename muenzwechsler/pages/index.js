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
      <h1 className={styles.heading}>
        Münzwechsler
      </h1>

      <div className={styles.info}>
        <p style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          textDecoration: "underline",
          margin: "20px",
          padding: "0"
        }}>Bitte PASSEND einwerfen!</p>

        <table style={{
          fontSize: "20px",
          lineHeight: "1.6rem",
          alignItems: "center",
          width: "100%"
        }}>
          {price_list?.map(e =>
            <tr>
              <td>{e.amount} Monkey Taler = {e.price}€</td>
            </tr>
          )}
        </table>

        <p style={{
          marginTop: "50px",
          fontWeight: "bold",
          backgroundColor: "#fff"
        }}>
          Nur {price_list?.map(e => `${e.price}€ ${e.price < 5 ? "Münzen" : "Scheine"}`)
          .join(" / ")}
        </p>

        <p style={{
          marginTop: "20px",
          fontWeight: "bold",
          fontSize: "1.3rem",
          textDecoration: "underline",
          backgroundColor: "#39FF14",
          width: "50%",
          marginLeft: "25%"
        }}>
          !!! Kein Rückgeld !!!
        </p>
      </div>

      <Image
        src={"http://monkeyislandbochum.de/wp-content/uploads/2019/12/monkeyislandnew-b.png"}
        width={120}
        height={120}
        className={styles.watermark}
      />
    </div>
  )
}