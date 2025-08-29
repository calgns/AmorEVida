import { Link } from "react-router-dom";
import "./style.css";

export const Button = ({children, link=true, url="#", colorful=false, padding="8px 28px"}) => {
  const btnStyle = colorful ? "btn-colored " : "btn-outlined ";

  return (
    <button className={btnStyle}>
      {link ? <Link to={url} style={{padding, display: "block"}} >{children}</Link> : children}
    </button>);
};
