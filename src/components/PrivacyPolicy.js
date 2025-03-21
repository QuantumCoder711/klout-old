import React from "react";

import { Link } from "react-router-dom";

import QrCode from "./../assets/img/qr.svg";
import Logo from "./../assets/img/Klout-Club.svg";
import Showcase from "./../assets/img/showcase.png";
import MockUp from "./../assets/img/hand-mockup.png";
import Showcase2 from "./../assets/img/showcase2.png";
import Author1 from "./../assets/img/author/author1.jpg";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="home_container">
        <header class="header sticky">
          <div class="container">
            <div class="row flexbox-center">
              <div class="col-lg-2 col-md-3 col-6">
                <div class="logo">
                  <a href="#home">
                    <img src="./assets/img/Klout-Club.svg" alt="logo" />
                  </a>
                </div>
              </div>
              <div class="col-lg-10 col-md-9 col-6">
                <div class="responsive-menu"></div>
                <div class="mainmenu">
                  <ul id="primary-menu">
                    <li>
                      <a class="appao-btn" href="/">
                        Go to Home
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section class="hero-area" id="home">
          <div class="container"></div>
        </section>

        <section
          class=" ptb-90"
          style={{ maxWidth: "100%", textAlign: "left" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div>
                  <h1>Privacy Policy</h1>
                  <hr />
                  <br />
                  <h2>
                    <strong>01. INTRODUCTION </strong>
                  </h2>
                  <br />
                  <p>
                    <strong>Last updated: March 13, 2024</strong>
                  </p>
                  <br />
                  <p>
                    This Privacy Policy describes Our policies and procedures on
                    the collection, use and disclosure of Your information when
                    You use the Service and tells You about Your privacy rights
                    and how the law protects You.
                  </p>
                  <br />
                  <p>
                    We use Your Personal data to provide and improve the
                    Service. By using the Service, You agree to the collection
                    and use of information in accordance with this Privacy
                    Policy. This Privacy Policy has been created with the help
                    of the <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">Privacy Policy Generator</a>.
                  </p>
                  <br />
                  <h3>Interpretation and Definitions</h3>
                  <br />
                  <p>
                    <strong>Interpretation</strong>
                  </p>
                  <br />
                  <p>
                    The words of which the initial letter is capitalized have
                    meanings defined under the following conditions. The
                    following definitions shall have the same meaning regardless
                    of whether they appear in singular or in plural.
                  </p>
                  <br />
                  <h3>Definitions</h3>
                  <br />
                  For the purposes of this Privacy Policy:
                  <br />
                  <br />
                  <ul>
                    <li>
                      • Account means a unique account created for You to access
                      our Service or parts of our Service.
                    </li>
                    <br />
                    <li>
                      • Affiliate means an entity that controls, is controlled
                      by or is under common control with a party, where
                      "control" means ownership of 50% or more of the shares,
                      equity interest or other securities entitled to vote for
                      election of directors or other managing authority.
                    </li>
                    <br />
                    <li>
                      • Application refers to Klout Club, the software program provided by the Company under the legal entity of Insightner Marketing Services.
                    </li>
                    <br />
                    <li>
                      • Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Klout Club or Insightner Marketing Services.
                    </li>
                    <br />
                    <li>• Country refers to: Delhi, India</li>
                    <br />
                    <li>
                      • Device means any device that can access the Service such
                      as a computer, a cellphone or a digital tablet.
                    </li>
                    <br />
                    <li>
                      • Personal Data is any information that relates to an
                      identified or identifiable individual.
                    </li>
                    <br />
                    <li>• Service refers to the Application.</li>
                    <br />
                    <li>
                      • Service Provider means any natural or legal person who
                      processes the data on behalf of the Company. It refers to
                      third-party companies or individuals employed by the
                      Company to facilitate the Service, to provide the Service
                      on behalf of the Company, to perform services related to
                      the Service or to assist the Company in analyzing how the
                      Service is used.
                    </li>
                    <br />
                    <li>
                      • Third-party Social Media Service refers to any website
                      or any social network website through which a User can log
                      in or create an account to use the Service.
                    </li>
                    <br />
                    <li>
                      • Usage Data refers to data collected automatically,
                      either generated by the use of the Service or from the
                      Service infrastructure itself (for example, the duration
                      of a page visit).
                    </li>
                    <br />
                    <li>
                      • You means the individual accessing or using the Service,
                      or the company, or other legal entity on behalf of which
                      such individual is accessing or using the Service, as
                      applicable.
                    </li>
                    <br />
                  </ul>
                  <br />
                  <h3>Collecting and Using Your Personal Data</h3>
                  <br />
                  <p>
                    <strong>Types of Data Collected</strong>
                  </p>
                  <p>
                    <strong>Personal Data</strong>
                  </p>
                  <p>
                    While using Our Service, We may ask You to provide Us with
                    certain personally identifiable information that can be used
                    to contact or identify You. Personally identifiable
                    information may include, but is not limited to:
                  </p>
                  <br />
                  <ul>
                    <li>• Email address</li>
                    <br />
                    <li>• First name and last name</li>
                    <br />
                    <li>• Phone number</li>
                    <br />
                    {/* <li>• Address, State, Province, ZIP/Postal code, City</li> */}
                    <br />
                    <li>• Usage Data</li>
                    <br />
                  </ul>
                  <p>
                    {" "}
                    <strong>Usage Data </strong>
                  </p>
                  <br />
                  <p>
                    Usage Data is collected automatically when using the
                    Service.
                  </p>
                  <br />
                  <p>
                    Usage Data may include information such as Your Device's
                    Internet Protocol address (e.g. IP address), browser type,
                    browser version, the pages of our Service that You visit,
                    the time and date of Your visit, the time spent on those
                    pages, unique device identifiers and other diagnostic data.
                  </p>
                  <br />
                  <p>
                    When You access the Service by or through a mobile device,
                    We may collect certain information automatically, including,
                    but not limited to, the type of mobile device You use, Your
                    mobile device unique ID, the IP address of Your mobile
                    device, Your mobile operating system, the type of mobile
                    Internet browser You use, unique device identifiers and
                    other diagnostic data.
                  </p>
                  <br />
                  <p>
                    We may also collect information that Your browser sends
                    whenever You visit our Service or when You access the
                    Service by or through a mobile device.
                  </p>
                  <br />
                  <h3>Information from Third-Party Social Media Services</h3>
                  <br />
                  <p>
                    The Company allows You to create an account and log in to
                    use the Service through the following Third-party Social
                    Media Services:
                  </p>
                  <ul>
                    <li>• Google</li>
                    <br />
                    <li>• Facebook</li>
                    <br />
                    <li>• Instagram</li>
                    <br />
                    <li>• Twitter</li>
                    <br />
                    <li>• LinkedIn</li>
                  </ul>
                  <br />
                  <p>
                    If You decide to register through or otherwise grant us
                    access to a Third-Party Social Media Service, We may collect
                    Personal data that is already associated with Your
                    Third-Party Social Media Service's account, such as Your
                    name, Your email address, Your activities or Your contact
                    list associated with that account.
                  </p>
                  <br />
                  <p>
                    You may also have the option of sharing additional
                    information with the Company through Your Third-Party Social
                    Media Service's account. If You choose to provide such
                    information and Personal Data, during registration or
                    otherwise, You are giving the Company permission to use,
                    share, and store it in a manner consistent with this Privacy
                    Policy.
                  </p>
                  <h3>Information Collected while Using the Application </h3>
                  <br />
                  <p>
                    While using Our Application, in order to provide features of
                    Our Application, We may collect, with Your prior permission:
                  </p>
                  <br />
                  <ul>
                    <li>• Information regarding your location</li>
                    <br />
                    <li>
                      • Information from your Device's phone book (contacts
                      list)
                    </li>
                    <br />
                    <li>
                      • Pictures and other information from your Device's camera and photo library
                    </li>
                  </ul>
                  <br />
                  <p>
                    We use this information to provide features of Our Service,
                    to improve and customize Our Service. The information may be
                    uploaded to the Company's servers and/or a Service
                    Provider's server or it may be simply stored on Your device.
                  </p>
                  <br />
                  <p>
                    {" "}
                    You can enable or disable access to this information at any
                    time, through Your Device settings.
                  </p>
                  <br />
                  <h3>Use of Your Personal Data</h3>
                  <br />
                  <p>
                    The Company may use Personal Data for the following
                    purposes:
                  </p>
                  <br />
                  <ul>
                    <li>
                      {" "}
                      • To provide and maintain our Service, including to
                      monitor the usage of our Service.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • To manage Your Account: to manage Your registration as a
                      user of the Service. The Personal Data You provide can
                      give You access to different functionalities of the
                      Service that are available to You as a registered user.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • For the performance of a contract: the development,
                      compliance and undertaking of the purchase contract for
                      the products, items or services You have purchased or of
                      any other contract with Us through the Service.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • To contact You: To contact You by email, telephone
                      calls, SMS, or other equivalent forms of electronic
                      communication, such as a mobile application's push
                      notifications regarding updates or informative
                      communications related to the functionalities, products or
                      contracted services, including the security updates, when
                      necessary or reasonable for their implementation.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • To provide You with news, special offers and general
                      information about other goods, services and events which
                      we offer that are similar to those that you have already
                      purchased or enquired about unless You have opted not to
                      receive such information.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • To manage Your requests: To attend and manage Your
                      requests to Us.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • For business transfers: We may use Your information to
                      evaluate or conduct a merger, divestiture, restructuring,
                      reorganization, dissolution, or other sale or transfer of
                      some or all of Our assets, whether as a going concern or
                      as part of bankruptcy, liquidation, or similar proceeding,
                      in which Personal Data held by Us about our Service users
                      is among the assets transferred.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • For other purposes: We may use Your information for
                      other purposes, such as data analysis, identifying usage
                      trends, determining the effectiveness of our promotional
                      campaigns and to evaluate and improve our Service,
                      products, services, marketing and your experience.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • We may share Your personal information in the following
                      situations:
                    </li>
                    <br />
                    <li>
                      {" "}
                      • With Service Providers: We may share Your personal
                      information with Service Providers to monitor and analyze
                      the use of our Service, to contact You.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • For business transfers: We may share or transfer Your
                      personal information in connection with, or during
                      negotiations of, any merger, sale of Company assets,
                      financing, or acquisition of all or a portion of Our
                      business to another company.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • With Affiliates: We may share Your information with Our
                      affiliates, in which case we will require those affiliates
                      to honor this Privacy Policy. Affiliates include Our
                      parent company and any other subsidiaries, joint venture
                      partners or other companies that We control or that are
                      under common control with Us.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • With business partners: We may share Your information
                      with Our business partners to offer You certain products,
                      services or promotions.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • With other users: when You share personal information or
                      otherwise interact in the public areas with other users,
                      such information may be viewed by all users and may be
                      publicly distributed outside. If You interact with other
                      users or register through a Third-Party Social Media
                      Service, Your contacts on the Third-Party Social Media
                      Service may see Your name, profile, pictures and
                      description of Your activity. Similarly, other users will
                      be able to view descriptions of Your activity, communicate
                      with You and view Your profile.
                    </li>
                    <br />
                    <li>
                      {" "}
                      • With Your consent: We may disclose Your personal
                      information for any other purpose with Your consent.
                    </li>
                    <br />
                  </ul>
                  <br />
                  <h3>Retention of Your Personal Data</h3>
                  <br />
                  <p>
                    The Company will retain Your Personal Data only for as long
                    as is necessary for the purposes set out in this Privacy
                    Policy. We will retain and use Your Personal Data to the
                    extent necessary to comply with our legal obligations (for
                    example, if we are required to retain your data to comply
                    with applicable laws), resolve disputes, and enforce our
                    legal agreements and policies.
                  </p>
                  <br />
                  <p>
                    The Company will also retain Usage Data for internal
                    analysis purposes. Usage Data is generally retained for a
                    shorter period of time, except when this data is used to
                    strengthen the security or to improve the functionality of
                    Our Service, or We are legally obligated to retain this data
                    for longer time periods.
                  </p>
                  <br />
                  <h3>Transfer of Your Personal Data</h3>
                  <br />
                  <p>
                    Your information, including Personal Data, is processed at
                    the Company's operating offices and in any other places
                    where the parties involved in the processing are located. It
                    means that this information may be transferred to — and
                    maintained on — computers located outside of Your state,
                    province, country or other governmental jurisdiction where
                    the data protection laws may differ than those from Your
                    jurisdiction.
                  </p>
                  <br />
                  <p>
                    Your consent to this Privacy Policy followed by Your
                    submission of such information represents Your agreement to
                    that transfer.
                  </p>
                  <br />
                  <p>
                    The Company will take all steps reasonably necessary to
                    ensure that Your data is treated securely and in accordance
                    with this Privacy Policy and no transfer of Your Personal
                    Data will take place to an organization or a country unless
                    there are adequate controls in place including the security
                    of Your data and other personal information.
                  </p>
                  <br />
                  <h3>Delete Your Personal Data</h3>
                  <br />
                  <p>
                    You have the right to delete or request that We assist in
                    deleting the Personal Data that We have collected about You.
                  </p>{" "}
                  <br />
                  <p>
                    Our Service may give You the ability to delete certain
                    information about You from within the Service.
                  </p>
                  <br />
                  <p>
                    You may update, amend, or delete Your information at any
                    time by signing in to Your Account, if you have one, and
                    visiting the account settings section that allows you to
                    manage Your personal information. You may also contact Us to
                    request access to, correct, or delete any personal
                    information that You have provided to Us.
                  </p>{" "}
                  <br />
                  <p>
                    Please note, however, that We may need to retain certain
                    information when we have a legal obligation or lawful basis
                    to do so.
                  </p>
                  <br />
                  <h3>Disclosure of Your Personal Data </h3>
                  <br />
                  <p>
                    {" "}
                    <strong>Business Transactions </strong>
                  </p>
                  <br />
                  <p>
                    If the Company is involved in a merger, acquisition or asset
                    sale, Your Personal Data may be transferred. We will provide
                    notice before Your Personal Data is transferred and becomes
                    subject to a different Privacy Policy.
                  </p>
                  <br />
                  <p>
                    {" "}
                    <strong> Law enforcement</strong>{" "}
                  </p>
                  <br />
                  <p>
                    {" "}
                    Under certain circumstances, the Company may be required to
                    disclose Your Personal Data if required to do so by law or
                    in response to valid requests by public authorities (e.g. a
                    court or a government agency).
                  </p>
                  <br />
                  <p>
                    <strong>Other legal requirements</strong>
                  </p>
                  <br />
                  <p>
                    The Company may disclose Your Personal Data in the good
                    faith belief that such action is necessary to:
                  </p>
                  <br />
                  <ul>
                    <li> • Comply with a legal obligation</li>
                    <br />
                    <li>
                      • Protect and defend the rights or property of the Company
                    </li>
                    <br />
                    <li>
                      {" "}
                      • Prevent or investigate possible wrongdoing in connection
                      with the Service
                    </li>
                    <br />
                    <li>
                      {" "}
                      • Protect the personal safety of Users of the Service or
                      the public
                    </li>
                    <br />

                    <li> • Protect against legal liability</li>
                  </ul>
                  <br />
                  <h3>Security of Your Personal Data</h3>
                  <br />
                  <p>
                    The security of Your Personal Data is important to Us, but
                    remember that no method of transmission over the Internet,
                    or method of electronic storage is 100% secure. While We
                    strive to use commercially acceptable means to protect Your
                    Personal Data, We cannot guarantee its absolute security.
                  </p>
                  <br />
                  <h3>Children's Privacy</h3>
                  <br />
                  <p>
                    {" "}
                    Our Service does not address anyone under the age of 13. We
                    do not knowingly collect personally identifiable information
                    from anyone under the age of 13. If You are a parent or
                    guardian and You are aware that Your child has provided Us
                    with Personal Data, please contact Us. If We become aware
                    that We have collected Personal Data from anyone under the
                    age of 13 without verification of parental consent, We take
                    steps to remove that information from Our servers.
                  </p>
                  <br />
                  <p>
                    {" "}
                    If We need to rely on consent as a legal basis for
                    processing Your information and Your country requires
                    consent from a parent, We may require Your parent's consent
                    before We collect and use that information.
                  </p>
                  <br />
                  <h3> Links to Other Websites</h3>
                  <br />
                  <p>
                    Our Service may contain links to other websites that are not
                    operated by Us. If You click on a third party link, You will
                    be directed to that third party's site. We strongly advise
                    You to review the Privacy Policy of every site You visit.
                  </p>
                  <br />
                  <p>
                    We have no control over and assume no responsibility for the
                    content, privacy policies or practices of any third party
                    sites or services.
                  </p>
                  <br />
                  <h3>Changes to this Privacy Policy</h3>
                  <br />
                  <p>
                    We may update Our Privacy Policy from time to time. We will
                    notify You of any changes by posting the new Privacy Policy
                    on this page.
                  </p>
                  <br />
                  <p>
                    We will let You know via email and/or a prominent notice on
                    Our Service, prior to the change becoming effective and
                    update the "Last updated" date at the top of this Privacy
                    Policy.
                  </p>
                  <br />
                  <p>
                    You are advised to review this Privacy Policy periodically
                    for any changes. Changes to this Privacy Policy are
                    effective when they are posted on this page.
                  </p>
                  <br />
                  <br />
                  <h3>Contact Us</h3>
                  <br />
                  <p>
                    If you have any questions about this Privacy Policy, You can
                    contact us:
                  </p>
                  <br />
                  <p>By email: value@klout.club</p>
                  <p>By phone number: +919643314331</p>
                  {/* <p>
                    By mail: 10, Poorvi Marg, DLF Phase 2, Gurgaon Haryana (
                    India )- 122008
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer" id="contact">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 mt-5">
                <div class="copyright-area">
                  <p>
                    Copyright &copy; 2025-26 All rights reserved | The Klout
                    Club is made with &nbsp;
                    <i class="fa fa-heart-o" aria-hidden="true"></i> by &nbsp;
                    {/* <a href="https://insightner.com/" target="_blank">
                      Insightner
                    </a> */}
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
    </>
  );
};

export default PrivacyPolicy;
