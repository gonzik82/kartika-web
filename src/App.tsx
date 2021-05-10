import React from "react"
import styles from "./app.module.css"
import {Header} from "./components/header"

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  )
}

export default App
