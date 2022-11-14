import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { watermark_url, api_base_url, interval_read_database } from '../config'

async function get_closing_time() {
  return new Promise(async (resolve) => {
    const closes_at = (await fetch(`${api_base_url}/closing_time`).then(res => res.json())).closing_time

    resolve(closes_at)
  })
}

async function get_price_list() {
  return new Promise(async (resolve) => {
    const price_list = (await fetch(`${api_base_url}/price_list`).then(res => res.json()))

    resolve(price_list)
  })
}

function Title() {
  return (
    <h1 className={styles.title}>
      Münzwechsler
    </h1>
  )
}

function Info_Heading() {
  return (
    <p className={styles.info_heading}>Bitte PASSEND einwerfen!</p>
  )
}

function Price_List({ data }) {

  return (
    <table key="PRICE_LIST">
      {data?.map(e =>
        <tr key="PRICE_LIST_ROW">
          <td className={styles.table_amount}>{e.amount} Monkey Taler</td>
          <td className={styles.table_text}>=</td>
          <td className={styles.table_price}>{e.price}€</td>
        </tr>
      )}
    </table>
  )
}

function Acceptable_Money({ data }) {
  return (
    <p>
      Nur {data?.map(e => `${e.price}€ ${e.price < 5 ? "Münzen" : "Scheine"}`)
      .join(" / ")}
    </p>
  )
}

function Info_Bottom() {
  return (
    <p className={styles.info_bottom}>
      !!! Kein Rückgeld !!!<br/>
      Keine Annahme von 2€ Münzen
    </p>
  )
}

function Closes_At({ time }) {
  return (
    time ? (
      <p className={styles.closes_at}>
        Monkey Games schließt heute um {time} Uhr
      </p>
    ) : (
      <p className={styles.closes_at}>
        Lädt...
      </p>
    )
  )
}

export default function Home() {
  const [closes_at, set_closes_at] = useState()
  const [price_list, set_price_list] = useState([])

  function update_closing_time() {
    get_closing_time().then(time => {
      set_closes_at(time)
    })
  }

  useEffect(() => {
    get_price_list().then(list => {
      set_price_list(list)
    })
  }, [])

  update_closing_time()
  setInterval(() => update_closing_time(), interval_read_database)

  return (
    <div className={styles.container} onClick={() => {
      // document.body.requestFullscreen()
    }}>
      <Title />

      <div className={styles.info}>
        
        <Info_Heading />

        <Price_List
          data = {price_list}
        />

        <Acceptable_Money
          data = {price_list}
        />

        <Info_Bottom />

        <Closes_At
          time = {closes_at}
        />
        
      </div>

      <Image
        src = {watermark_url}
        width = {180}
        height = {180}
        className = {styles.watermark}
        alt = "Branding Logo"
      />
    </div>
  )
}