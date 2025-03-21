import React from "react";

import { Link } from "react-router-dom";

import QrCode from "./../assets/img/qr.svg";
import Logo from "./../assets/img/Klout-Club.svg";
import Showcase from "./../assets/img/showcase.png";
import MockUp from "./../assets/img/hand-mockup.png";
import Showcase2 from "./../assets/img/showcase2.png";
import Author1 from "./../assets/img/author/author1.jpg";

const RefundPolicy = () => {
    return (
        <>
            <div className="home_container">
                <header className="header sticky">
                    <div className="container">
                        <div className="row flexbox-center">
                            <div className="col-lg-2 col-md-3 col-6">
                                <div className="logo">
                                    <a href="#home">
                                        <img src="./assets/img/Klout-Club.svg" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-9 col-6">
                                <div className="responsive-menu"></div>
                                <div className="mainmenu">
                                    <ul id="primary-menu">
                                        <li>
                                            <a className="appao-btn" href="/">
                                                Go to Home
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="hero-area" id="home">
                    <div className="container"></div>
                </section>

                <section className="ptb-90 w-full text-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div>
                                    <h1>Refund and Returns Policy</h1>
                                    <br />
                                    <hr />
                                    <br />
                                </div>
                            </div>

                        </div>

                        <div className="nv-content-wrap entry-content">
                            <p>Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we can’t offer you a full refund or exchange.</p>
                            <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
                            <p>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers, or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</p>

                            <p>Additional non-returnable items:</p>
                            <ul className="wp-block-list" style={{ listStyleType: "disc" }}>
                                <li>Gift cards</li>
                                <li>Downloadable software products</li>
                                <li>Some health and personal care items</li>
                            </ul>

                            <p>To complete your return, we require a receipt or proof of purchase.</p>
                            <p>Please do not send your purchase back to the manufacturer.</p>

                            <p>There are certain situations where only partial refunds are granted:</p>
                            <ul className="wp-block-list" style={{ listStyleType: "disc" }}>
                                <li>Books with obvious signs of use</li>
                                <li>CDs, DVDs, VHS tapes, software, video games, cassette tapes, or vinyl records that have been opened</li>
                                <li>Any item not in its original condition, is damaged, or missing parts for reasons not due to our error</li>
                                <li>Any item that is returned more than 30 days after delivery</li>
                            </ul>

                            <h2 style={{ fontWeight: "600" }}>Refunds</h2>
                            <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
                            <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>

                            <b>Late or Missing Refunds</b>
                            <p>If you haven’t received a refund yet, first check your bank account again.</p>
                            <p>Then contact your credit card company; it may take some time before your refund is officially posted.</p>
                            <p>Next, contact your bank. There is often some processing time before a refund is posted.</p>
                            <p>If you’ve done all of this and you still have not received your refund yet, please contact us at <a href="mailto:info@insightner.com">info@insightner.com</a>.</p>

                            <b>Sale Items</b>
                            <p>Only regular-priced items may be refunded. Sale items cannot be refunded.</p>

                            <h2 style={{ fontWeight: "600" }}>Exchanges</h2>
                            <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <a href="mailto:info@insightner.com">info@insightner.com</a> and send your item to:</p>
                            <p>Karma Kalpa, 9th Floor, Vipul Business Park, 911 & 909, Badshahpur Sohna Rd Hwy, Central Park II, Sector 48, Gurugram, Haryana 122004.</p>

                            <h2 style={{ fontWeight: "600" }}>Gifts</h2>
                            <p>If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>
                            <p>If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver, and they will find out about your return.</p>

                            <h2 style={{ fontWeight: "600" }}>Shipping Returns</h2>
                            <p>To return your product, you should mail your product to:</p>
                            <p>Karma Kalpa, 9th Floor, Vipul Business Park, 911 & 909, Badshahpur Sohna Rd Hwy, Central Park II, Sector 48, Gurugram, Haryana 122004.</p>
                            <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
                            <p>Depending on where you live, the time it may take for your exchanged product to reach you may vary.</p>
                            <p>If you are returning more expensive items, you may consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>

                            <h2 style={{ fontWeight: "600" }}>Need Help?</h2>
                            <p>Contact us at <a href="mailto:info@insightner.com">info@insightner.com</a> for questions related to refunds and returns.</p>
                        </div>
                    </div>
                </section>


                <footer className="footer" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt-5">
                                <div className="copyright-area">
                                    <p>
                                        Copyright &copy; 2025-26 All rights reserved | The Klout
                                        Club is made with &nbsp;
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                         {/* by &nbsp;
                                        <a href="https://insightner.com/" target="_blank">
                                            Insightner
                                        </a> */}
                                    </p>
                                    <p>
                                        <a href="/privacy-policy" target="_blank">
                                            Privacy Policy
                                        </a>
                                        &nbsp; | &nbsp;
                                        <a href="/terms-and-condition" target="_blank">
                                            Terms and Conditions
                                        </a>
                                        &nbsp; | &nbsp;
                                        <a href="/cancellation-policy" target="_blank">
                                            Refund Policy
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default RefundPolicy;
