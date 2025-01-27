import Link from "next/link";

export const Header = () => { 
   return (
      <header className="bg-black flex justify-between h-16 items-center px-4">
         <div className="container mx-auto p-4">
            <Link href="/">
               <h1 className="text-2xl font-semibold text-white">Cafeteria Organizze</h1>
            </Link>
         </div>
         <div className="flex gap-4">
            <Link 
               href="/"
               className="text-white h-9 leading-9 font-light hover:underline transition-all"
            >
               Entrar
            </Link>
            <Link 
               href="/"
               className="text-white h-9 bg-[#58874F] rounded px-2 leading-9 w-[100px] hover:bg-[#4A6C3F] transition-all" 
            >
               Criar Conta
            </Link>
         </div>
      </header>
   );
}