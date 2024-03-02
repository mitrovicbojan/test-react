import "./Features.css";
import { CORE_CONCEPTS } from "../data.js";

export default function Features(props) {
  return (
    <li className="section-features">
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
