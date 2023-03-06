import React, { useState } from "react";
import Container from "../../Utils/Container";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FiBell, FiChevronDown, FiSearch } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import LogoImg from "../../images/450px-EBay_logo.svg.png";
import useFetchData from '../../hooks/useFetchData';
import instance from '../../api/instance';
import { useSelector } from "react-redux";
import Loading from '../Loading/Loading';
import { useTranslation } from "react-i18next";
import i18n from "../../Language/i18next";
import { MdDelete } from 'react-icons/md';
import { useDispatch } from "react-redux";

const Header = () => {
  const { t } = useTranslation();


  const [ data, isLoading ] = useFetchData("/categories");

  const [searchResult, setSearchResult] = useState([])
  const [ searchValue, setSearchValue ] = useState('')


  const giveSearchSuggestions = (e) => {
    setSearchValue(e.target.value)
    instance.get(`/products/?title=${e.target.value}`)
    .then(response => setSearchResult(response.data))
    .catch(error => console.log(error))
  }

  const giveMoreresults = (e) => {
    e.preventDefault()    
    window.location.pathname = `/searchresult/${searchValue}`
  }

  const dispatch = useDispatch()

const createUser = useSelector( state => state.createReducer);
const basketProduct = useSelector( state => state.addBasketReducer);

const removeFromBasketProduct = (product) => {
  dispatch ({
      id: product.id,
      type: "REMOVE_FROM_BASKET_PRODUCT"
  })
}
// console.log(createUser);

  return (
    <header>
      <Container>
        <nav className="header_nav">
          <div className="header_first_wrapper">
            <div>
              <ul className="header_list list_left">
                {
                  createUser.user?.name ? createUser.user?.name:
                  <li className="header_item">
                  { t("header_hi") }
                  <Link className="header_login_link" to="/signin">
                    { t ("header_Sign_in") }
                  </Link>{" "}
                  or
                  <Link className="header_login_link" to="/register">
                    { t ("header_register") }
                  </Link> 
                
                                       
                </li>
                }
               
                <li className="header_item">
                  <Link to="/deals">{ t ("header_Daily_Deals") }</Link>
                </li>
                <li className="header_item">
                  <Link to="/brend">{ t ("header_Brand_Outlet")}</Link>
                </li>
                <li className="header_item">
                  <Link to="/contact">{ t ("header_Help & Contact")}</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="header_list list_rigth">
                <li className="header_item">
                  <span onClick={() => i18n.changeLanguage("us")}>USA</span>
                  <span>||</span>
                  <span onClick={() => i18n.changeLanguage("ru")}>RU</span>
                </li>
                <li className="header_item">
                  <Link to="/sell">{ t ("header_Sell")}</Link>
                </li>
                <li className="header_item">
                  <div className="header_down_hover">
                    <div>
                      <Link to="/watchlist">
                        <div className="header_span_down">{ t ("header_Watchlist")}<FiChevronDown className="header_icon_down" /></div>
                      </Link>
                    </div>
                    <div className="header_span_down_hover">
                        <span>
                            <Link to='watchlist'>View all items you are watching</Link>
                        </span>
                        <div></div>
                    </div>
                  </div>
                </li>
                <li className="header_item">
                  <div className="myEbayHover">
                    <div>
                      <span className="header_span_down">
                        { t ("header_My eBay")} <FiChevronDown className="header_icon_down" />
                      </span>
                    </div>
                    <div className="myEbayHoverDiv">
                      <ul className="myEbayHoverDiv_list">
                        <li className="myEbayHoverDiv_item">
                          <Link to="/summary">Summary</Link>
                        </li>
                        <li className="myEbayHoverDiv_item">
                          <Link to="/recently">Recently Vieved</Link>
                        </li>
                        <li className="myEbayHoverDiv_item">
                          <Link to="/bids">Bids/Offers</Link>
                        </li>
                        <li className="myEbayHoverDiv_item">
                          <Link to="/watchlist">Watchlist</Link>
                        </li>
                        <li className="myEbayHoverDiv_item">
                          <Link to="/purchase">Purchase History</Link>
                        </li>
                        <li className="myEbayHoverDiv_item">
                          <Link to="/byagain">By Again</Link>
                        </li>
                        <li className="myEbayHoverDiv_item">
                          <Link to="/selling">Selling</Link>
                        </li>
                        <li className="myEbayHoverDiv_item">
                          <Link to="/savedsearch">Saved Searches</Link>
                        </li>
                        <li className="myEbayHoverDiv_item">
                          <Link to="/savedsellers">Saved Sellers</Link>
                        </li>
                        <li className="myEbayHoverDiv_item">
                          <Link to="/message">Messages</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="header_item">
                  <div className="icon_hover_bell">
                    <div>
                      <FiBell className="header_icon_bell" />
                    </div>
                    <div className="hover_bell">
                      <h2 className="hover_bell_title">
                        There are no new notifications.
                      </h2>
                    </div>
                  </div>
                </li>
                <li className="header_item">
                  <div className="shoppingcard">
                    <div>
                      <Link className="header_icon_link" to="/shoppingcard">
                        <CgShoppingCart className="header_icon_shoppingCart" />
                      </Link>
                    </div>
                    <div className="shoppingcard_hover">
                      <h4 className="shoppingcard_hover_title">
                        Shopping cart
                      </h4>
                      <p className="shoppingcard_hover_text">
                        Something went wrong with one or more of <br /> your
                        items, <Link to="/shoppingcard">view cart</Link> for
                        detail.
                      </p>
                      {
                        basketProduct.addBasketProducts.map((item, index) => 
                            <div className="basket_map_box" key={ index }>
                              <div>
                                <img src={item.images} alt="" />
                              </div>
                              <div>
                                <h4>{item.title}</h4>
                                <span>{item.price}</span>
                                <MdDelete onClick={() => removeFromBasketProduct ( item )}/>
                              </div>
                            </div>
                        )
                      }
                      <div className="shoppingcard_hover_cost">
                        <span className="shoppingcard_hover_span">Total</span>
                        <span className="shoppingcard_hover_span_cost">
                          $300
                        </span>
                      </div>
                      <div className="shoppingcard_hover_btn">
                        <div className="shoppingcard_hover_card">
                          <Link to="/shoppingcard">
                            <span>view cart</span>
                          </Link>
                          <span>to see all of your items</span>
                        </div>
                        <button className="shoppingcard_hover_btn_checkout">
                          Checkout
                        </button>
                        <button className="shoppingcard_hover_btn-viewcard">
                          View card
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="header_second_wrapper">
            <div className="header_second_hero">
              <div className="nav_logo">
                <Link to='/'>
                    <img className="logo_img" src={LogoImg} alt="img" />
                </Link>
              </div>
              <div className="shopby">
                <div className="shopby_activ">Shop by <br />  category <FiChevronDown className="shopby_activ_icon" /></div>
                <div className="shopby_hover">
                    <ul>
                        {
                          data.map( item => 
                            <Link key={item.id} to={`/categoriesresult/${item.id}`}>
                              <li className="shopby_category_li" key={item.id}>{item.name}</li>
                            </Link>
                          )
                        }
                    </ul>
                </div>
              </div>
              <form onSubmit={giveMoreresults} className="header_second_form" action="">
                <input onChange={ giveSearchSuggestions } type="text" placeholder="Search for anything" />
                <FiSearch className="search_icon" />
                <select name="" id="">
                  <option value="">
                    All Categories
                  </option>
                  {
                    data.map( category => 
                        <option key={category.id} value={category.id}>{category.name}</option>
                      )
                  }
                </select>
                <button>Search</button>
                <h2>
                  <Link to='advanced'>
                    Advanced
                  </Link>
                </h2>
              </form>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
