// next
import Link from "next/link";

export default function AccountSidebar() {
  return (
    <div className="account_sidebar">
      <div className="account_sidebar_managment">
        <h2>Managment</h2>
        <ul>
          <li>
            <Link href="/account/articles">Articles</Link>
          </li>
          <li>
            <Link href="/account/marking">Categories</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
