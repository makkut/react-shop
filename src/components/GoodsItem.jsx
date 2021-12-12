function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        addToBasket = Function.prototype,
        price
    } = props;
    console.log(props);
    return (
        <div className='card'>
            <div className='card-image'>
                <img
                    src={props.granted[0].images.full_background}
                    alt={displayName}
                />
            </div>
            <div className='card-content'>
                <span className='card-title'>{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            mainId,
                            displayName,
                            price
                        })
                    }
                >
                    Купить
                </button>
                <span className='rigth price'>
                    {price} руб.
                </span>
            </div>
        </div>
    );
}
export { GoodsItem };
