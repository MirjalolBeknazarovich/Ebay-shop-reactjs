import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../Utils/Container';

const Watchlist = () => {

  const Product = useSelector ( state => state. watchlistReducer )
  // console.log(Product);
  return (
    <section>
      <Container>
        <div>
          {
            Product.watchlistProducts.map( (item, i) => 
              <div key={ i }>
                <div>
                  <img src={item.images} alt="" />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span>{item.price}</span>
                </div>
              </div>
              )
          }
        </div>
      </Container>
    </section>
  )
}

export default Watchlist