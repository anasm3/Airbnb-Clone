import airbnbIcon from '../assets/airbnb-logo.png'; 

export default function Navbar() {
    return(
        <nav>
            <img src={airbnbIcon} alt="airbnb-logo" className="nav--logo" />
        </nav>
    )
}