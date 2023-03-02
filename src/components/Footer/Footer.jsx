import React from 'react';
import Container from '../../Utils/Container';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons//ai';
import { FiChevronDown } from 'react-icons/fi'
import './Footer.scss';
import img from '../../images/b.svg'
import vector from '../../images/Vector.svg'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="wrapper">
          <ul className='wrapper_footer_item'>
            <li className='wrapper_footer_list_active'>Buy</li>
            <li className='wrapper_footer_list'>Registration</li>
            <li className='wrapper_footer_list'>eBay Money Back Guarantee</li>
            <li className='wrapper_footer_list'>Bidding & buying help</li>
            <li className='wrapper_footer_list'>Stores</li>
            <li className='wrapper_footer_list'>eBay for Charity</li>
            <li className='wrapper_footer_list'>Charity Shop</li>
            <li className='wrapper_footer_list'>Seasonal Sales and events</li>
          </ul>
          <div className='wrapper_two_ul'>
            <ul className='wrapper_item'>
              <li className='wrapper_footer_list_active'>Sell</li>
              <li className='wrapper_footer_list'>Start selling</li>
              <li className='wrapper_footer_list'>How to sell</li>
              <li className='wrapper_footer_list'>Business sellers</li>
              <li className='wrapper_footer_list'>Affiliates</li>
            </ul>
            <ul className='wrapper_item'>
              <li className='wrapper_footer_list_active'>Tools & apps</li>
              <li className='wrapper_footer_list'>Developers</li>
              <li className='wrapper_footer_list'>Security center</li>
              <li className='wrapper_footer_list'>Site map</li>
            </ul>
          </div>
          <ul className='wrapper_item'>
            <li className='wrapper_footer_list_active'>Stay connected</li>
            <li className='wrapper_footer_list'><AiFillFacebook className='footer_icon' /> <span  className='wrapper_footer_span'>Facebook</span></li>
            <li className='wrapper_footer_list'><FaTwitterSquare className='footer_icon' /> <span className='wrapper_footer_span'>Twitter</span></li>
          </ul>
          <ul className='wrapper_item'>
            <li className='wrapper_footer_list_active'>About eBay</li>
            <li className='wrapper_footer_list'>Company info</li>
            <li className='wrapper_footer_list'>News</li>
            <li className='wrapper_footer_list'>Investors</li>
            <li className='wrapper_footer_list'>Careers</li>
            <li className='wrapper_footer_list'>Diversity & Inclusion</li>
            <li className='wrapper_footer_list'>Global Impact</li>
            <li className='wrapper_footer_list'>Government relations</li>
            <li className='wrapper_footer_list'>Advertise with us</li>
            <li className='wrapper_footer_list'>Policies</li>
            <li className='wrapper_footer_list'>Verified Rights Owner (VeRO) Program</li>
            <li className='wrapper_footer_list'>eCI Licenses</li>
          </ul>
          <div>
            <ul className='wrapper_item'>
              <li className='wrapper_footer_list_active'>Help & Contact</li>
              <li className='wrapper_footer_list'>Seller Center</li>
              <li className='wrapper_footer_list'>Contact Us</li>
              <li className='wrapper_footer_list'>eBay Returns</li>
            </ul>
            <ul className='wrapper_item'>
              <li className='wrapper_footer_list_active'>Community</li>
              <li className='wrapper_footer_list'>Announcements</li>
              <li className='wrapper_footer_list'>eBay Community</li>
              <li className='wrapper_footer_list'>eBay for Business Podcast</li>
            </ul>
            <div className="sites">
              <h3 className="sites_title">eBay Sites</h3>
              <div className='sites_select'>
                <img src={img} alt="" />
                <span className='sites_select_title' >United States</span>
                <FiChevronDown />
              </div>
            </div>
          </div>
        </div>
        <div className='footer_bottom'>
          <h3 className='footer_bottom_title'>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</h3>
          <h3 className='footer_bottom_text'>Accessibility ,User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy Choicesand AdChoice</h3>
          <img className='footer_bottom_img' src={vector} alt="img" />
        </div>
      </Container>
    </footer>
  )
}

export default Footer