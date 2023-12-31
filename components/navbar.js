import Image from "next/image";

import _logo from "../public/images/verglas-long-primary-600.gif";
import Link from "next/link";

export default function Navbar({ children, title }) {
	return (
		<navbar className="fixed w-screen bg-white h-[3rem] sm:h-[4.5rem] z-20 flex items-center justify-center">
			<div className="w-2/3 flex items-center h-full flex-col sm:flex-row">
				<Link href="/">
				<Image
					src={_logo}
					style={{objectFit: "contain"}}
					height={45}
					className="brightness-50 hidden sm:block"
				/>
				</Link>
				<div className="flex items-center gap-10 h-full sm:ml-12 text-primary-900 decoration-primary-900 decoration-2 underline-offset-[5px]">
					<Link href="/outreach" className="hover:underline">Outreach</Link>
					<Link href="/products" className="hover:underline">Software</Link>
					<Link href="/people" className="hover:underline">People</Link>
					<Link href="/press" className="hover:underline">News</Link>
				</div>
			</div>
		</navbar>
	);
}
