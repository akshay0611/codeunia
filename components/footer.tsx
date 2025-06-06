
import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <p>© 2025 My Website. All rights reserved.</p>
      <nav>
        <Link href="/privacy">Privacy Policy</Link> |{" "}
        <Link href="/terms">Terms of Service</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  )
}
