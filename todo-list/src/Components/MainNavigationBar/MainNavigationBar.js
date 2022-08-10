import classes from "./MainNavigationBar.module.css";
import NavigationItems from "./NavigationItems";

const MainNavigationBar = ()=> {
 return (
    <div className={classes.main_nav}>
        <div className={classes.logo}>TODO</div>
        <NavigationItems/>
    </div>
 );
}

export default MainNavigationBar;