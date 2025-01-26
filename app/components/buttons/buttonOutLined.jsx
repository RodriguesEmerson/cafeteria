export const ButtonLine = ({text, textColor, ...rest}) => {
   return(
      <button 
         className={`font-bold py-2 px-2 rounded text-[${textColor}] border border-[${textColor}]`}
         {...rest}
      >
         {text}
      </button>
   )
}