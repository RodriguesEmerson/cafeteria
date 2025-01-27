export const TextBoxOutlined = ({id, labelName, width, ...rest}) => {

   return(
      <div className="text-sm">
         {labelName && 
            <label htmlFor={`${id}`} className="text-gray-500 pl-[2px]">{labelName}</label>
         }
         <input 
            type="text"
            id={`${id}`}
            className={`h-8 border border-gray-300 rounded-md outline-1 px-2 text-gray-500 focus-within:outline-green-700`} 
            style={{width: `${width}`}}
            {...rest}
            />
      </div>
   )
}