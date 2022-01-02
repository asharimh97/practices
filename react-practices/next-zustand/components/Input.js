import { string, func } from "prop-types";

function Input({ label, value, onChange }) {
  return (
    <div>
      <p>{label}</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  )
}

Input.propTypes = {
  label: string,
  value: string,
  onChange: func,
}

export default Input;