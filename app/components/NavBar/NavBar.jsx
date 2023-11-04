'use client'

// import { useSession } from "next-auth/react"
import Link from "next/link"
import styles from './NavBar.module.css'

export default function NavBar() {
  // const { data: session } = useSession()
  return (
    <nav className={styles.navbar}>
    <Link href="/"><h1 className={styles.logo}>CRM Manage</h1></Link>
    <div className={styles.links}>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/login"> LogIn</Link>
      {/* <Link href="/events">Events</Link>
      <Link href="/map">Map</Link>
      <Link href="/toilets">Toilets</Link>
      <Link href="/news">News</Link> */}
      {/* <AuthButton onClick={gotoEvents} /> */}
    </div>
  </nav>
  )
}
