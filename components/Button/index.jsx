

const Button = ({type,callback,disabled,label,...rest}) => {
  return (
    //checking css
    <div className="w-full h-6 bg-test_secondary border-[2px]">
      <button
      type={type}
      className=""
      onClick={callback}
      {...rest}
      disabled={disabled}
    >
   
      {label}
     
    </button>
    </div>
  )
}

export default Button