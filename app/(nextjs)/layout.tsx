import NavBar from "@/components/nav/nav";
import { DockInUse } from "@/components/magicui/dock-in-use";
import FooterContent from "@/components/FooterContent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex w-screen justify-center">
        <div className="w-full max-w-[1800px]">
          <NavBar />
        </div>
      </header>
      <main className="flex min-h-[calc(100vh-220px)] justify-center">
        <div className="w-full max-w-[1800px] px-6 md:px-8">{children}</div>
        <span className="fixed bottom-8 left-auto right-auto m-0 h-fit w-fit p-0 max-xl:hidden">
          <DockInUse />
        </span>
      </main>
      <footer>
        <FooterContent />
      </footer>
    </>
  );
}