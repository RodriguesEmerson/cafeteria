import { ButtonFillGreen } from "@/app/components/buttons/buttonFillGreen"
import { TextBoxOutlined } from "@/app/components/textBoxs/textBoxOutlined"
import Image from "next/image"
import Link from "next/link"

const SignUp = () => {
   return (
      <main className="flex items-center justify-center bg-[#121212] h-[calc(100vh-64px)] bg-[url(/images/pizzaBG.png)] overflow-hidden">
         <section className="flex flex-row h-[500px] w-[850px] bg-white rounded-md">

            <div className="relative flex flex-col justify-center h-full w-[350px]">
               <div className="absolute left-2 top-1 flex gap-2 items-center p-2 justify-end text-xs">
                  <p>Já tem uma conta?</p>
                  <Link
                     href={"/signin"}
                     className="p-1 text-[#4A6C3F] border border-[#58874F] rounded-md hover:bg-[#4A6C3F] hover:text-white transition-all"
                  >
                     Entrar
                  </Link>
               </div>
               <div className="p-4">
                  <h2 className="text-2xl font-bold text-gray-500 mb-7">Criar Conta</h2>
                  <form className="flex flex-col gap-5">
                     <TextBoxOutlined id={"nameSignupInput-2200"} labelName={"Nome"} name="name" width={"100%"} />
                     <TextBoxOutlined id={"emailSignupInput-2200"} labelName={"E-mail"} name="email" width={"100%"} />
                     <TextBoxOutlined id={"passwordSignUpInput-2200"} labelName={"Senha"} name="password" width={"100%"} />
                     <ButtonFillGreen type="submit" style={{ width: "100%" }}>Criar Conta</ButtonFillGreen>
                  </form>
               </div>
               
            </div>
            <div className="flex items-center justify-center w-[500px] h-full bg-[#3F643370] rounded-r-md">
               <Image src={"/images/signUp.png"} alt="sign in image" width={300} height={300} />
            </div>
         </section>
      </main>
   )
}

export default SignUp