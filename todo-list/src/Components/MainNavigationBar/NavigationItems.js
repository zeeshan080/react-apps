import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem";

const Navigationitems = () => {
    return (
        <ul className={classes.nav_items}>
           <NavigationItem>Day</NavigationItem>
           <NavigationItem>Week</NavigationItem>
           <NavigationItem>Month</NavigationItem>
           <NavigationItem>Year</NavigationItem>
        </ul>
    );
}

export default Navigationitems;