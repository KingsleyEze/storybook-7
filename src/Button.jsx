import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

const Button = ({ text, icon, iconPosition, disabled, theme }) => {
  const buttonClasses = `button ${theme} ${disabled ? "disabled" : ""}`

  return (
      <button className={buttonClasses} disabled={disabled}>
        {iconPosition === "start" && icon && (
            <span className="button-icon-start">{icon}</span>
        )}
        {text}
        {iconPosition === "end" && icon && (
            <span className="button-icon-end">{icon}</span>
        )}
      </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(["start", "end"]),
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(["primary", "secondary"]),
}

Button.defaultProps = {
  iconPosition: "start",
  disabled: false,
  theme: "primary",
}

export default Button
