const Navigation = () => {
    return (
        <nav>
                <div className="logo">
                    <img src="./img/brand_logo.png" width="65" alt="logo image" />
                </div>

                <ul>
                    <li href="#" className="active">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button>Login</button>
            </nav>
    );
};
export default Navigation;