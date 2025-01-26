export const ButtonLine = ({text, textColor, ...rest}) => {
   return(
      <button 
         className={`font-bold py-1 px-1 rounded text-[${textColor}]`}
         {...rest}
      >
         {text}
      </button>
   )
}