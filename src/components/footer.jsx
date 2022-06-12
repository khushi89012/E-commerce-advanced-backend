import React from 'react'
import styled from "styled-components";

const Footers = styled.header`
  overflow: hidden;
  ul {
    list-style: none;
  }
  ul > li {
    margin-bottom: 15px;
    text-align: left;
    color: white;
  }
`;

export function Footer() {

  return (
        <Footers>
            <div >
                <div className="row">
                    <div className="col-md-4">
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className="col-md-4">
            <ul>
                <li>ONLINE STORE</li>
                <li>Sell online</li>
                <li>Features</li>
                <li>Exapmles</li>
                <li>Website builder</li>
                <li>Online retail</li>
                <li>Ecommerce software</li>
            </ul>
            </div>
            <div className="col-md-4">
            <ul>
                <li>Domain names</li>
                <li>Shopping cart</li>
                <li>Themes</li>
                <li>Ecommerce hoisting</li>
                <li>Mobile Commerce</li>
            </ul>
            </div>
            <div className="col-md-4">
            <ul>
                <li>Ecommerce Software</li>
                <li>Online Store builder</li>
                <li>Dropshipping Business</li>
                <li>Store</li>
            </ul>
            </div>
            </div>
            </div>


        </Footers>
  )
}