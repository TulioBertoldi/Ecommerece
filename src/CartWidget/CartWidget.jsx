export default function NavBar({ammount}) {
    return(
        <i class="bi bi-cart position-relative">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-navbar">
                {ammount}
                <span class="visually-hidden">Cantidad productos carrito</span>
            </span>
        </i>
    )
}