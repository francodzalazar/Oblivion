const CartWidget = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <button className="btn btn-secondary"><i className="fa-solid fa-cart-shopping"></i></button>
            </li>
            <p className="text-secondary">0</p>
        </ul>
    );
}

export default CartWidget;