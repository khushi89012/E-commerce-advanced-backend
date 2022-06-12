import { Link } from 'react-router-dom';
import "../styles/home.css"
export const Home = ()=>{
    return(
        <div className="back-color">
           
            <div className="home-pic">
               
              <h3>Shopify Blog</h3>
            </div>
            <div className="catogary">
                <div>Latest Articals</div>
                <div>Need an Idea?</div>
                <div>Souce Code</div>
                <div>Start your Sources</div>
                <div></div>
                <div></div>
                
                

                <div></div>
                <div>Founder Upates</div>
                <div>Product updates</div>
               
            </div>


            <div className="post-1">
                <h1>50 Exceptional Shopify Stores to Inspire Entrepreneurs</h1>
                <a href="#">by Shuang Esther Shan Founder Stories</a>
                <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/shopify_best50_colours_new_RESIZED.jpg?v=1635364906&width=1024"
                style={{width:"60%",height:"50%"}}/>
                <h4>Here’s a list of best Shopify stores that supply a jolt of inspiration for those who are on the journey of building their own business. These businesses are creating change by turning trash into fabrics, preserving heritage variety of crops, developing cult-favorite beauty products, eliminating single-use items, and so much more.

                </h4>

               
    
            </div>
           

            <div className="post-1">
                <h1>BLK and Bold</h1>
                <a href="#"></a>
                <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/Screen_Shot_2020-07-17_at_11.34.45_AM.png?format=jpg&quality=90&v=1596140709"
                style={{width:"60%",height:"50%"}}/>
                <h4>
                Browsing Adored Vintage is a good-looking Shopify store with vintage clothing and vintage-inspired modern pieces is like a virtual escape to a romantic French countryside. Owner Rodellee Bas curates and creates pieces out of her affinity for silhouettes of times past. Adored Vintage donates a portion of its revenue to local classrooms, and Rodellee is a regular mentor to other women in business.
                    
                </h4>

               
    
            </div>

            <div className="post-1">
                <h1>Partake Foods</h1>
                <a href="#">by Shuang Esther Shan Founder Stories</a>
                <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/Screen_Shot_2020-07-17_at_12.04.36_PM.png?format=jpg&quality=90&v=1596137581"
                style={{width:"60%",height:"50%"}}/>
                <h4>
                Pernell Cezar Jr. and Rod Johnson founded BLK & Bold with the purpose of helping local communities through the sale of caffeinated beverages. BLK & Bold leverages wholesale and direct-to-consumer as a force to equip young people with tools to live their best lives and overcome unfortunate circumstances. The company pledges 5% of profits to initiatives that sustain youth programs, enhance workforce development, and eradicate youth homelessness.
                </h4>

               
    
            </div>
            
        </div>
    )
}