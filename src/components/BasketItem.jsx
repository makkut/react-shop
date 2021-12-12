function BasketItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromBasket,
        incQuantity,
        decQuantity,
    } = props;
    return (
        <li class='collection-item'>
            {displayName}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => {
                    decQuantity(mainId);
                }}
            >
                remove
            </i>{' '}
            x {quantity}
            <i
                className='material-icons basket-quantity'
                onClick={() => {
                    incQuantity(mainId);
                }}
            >
                add
            </i>{' '}
            = {price * quantity}
            <span className='secondary-content'>
                <i
                    className='material-icons basket-delete'
                    onClick={() => removeFromBasket(mainId)}
                >
                    close
                </i>
            </span>
        </li>
    );
}
export { BasketItem };
