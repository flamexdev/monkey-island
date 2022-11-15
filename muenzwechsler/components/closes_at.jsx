import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { api_base_url, interval_read_database } from '../config'

// Get closing time from API > Database
async function get_closing_time() {
  return new Promise(async (resolve) => {
    resolve((await fetch(`${api_base_url}/closing_time`).then(res => res.json())).closing_time)
  })
}

export default function Closes_At() {
  const [closes_at, set_closes_at] = useState()

  function update_closing_time() {
    get_closing_time().then(time => {
      set_closes_at(time)
    })
  }

  update_closing_time()
  setInterval(() => update_closing_time(), interval_read_database)

  return (
    closes_at ? (
      <p className={styles.closes_at}>
        Monkey Games schließt heute um {closes_at} Uhr
      </p>
    ) : (
      <p className={styles.closes_at}>
        Lädt...
      </p>
    )
  )
}