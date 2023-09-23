import Image from "next/image";
import _logo from "../public/images/verglas-long-primary-600.gif";
import Link from "next/link";

export default function Footer({ children, title }) {
	return (
		<footer className="bg-primary-800 flex flex-col items-center py-6 overflow-hidden px-5 sm:px-0">
			<Image
				src={_logo}
				style={{objectFit: "contain"}}
				height={45}
				className="brightness-[4]"
			/>

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-32 text-primary-100 mt-4 mb-8">
				<div className="flex flex-col gap-2 text-center sm:text-start">
					<span className="font-bold">Verglas</span>
					<Link href="/about" className="text-primary-100/90 hover:underline">About Verglas</Link>
					<Link href="/press" className="text-primary-100/90 hover:underline">Press centre</Link>
					<Link href="/people" className="text-primary-100/90 hover:underline">Key people</Link>
					<Link href="/outreach" className="text-primary-100/90 hover:underline">Outreach</Link>
					<Link href="/products" className="text-primary-100/90 hover:underline">Software</Link>
				</div>
				<div className="flex flex-col gap-2 text-center sm:text-start">
					<span className="font-bold">IglooCode™</span>
					<a href="https://iglooco.de/about" className="text-primary-100/90 hover:underline">About IglooCode™</a>
					<a href="https://iglooco.de/competition" className="text-primary-100/90 hover:underline">How it works</a>
					<a href="https://iglooco.de/team" className="text-primary-100/90 hover:underline">Meet the team</a>
					<a href="https://iglooco.de/getinvolved" className="text-primary-100/90 hover:underline">Get involved</a>
				</div>
				<div className="flex flex-col gap-2 text-center sm:text-start">
					<span className="font-bold">Educatr™</span>
					<a href="https://educatr.app/beta" className="text-primary-100/90 hover:underline">Register for beta</a>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row items-center text-primary-100 mb-4 gap-2 sm:gap-12 mt-2 sm:mt-0">
				<span><strong>T</strong>: +44 (0) 28 9694 3069</span>
				<span><strong>E</strong>: hello@verglas.io</span>
			</div>

			<div className="text-primary-400/50 text-xs mt-4 text-center">
				<p className="mb-1">
					Verglas Software Limited is a company registered in England and Wales (no. 14838037), and based in Northern Ireland. Registered office: 82a IP28 7DE.
				</p>
				<p className="mb-1">
					Verglas, IglooCode™ and/or Educatr™ are not associated with Slemish College or Strathearn School, and any publications from us do not represent their views.
				</p>
				<p className="mt-1">
					IglooCode™ and Educatr™ are trademarks of Verglas Software Limited.
				</p>
			</div>

			<div className="text-primary-400/50 text-sm mt-4">
				<p>
					&copy; 2023 Verglas Software Limited. All rights reserved.
				</p>
			</div>

		</footer>
	);
}
