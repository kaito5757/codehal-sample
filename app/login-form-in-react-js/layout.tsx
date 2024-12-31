import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: "400",
});

export default function Layout({ children }: { children: React.ReactNode }) {
	return <div className={poppins.className}>{children}</div>;
}
