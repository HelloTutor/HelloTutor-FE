import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { AuthWrapper } from "@/context/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HelloTutor",
  description: "Learn from the best tutors in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} max-w-[1200px] mx-auto`}>
        <header>
          <NavBar />
        </header>

        <AuthWrapper>{children}</AuthWrapper>

        <footer className="relative bottom-0 w-full my-[50px] text-lg">
          <hr className="mb-[40px]  border-black" />
          <div className="flex flex-col gap-y-1 ml-6">
            <p className="text-lg font-bold">고객센터</p>
            <Link href="/faq">자주 묻는 질문</Link>
            <Link href="/support">문의하기</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
