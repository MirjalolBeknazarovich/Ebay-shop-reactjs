import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../../Utils/Container';
import { AiTwotoneHeart } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';




const Saved = () => {

  const dispatch = useDispatch()

  const addTolike = (product) => {
    dispatch({ 
        product,
        type: "LIKE_PRODUCT"
    })
}

  const removeFromLikedProduct = (product) => {
    dispatch({
        id: product.id,
        type: "REMOVE_FROM_LIKED_PRODUCT"
    })
}

  const likedProduct = useSelector(state => state.likedReducer)
  console.log(likedProduct);


  return (
    <section>
      <Container>
        <div>
          {
            likedProduct.likedProducts?.map( (item, i) => 
              <div key={ i }>
                <div>
                  <img src={item.images} alt="" />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span>{item.price}</span>
                  { likedProduct.likedProducts.find( p => p?.id === item?.id ) ? <AiTwotoneHeart onClick={ () => removeFromLikedProduct (item)} style={{color: "red"}} /> :  <FiHeart onClick={() => addTolike(item)} />}
                </div>
              </div>
              )
          }
        </div>
      </Container>
    </section>
  )
}

export default Saved