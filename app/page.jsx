import Image from "next/image";

export default function Home() {
   return (
      <main className="relative bg-[#121212] h-[calc(100vh-64px)] bg-[url(/images/pizzaBG.png)] overflow-hidden">
         <section>
            <div className="flex gap-36 items-center m-auto p-2 mt-[calc(50vh-60px-220px)] w-fit">
               <div className="">
                  <h2 className="text-white text-3xl font-bold">Gestão Completa para Lanchonetes</h2>
                  <p className="text-gray-400 max-w-[550px] text-sm">
                     Simplifique a administração da sua lanchonete com o Cafeteria Organizze!
                     Gerencie mesas, comandas, estoque e funcionários em um único
                     aplicativo intuitivo. Acompanhe pedidos em tempo real, controle seu
                     estoque com precisão e otimize o trabalho da equipe para oferecer
                     a melhor experiência aos seus clientes.
                  </p>
               </div>
               <div className="flex-1">
                  <Image width={400} height={400} src="/images/waiter.png" alt="Waiter image" />
               </div>
            </div>
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden m-auto">
               <Image width={100} height={100}  src="/images/logo.svg" alt="logo image" />
            </div>
         </section>
         <footer className="absolute bottom-0 h-6 w-full text-gray-400">
            <p className="text-xs text-center">Cafeteria Organizze® | 2025</p>
         </footer>
      </main>
   );
}
