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

			<div className="text-primary-400/50 text-sm mt-4">
				<p>
					Verglas Software Limited is a company registered in England and Wales (no. 14838037). 'IglooCode' and 'Educatr' are trading names of Verglas Software Limited.
				</p>
				<p>
					Verglas, IglooCode and/or Educatr are not associated with Slemish College or Strathearn School, and any publications from us do not represent their views.
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
