import Image from "next/image";
import _logo from "../public/images/verglas-long-primary-600.gif";

export default function Footer({ children, title }) {
	return (
		<footer className="bg-primary-800 flex flex-col items-center py-6">
			<Image
				src={_logo}
				style={{objectFit: "contain"}}
				height={45}
				className="brightness-[4]"
			/>

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
