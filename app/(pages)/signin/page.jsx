import { ButtonFillGreen } from "@/app/components/buttons/buttonFillGreen"
import { TextBoxOutlined } from "@/app/components/textBoxs/textBoxOutlined"
import Image from "next/image"
import Link from "next/link"

const SignIn = () => {
   return (
      <main className="flex items-center justify-center bg-[#121212] h-[calc(100vh-64px)] bg-[url(/images/pizzaBG.png)] overflow-hidden">
         <section className="flex flex-row h-[500px] w-[850px] bg-white rounded-md">
            <div className="flex items-center justify-center w-[500px] h-full bg-[#3F643370] rounded-l-md">
               <Image src={"/images/signIn.png"} alt="sign in image" width={450} height={400} />
            </div>

            <div className="relative flex flex-col justify-center h-full w-[350px]">

               <div className="absolute right-2 top-1 flex gap-2 items-center p-2 justify-end text-xs">
                  <p>Ainda não tem uma conta?</p>
                  <Link
                     href={"/signup"}
                     className="p-1 text-[#4A6C3F] border border-[#58874F] rounded-md hover:bg-[#4A6C3F] hover:text-white transition-all"
                  >
                     Criar Conta
                  </Link>
               </div>

               <div className="p-4">
                  <h2 className="text-2xl font-bold text-gray-500 mb-7">Entrar</h2>
                  <form className="flex flex-col gap-5">
                     <TextBoxOutlined id={"emailSignInInput-2200"} labelName={"E-mail"} name="email" width={"100%"} />
                     <div>
                        <TextBoxOutlined id={"passwordSignInInput-2200"} labelName={"Senha"} name="password" width={"100%"} />
                        <Link className="text-xs text-blue-900 w-full text-end block mt-1" href={"/"}>Esqueceu a senha?</Link>
                     </div>
                     <ButtonFillGreen type="submit" style={{ width: "100%" }}>Entrar</ButtonFillGreen>
                  </form>

               </div>
               <div className="flex items-center gap-1 justify-center">
                  <input
                     id="rc-2259"
                     type="checkbox" 
                     className="w-4 h-4"
                  />
                  <label htmlFor="rc-2259" className="text-xs">Lembrar dados de acesso</label>
               </div>
            </div>
         </section>
      </main>
   )
}

export default SignIn