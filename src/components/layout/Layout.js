import { useEffect, useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { clearLocalStorage } from "../../hooks/useLocalStorage";
import { TOKEN_KEY } from "../../constants/admin";

export default function Layout({children}) {

	const [token, setToken] = useState(null);

	useEffect(() => {
		(() => {
		  const token = window.localStorage.getItem(TOKEN_KEY);
		  setToken(token);
		})();
	}, []);

	return (
		<>
			<header>
				<div className="container">
					<div className="logo">Rick and Morty characters</div>
					<nav>
						<ul>
							<Link href="/"><a><li>Home</li></a></Link>
							<Link href="/contact"><a><li>Contact</li></a></Link>
							<Link href={token ? "/" : "/login"}><a onClick={token ? clearLocalStorage : ""}><li>{token ? "Logout" : "Login"}</li></a></Link>
						</ul>
					</nav>
				</div>
			</header>
			<div className="container">{children}</div>
		</>
	);
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};