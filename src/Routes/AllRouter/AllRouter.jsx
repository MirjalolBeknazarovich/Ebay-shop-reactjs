import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/home';
import Deals from '../Deals/Deals';
import Contact from '../Contact/Contact';
import Brend from '../Brend/Brend';
import SignIn from '../SignIn/SignIn';
import CreateAccount from '../CreateAccount/CreateAccount';
import Sell from '../Sell/Sell';
import Summary from '../Summary/Summary';
import Recently from '../Recently/Recently';
import Bids from '../Bids/Bids';
import Watchlist from '../Watchlist/Watchlist';
import Purchase from '../Purchase/Purchase';
import ByAgain from '../ByAgain/ByAgain';
import Selling from '../Selling/Selling';
import SavedSearch from '../SavedSearch/SavedSearch';
import SavedSellers from '../SavedSellers/SavedSellers';
import Message from '../Message/Message';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import AdvancedSearch from '../AdvancedSearch/AdvancedSearch';
import SellHero from '../SellHero/SellHero';
import SearchResult from '../SearchResult/SearchResult';
import CategoriesResult from '../CategoriesResult/CategoriesResult';
import Product from '../Product/Product';
import Saved from '../Saved/Saved';

const AllRouter = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/register' element={<CreateAccount />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/brend' element={<Brend />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/recently' element={<Recently />} />
        <Route path='/bids' element={<Bids />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/byagain' element={<ByAgain />} />
        <Route path='/selling' element={<Selling />} />
        <Route path='/savedsearch' element={<SavedSearch />} />
        <Route path='/savedsellers' element={<SavedSellers />} />
        <Route path='/message' element={<Message />} />
        <Route path='/shoppingcard' element={<ShoppingCard />} />
        <Route path='/advanced' element={<AdvancedSearch />} />
        <Route path='/sellhero' element={<SellHero />} />
        <Route path='/searchresult/:productName' element={<SearchResult />} />
        <Route path='/categoriesresult/:id' element={<CategoriesResult />} />
        <Route path='/product/:title' element={<Product />} />
        <Route path='/saved' element={<Saved />} />
    </Routes>
  )
}

export default AllRouter