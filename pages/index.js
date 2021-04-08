import Head from 'next/head'
import styles from '../styles/Home.module.css' 
import DatePicker from "react-datepicker"
import {useState} from 'react'

export default function Home() {
  const [stateDate, setStateDate] = useState(new Date())
  return (
    <div className={styles.container}>
      <h2>date-picker デモ</h2>
      <DatePicker onChange={date=> setStateDate(date)} selected={stateDate} dateFormat="yyyy/MM/dd" placeholderText="2020/01/01"  />
      <a className={styles.link} href="https://github.com/Hacker0x01/react-datepicker">https://github.com/Hacker0x01/react-datepicker</a>
    </div>
  )
}
