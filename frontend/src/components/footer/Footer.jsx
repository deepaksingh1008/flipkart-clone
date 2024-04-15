import React from 'react'
import './footer.css'
import { TiGift } from "react-icons/ti";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaCcVisa, FaCcMastercard, FaCreditCard } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='information'>
                <div className='about'>
                    <h4>ABOUT</h4>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Flipkart Stories</li>
                    <li>Press</li>
                    <li>Corporate Information</li>
                </div>
                <div className='groups-company'>
                    <h4>GROUP COMPANIES</h4>
                    <li>Myntra</li>
                    <li>Flipkart Wholesale</li>
                    <li>Cleartrip</li>
                    <li>Shopsy</li>
                </div>
                <div className='help'>
                    <h4>HELP</h4>
                    <li>Payment</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQ</li>
                    <li>Report Infringement</li>
                </div>
                <div className='consumer-policy'>
                    <h4>CONSUMER POLICY</h4>
                    <li>Cancellation & Returns</li>
                    <li>Terms Of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                    <li>Grievance Redressal</li>
                    <li>EPR Compliance</li>
                </div>

                <div className="mail">
                    <h4>Mails Us</h4>
                    <li>Flipkart Internet Private Limited</li>
                    <li>Building Alyssa, Begonia &</li>
                    <li>Clove Embassy Tech Village,</li>
                    <li>Outer Ring Road, Devarabeesanahalli Village</li>
                    <li>Bengaluru, 560103</li>
                    <li>Karnataka, India</li>
                </div>
                <div className="office-add">
                    <h4>Registered Office Address</h4>
                    <li>Flipkart Internet Private Limited</li>
                    <li>Building Alyssa, Begonia &</li>
                    <li>Clove Embassy Tech Village,</li>
                    <li>Outer Ring Road, Devarabeesanahalli Village</li>
                    <li>Bengaluru, 560103</li>
                    <li>Karnataka, India</li>
                    <li>CIN : U51109KA2012PTCO66107</li>
                    <li>Telephone:<span id='num'>044-45614700</span></li>
                </div>

            </div>




            <div className='help-center'>
                <div className='gift-card'>
                    <TiGift />
                    <li>Gift Cards</li>
                </div>
                <div className='help-c'>
                    <IoIosHelpCircleOutline />
                    <li>Help Center</li>
                </div>
                <div className='Copyright'>
                    <li>© 2007-2024 Flipkart.com</li>
                </div>
                <div className='debit-card'>
                    <div><FaCcVisa /></div>
                    <div><FaCcMastercard /></div>
                    <div> <RiMastercardFill /></div>
                    <div> <FaCreditCard /></div>
                    <div> <FaCreditCard /></div>
                    <div> <FaCreditCard /></div>
                    <div> <FaCreditCard /></div>
                    <div> <FaCreditCard /></div>
                    <div> <FaCreditCard /></div>
                    <div> <FaCreditCard /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer