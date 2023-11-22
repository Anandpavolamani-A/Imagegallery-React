import './Header.css'

function Header() {
    return (
        <div className="container">
            <div className="mx-w df ai-c jcsb">
                <div><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg" alt="logo" /></div>
                <div><i class="fa fa-bars" aria-hidden="true" style={{ margin: "0px 5px",color:"white" }}></i><a href="">Menu</a></div> 
                <div className="items df ai-c">
                    <div><form action="/action_page.php">
                        <input type="text" placeholder="What are u looking for?" name="search" className='search'/>
                        <button className="size" type="submit">
                            <i class="fa fa-search"></i></button>
                    </form></div>
                    <i class="fa fa-map-marker" aria-hidden="true" style={{ margin: "0px 5px",color:"white",fontSize:"20px" }}></i><p>Delivery at : Chengalpattu, 600045</p>
                    <i class="fa fa-user" aria-hidden="true" style={{margin: "0px 30px",color:"white",fontSize:"30px"}}></i>
                    <i class="fa fa-shopping-cart" aria-hidden="true" style={{color:"white",fontSize:"30px"}}></i>
                </div>
            </div>
        </div>
    )
}
export default Header;