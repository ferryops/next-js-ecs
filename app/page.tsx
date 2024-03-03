import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:p-24 sm:p-12 p-4 justify-center">
      <Image src="/ayo-pakai-alibaba-cloud.jpg" alt="Ayo Pakai Alibaba Cloud" width={700} height={0} priority />
    </main>
  );
}
