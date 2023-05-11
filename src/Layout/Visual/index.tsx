import ProductImage from 'components/Product/ProductImage'
import background from "../../assets/images/bg.png";

const Visual = () => {
    return (
        <div className='product product-image'>
            <ProductImage src={background} alt="Product Image" />
        </div>
    )
}

export default Visual