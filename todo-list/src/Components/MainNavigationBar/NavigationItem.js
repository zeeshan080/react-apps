import classes from "./NavigationItem.module.css";

const navigationItem = (props)=>(
    <li className={classes.nav_item}>
        <a 
        href={props.link} 
        className={props.active ? "nav-link active" : "nav-link"}
        >{props.children}
        </a>
    </li>
);

export default navigationItem;