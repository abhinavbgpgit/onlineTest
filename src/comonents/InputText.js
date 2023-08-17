import React from 'react'

const InputText = (props) => {
  return (
    <div>
          <div className="form-control w-full max-w-xs ">
  <label className="label">
    <span className="label-text red font-semibold ">{props.lable}</span>  
  </label>
  <input type="text" placeholder={props.placeholder} className="input  input-sm input-bordered w-80 " />
 
</div>
    </div>
  )
}

export default InputText