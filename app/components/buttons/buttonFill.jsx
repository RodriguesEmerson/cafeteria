export const ButtonFill = ({text, bgColor, ...rest}) => {
   return(
      <button 
         className={`text-white py-2 px-2 rounded bg-[${bgColor}]`}
         {...rest}
      >
         {text}
      </button>
   )
}