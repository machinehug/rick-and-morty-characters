import { useState, useEffect } from "react";
import Link from "next/link";
import { clearLocalStorage } from "../../hooks/useLocalStorage";
import { TOKEN_KEY } from "../../constants/admin";

export default function Header() {

    const [isLoggedIn, setLoggedInStatus] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);
        setLoggedInStatus(token);
    }, []);

    return (
        <header>
            <div className="container">
                <div className="logo"><Link href="/"><a>Rick and Morty characters</a></Link></div>
                <nav>
                    <ul>
                        <Link href="/"><a><li><i className="fas fa-home"></i> Home</li></a></Link>
                        <Link href="/contact"><a><li><i className="far fa-comment-alt"></i> Contact</li></a></Link>
                        {isLoggedIn && <Link href="/admin"><a><li><i className="far fa-grin-alt"></i> Account</li></a></Link>}
                        <Link href={isLoggedIn ? "/" : "/login"}><a onClick={isLoggedIn ? clearLocalStorage : ""}><li>{isLoggedIn ? "Logout" : "Login"}</li></a></Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};