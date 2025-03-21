import React from "react";
import { Link } from "react-router-dom";

import QrCode from "./../assets/img/qr.svg";

// import Logo from "./../assets/img/Klout-Club.svg";

import Logo from "./../assets/img/Klout-Club-whitelogo.png";

import Showcase from "./../assets/img/showcase.png";
import MockUp from "./../assets/img/hand-mockup.png";
import Showcase2 from "./../assets/img/showcase2.png";
import Author1 from "./../assets/img/author/author1.jpg";

const TermsAndConditions = () => {
  return (
    <div className="home_container">
      <header class="header sticky">
        <div class="container">
          <div class="row flexbox-center">
            <div class="col-lg-2 col-md-3 col-6">
              <div class="logo">
                <a href="#home">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
            </div>
            <div class="col-lg-10 col-md-9 col-6">
              <div class="responsive-menu"></div>
              <div class="mainmenu">
                <ul id="primary-menu">
                  <li>
                    <Link class="appao-btn" to="/">
                      Go to Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Hero Area --> */}
      <section class="hero-area" id="home">
        <div class="container">
          {/* <div class="row">
            <div class="col-lg-7">
              <div class="hero-area-content">
                <h1>Explore new markets with the superpower of networking</h1>
                <p>
                  Get in touch with founders and C-levels, earn Social Capital
                  points for helping each other and get support every step of
                  the way from the people who've already walked your path.
                </p>
                <a href="#" class="appao-btn">
                  Google Play
                </a>
                <a href="#" class="appao-btn">
                  App Store
                </a>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="hand-mockup text-lg-left text-center">
                <img src={MockUp} alt="Hand Mockup" />
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* <!-- About Klout --> */}
      <section class="about-area ptb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="sec-title"
                style={{ maxWidth: "100%", textAlign: "left" }}
              >
                <h2>
                  <strong>Terms and Conditions</strong>
                </h2>
                <hr />
                <br />

                <p>Welcome to Klout Club!</p>

                <p>
                  These terms and conditions outline the rules and regulations
                  for the use of Klout Club's Website, located at
                  <a
                    href="https://www.termsandconditionsgenerator.com"
                    target="_blank"
                  >
                    https://www.termsandconditionsgenerator.com
                  </a>
                </p>

                <p>
                  By accessing this website we assume you accept these terms and
                  conditions. Do not continue to use Klout Club if you do not
                  agree to take all of the terms and conditions stated on this
                  page.
                </p>

                <p>
                  The following terminology applies to these Terms and
                  Conditions, Privacy Statement and Disclaimer Notice and all
                  Agreements: "Client", "You" and "Your" refers to you, the
                  person log on this website and compliant to the Company's
                  terms and conditions. "The Company", "Ourselves", "We", "Our"
                  and "Us", refers to our Company. "Party", "Parties", or "Us",
                  refers to both the Client and ourselves. All terms refer to
                  the offer, acceptance and consideration of payment necessary
                  to undertake the process of our assistance to the Client in
                  the most appropriate manner for the express purpose of meeting
                  the Client's needs in respect of provision of the Company's
                  stated services, in accordance with and subject to, prevailing
                  law of in. Any use of the above terminology or other words in
                  the singular, plural, capitalization and/or he/she or they,
                  are taken as interchangeable and therefore as referring to
                  same.
                </p>

                <h3>
                  <strong>Cookies</strong>
                </h3>

                <p>
                  We employ the use of cookies. By accessing Klout Club, you
                  agreed to use cookies in agreement with the Klout Club's
                  Privacy Policy.{" "}
                </p>

                <p>
                  Most interactive websites use cookies to let us retrieve the
                  user's details for each visit. Cookies are used by our website
                  to enable the functionality of certain areas to make it easier
                  for people visiting our website. Some of our
                  affiliate/advertising partners may also use cookies.
                </p>

                <h3>
                  <strong>License</strong>
                </h3>

                <p>
                  Unless otherwise stated, Klout Club and/or its licensors own
                  the intellectual property rights for all material on Klout
                  Club. All intellectual property rights are reserved. You may
                  access this from Klout Club for your own personal use
                  subjected to restrictions set in these terms and conditions.
                </p>

                <p>You must not:</p>
                <ul>
                  <li>Republish material from Klout Club</li>
                  <li>Sell, rent or sub-license material from Klout Club</li>
                  <li>Reproduce, duplicate or copy material from Klout Club</li>
                  <li>Redistribute content from Klout Club</li>
                </ul>

                <p>
                  This Agreement shall begin on the date hereof. Our Terms and
                  Conditions were created with the help of the{" "}
                  <a href="https://www.termsandconditionsgenerator.com">
                    Free Terms and Conditions Generator
                  </a>
                  .
                </p>

                <p>
                  Parts of this website offer an opportunity for users to post
                  and exchange opinions and information in certain areas of the
                  website. Klout Club does not filter, edit, publish or review
                  Comments prior to their presence on the website. Comments do
                  not reflect the views and opinions of Klout Club,its agents
                  and/or affiliates. Comments reflect the views and opinions of
                  the person who post their views and opinions. To the extent
                  permitted by applicable laws, Klout Club shall not be liable
                  for the Comments or for any liability, damages or expenses
                  caused and/or suffered as a result of any use of and/or
                  posting of and/or appearance of the Comments on this website.
                </p>

                <p>
                  Klout Club reserves the right to monitor all Comments and to
                  remove any Comments which can be considered inappropriate,
                  offensive or causes breach of these Terms and Conditions.
                </p>

                <p>You warrant and represent that:</p>

                <ul>
                  <li>
                    You are entitled to post the Comments on our website and
                    have all necessary licenses and consents to do so;
                  </li>
                  <li>
                    The Comments do not invade any intellectual property right,
                    including without limitation copyright, patent or trademark
                    of any third party;
                  </li>
                  <li>
                    The Comments do not contain any defamatory, libelous,
                    offensive, indecent or otherwise unlawful material which is
                    an invasion of privacy
                  </li>
                  <li>
                    The Comments will not be used to solicit or promote business
                    or custom or present commercial activities or unlawful
                    activity.
                  </li>
                </ul>

                <p>
                  You hereby grant Klout Club a non-exclusive license to use,
                  reproduce, edit and authorize others to use, reproduce and
                  edit any of your Comments in any and all forms, formats or
                  media.
                </p>

                <h3>
                  <strong>Hyperlinking to our Content</strong>
                </h3>

                <p>
                  The following organizations may link to our Website without
                  prior written approval:
                </p>

                <ul>
                  <li>Government agencies;</li>
                  <li>Search engines;</li>
                  <li>News organizations;</li>
                  <li>
                    Online directory distributors may link to our Website in the
                    same manner as they hyperlink to the Websites of other
                    listed businesses; and
                  </li>
                  <li>
                    System wide Accredited Businesses except soliciting
                    non-profit organizations, charity shopping malls, and
                    charity fundraising groups which may not hyperlink to our
                    Web site.
                  </li>
                </ul>

                <p>
                  These organizations may link to our home page, to publications
                  or to other Website information so long as the link: (a) is
                  not in any way deceptive; (b) does not falsely imply
                  sponsorship, endorsement or approval of the linking party and
                  its products and/or services; and (c) fits within the context
                  of the linking party's site.
                </p>

                <p>
                  We may consider and approve other link requests from the
                  following types of organizations:
                </p>

                <ul>
                  <li>
                    commonly-known consumer and/or business information sources;
                  </li>
                  <li>dot.com community sites;</li>
                  <li>associations or other groups representing charities;</li>
                  <li>online directory distributors;</li>
                  <li>internet portals;</li>
                  <li>accounting, law and consulting firms; and</li>
                  <li>educational institutions and trade associations.</li>
                </ul>

                <p>
                  We will approve link requests from these organizations if we
                  decide that: (a) the link would not make us look unfavorably
                  to ourselves or to our accredited businesses; (b) the
                  organization does not have any negative records with us; (c)
                  the benefit to us from the visibility of the hyperlink
                  compensates the absence of Klout Club; and (d) the link is in
                  the context of general resource information.
                </p>

                <p>
                  These organizations may link to our home page so long as the
                  link: (a) is not in any way deceptive; (b) does not falsely
                  imply sponsorship, endorsement or approval of the linking
                  party and its products or services; and (c) fits within the
                  context of the linking party's site.
                </p>

                <p>
                  If you are one of the organizations listed in paragraph 2
                  above and are interested in linking to our website, you must
                  inform us by sending an e-mail to Klout Club. Please include
                  your name, your organization name, contact information as well
                  as the URL of your site, a list of any URLs from which you
                  intend to link to our Website, and a list of the URLs on our
                  site to which you would like to link. Wait 2-3 weeks for a
                  response.
                </p>

                <p>
                  Approved organizations may hyperlink to our Website as
                  follows:
                </p>

                <ul>
                  <li>By use of our corporate name; or</li>
                  <li>
                    By use of the uniform resource locator being linked to; or
                  </li>
                  <li>
                    By use of any other description of our Website being linked
                    to that makes sense within the context and format of content
                    on the linking party's site.
                  </li>
                </ul>

                <p>
                  No use of Klout Club's logo or other artwork will be allowed
                  for linking absent a trademark license agreement.
                </p>

                <h3>
                  <strong>iFrames</strong>
                </h3>

                <p>
                  Without prior approval and written permission, you may not
                  create frames around our Webpages that alter in any way the
                  visual presentation or appearance of our Website.
                </p>

                <h3>
                  <strong>Content Liability</strong>
                </h3>

                <p>
                  We shall not be hold responsible for any content that appears
                  on your Website. You agree to protect and defend us against
                  all claims that is rising on your Website. No link(s) should
                  appear on any Website that may be interpreted as libelous,
                  obscene or criminal, or which infringes, otherwise violates,
                  or advocates the infringement or other violation of, any third
                  party rights.
                </p>

                <p>
                  Content Moderation and User Conduct
                  Objectionable Content Reporting
                </p>

                <p>
                  Users of our platform are encouraged to report any content they find objectionable. Objectionable content includes, but is not limited to, any material that is offensive, inappropriate, or in violation of our community standards and guidelines.
                  
                </p>

                <p>
                Our Response Time <br />
                  Upon receiving a report of objectionable content, the Klout team is committed to taking prompt action. The Klout team will review the reported content within 24 hours of receiving the report.
                </p>

                <p>
                Content Removal <br />
                  If the content is deemed objectionable upon review, the Klout team will remove the content from the platform within the 24-hour period.
                  
                </p>

                <p>
                User Ejection <br />
                  In addition to removing the offending content, the user who provided the objectionable content will be ejected from the platform. This means their account will be suspended or terminated to maintain a safe and respectful community environment.
                  
                </p>

                <p>
                Appeal Process <br />
                  Users who have been ejected from the platform have the right to appeal the decision. Appeals must be submitted within 7 days of the ejection notice. Klout team will review appeals and respond within 14 days.
                  
                </p>

                <p>
                Amendments <br />
                Klout team reserves the right to amend these terms and conditions at any time. Changes will be effective immediately upon posting to the platform. Continued use of the platform following any amendments constitutes acceptance of the new terms and conditions.
                </p>

                <h3>
                  <strong>Reservation of Rights</strong>
                </h3>

                <p>
                  We reserve the right to request that you remove all links or
                  any particular link to our Website. You approve to immediately
                  remove all links to our Website upon request. We also reserve
                  the right to amen these terms and conditions and it's linking
                  policy at any time. By continuously linking to our Website,
                  you agree to be bound to and follow these linking terms and
                  conditions.
                </p>

                <h3>
                  <strong>Removal of links from our website</strong>
                </h3>

                <p>
                  If you find any link on our Website that is offensive for any
                  reason, you are free to contact and inform us any moment. We
                  will consider requests to remove links but we are not
                  obligated to or so or to respond to you directly.
                </p>

                <p>
                  We do not ensure that the information on this website is
                  correct, we do not warrant its completeness or accuracy; nor
                  do we promise to ensure that the website remains available or
                  that the material on the website is kept up to date.
                </p>

                <h3>
                  <strong>Disclaimer</strong>
                </h3>

                <p>
                  To the maximum extent permitted by applicable law, we exclude
                  all representations, warranties and conditions relating to our
                  website and the use of this website. Nothing in this
                  disclaimer will:
                </p>

                <ul>
                  <li>
                    limit or exclude our or your liability for death or personal
                    injury;
                  </li>
                  <li>
                    limit or exclude our or your liability for fraud or
                    fraudulent misrepresentation;
                  </li>
                  <li>
                    limit any of our or your liabilities in any way that is not
                    permitted under applicable law; or
                  </li>
                  <li>
                    exclude any of our or your liabilities that may not be
                    excluded under applicable law.
                  </li>
                </ul>

                <p>
                  The limitations and prohibitions of liability set in this
                  Section and elsewhere in this disclaimer: (a) are subject to
                  the preceding paragraph; and (b) govern all liabilities
                  arising under the disclaimer, including liabilities arising in
                  contract, in tort and for breach of statutory duty.
                </p>

                <p>
                  As long as the website and the information and services on the
                  website are provided free of charge, we will not be liable for
                  any loss or damage of any nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Your email address here" />
                  <button type="submit">Subcribe</button>
                </form>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="copyright-area">
                <ul>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-brand-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-google-plus"></i>
                    </a>
                  </li>
                </ul>
                <p>
                  Copyright &copy; 2025-26 All rights reserved | The Klout Club
                  is made with &nbsp;
                  <i class="fa fa-heart-o" aria-hidden="true"></i> by &nbsp;
                  <a href="https://insightner.com/" target="_blank">
                    Insightner
                  </a>
                </p>

                <p>
                  <a href="/privacypolicy.html" target="_blank">
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
  );
};

export default TermsAndConditions;
