import Link from "next/Link";

export default function Nav(){
    return <nav>
        <Link href="/products">Products</Link>
        <Link href="/sell">Sell</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/accounts">Accounts</Link>
    </nav>
}