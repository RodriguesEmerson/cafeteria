export const ButtonFillGreen = ({text, bgColor, children, ...rest}) => {
   return(
      <button 
         className={`text-white h-9 px-2 rounded bg-[#58874F] hover:bg-[#4A6C3F] transition-all`}
         {...rest}
      >
         {children}
      </button>
   )
}