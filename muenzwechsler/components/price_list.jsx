import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { api_base_url, api_fullscreen_url } from '../config'

// Get price list from API > Database
async function get_price_list() {
  return new Promise(async (resolve) => {
    resolve((await fetch(`${api_base_url}/price_list`).then(res => res.json())))
  })
}

export default function Price_List() {
  const [price_list, set_price_list] = useState([])

  useEffect(() => {
    get_price_list().then(list => {
      set_price_list(list)
    })

    fetch(api_fullscreen_url)
  }, [])

  return (
    <>
      <table key="PRICE_LIST">
        {price_list?.map(e =>
          <tr key="PRICE_LIST_ROW">
            <td className={styles.table_amount}>{e.amount} Monkey Taler</td>
            <td className={styles.table_text}>=</td>
            <td className={styles.table_price}>{e.price}€</td>
          </tr>
        )}
      </table>
      <p>
        Nur {price_list?.map(e => `${e.price}€ ${e.price < 5 ? "Münzen" : "Scheine"}`)
        .join(" / ")}
      </p>
    </>
  )
}