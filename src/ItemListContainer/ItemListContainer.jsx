function ItemListContainer({greeting}) {
    return (
        <div class="container mt-2">
            <div class="alert alert-primary" role="alert">
                {greeting}
            </div>
        </div> 
    )
}

export default ItemListContainer