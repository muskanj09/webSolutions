import React from 'react'
import '../home/home.css'
import homeback from '../../image/homeback.webp'
import solutionImg from '../../image/solutionImg.webp'
import google from '../../image/google.jpeg'
import costco from '../../image/costco.png'
import journal from '../../image/journal.jpeg'
import { FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Home = () => {
    return (
        <>
            <img src={homeback} className='homeback' alt="" />
            <div className="section-solution">
                <div className="solution-text">
                    <h2>WEB SOLUTIONS</h2>
                    <h1>Small Business Website Design</h1>
                    <p>Established in 2011, Web Solutions provide small business website design services for small, medium and start-up companies looking to grow their business online.</p>
                    <p>Because we’re an all-in-one solutions provider, our experienced team of professionals cover all aspects of website creation – from design and development to SEO and hosting. Our services range from one page adverts to full e-commerce online shops. All our packages are upgradeable to meet your exact business requirements.</p>
                </div>
                <div className="solution-img">
                    <img src={solutionImg} alt="" />
                </div>
            </div>
            <div className="section-cards">
                <h3>ALL-IN-ONE SOLUTIONS PROVIDER</h3>
                <h1>Web Solutions</h1>
                <div className="card-flex">
                    <div className="card">
                        <div className="cardIcon">💻</div>
                        <h2>Web Design</h2>
                        <p>We offer everything from simple brochure websites to full Ecommerce online stores with full inventory management</p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="card">
                        <div className="cardIcon">📂</div>
                        <h2>Web Hosting</h2>
                        <p>Web Solutions offer first rate website and email hosting and our purpose built infrastructure is super fast, reliable and incredible value</p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="card">
                        <div className="cardIcon">📈</div>
                        <h2>SEO Marketing</h2>
                        <p>New for 2022, we have developed an affordable monthly SEO service that can help increase your website ranking online</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="card-flex">
                    <div className="card">
                        <div className="cardIcon">🔼</div>
                        <h2>Adwords PPC</h2>
                        <p>We offer everything from simple brochure websites to full Ecommerce online stores with full inventory management</p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="card">
                        <div className="cardIcon">✔️</div>
                        <h2>SSL Certificates</h2>
                        <p>Web Solutions offer first rate website and email hosting and our purpose built infrastructure is super fast, reliable and incredible valuee</p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="card">
                        <div className="cardIcon">📊</div>
                        <h2>Branding</h2>
                        <p>New for 2022, we have developed an affordable monthly SEO service that can help increase your website ranking onlinee</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
            <div className="section-funding">
                <h1>Website Funding Available Now</h1>
                <div className="funding-grid">
                    <div className="fundingText">
                        <h4>1 PAGE INFO WEBSITE - 30% OFF</h4>
                        <a href="#">NOW £199</a>
                        <h4>5 PAGE BROCHURE WEBSITE - 35% OFF</h4>
                        <a href="#">NOW £499</a>
                        <h4>E-COMMERCE ONLINE SHOP - 40% OFF</h4>
                        <a href="#">NOW £1199/span</a>
                    </div>
                    <div className="fundingContent">
                        <p>Web Solutions have been helping businesses get online for over 10 years and we’re able to secure website funding of up to 40% off for all new web projects. There are no difficult forms to fill in because we do it all for you!</p>
                        <p>Don’t miss out on these limited time discounts, send in your enquiry today!</p>
                    </div>
                </div>
            </div>
            <div className="section-project">
                <h3>SMALL BUSINESS WEBSITE DESIGN</h3>
                <h1>Recent Projects</h1>
                <div className="backProject">
                    <h1>1 st class cars new castle</h1>
                    <p>call us today on 01916030034</p>
                    <ul className="projectList">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Our Fleet</a></li>
                        <li><a href="#">Our Testimonials</a></li>
                    </ul>
                </div>
                <div className="projectContent">
                    <div className="projecttext">
                        <h1>FIRST CLASS CARS</h1>
                        <h3>A family run chauffer business
                            which offers a personal but comprehensive service</h3>
                    </div>
                    <a href="#">Visit Website</a>
                </div>
            </div>
            <div className="section-form">
                <div className="formContent">
                    <h2>Website Funding Up To 40% Available For All Projects While Funding Lasts. Get In Touch Today!</h2>
                    <p>Follow us for latest deals and offers</p>
                    <p>@websolutions @websitefunding</p>
                    <p>@smallbusinesswebsitedesign</p>
                </div>
                <div className="form">
                    <form action="" method="post">
                        <label htmlFor="name">Name *</label>
                        <input type="text" name='name' id='name' placeholder='Enter Your Name' />
                        <label htmlFor="email">Email *</label>
                        <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                        <label htmlFor="phone">Phone No</label>
                        <input type="number" name="phone" id="phone" placeholder='Enter Your Phone Number' />
                        <label htmlFor="businessName">Business Name</label>
                        <input type="text" name='businessName' id='businessName' placeholder='Enter Your Business Name' />
                        <button type="submit">NEXT</button>
                    </form>
                </div>
            </div>
            <div className="section-socialMedia">
                <img src={google} alt="" />
                <img src={costco} alt="" />
                <img src={journal} alt="" />
            </div>
            <div className="section-footer">
                <p>©2024 Web Solutions</p>
                <p>Website Funding available for Small Business Website Design</p>
                <div className="footerIcon">
                <FaTelegram className='footIcon' />
                <FaInstagramSquare className='footIcon' />
                <FaFacebookSquare className='footIcon' />
                </div>
            </div>
        </>
    )
}

export default Home