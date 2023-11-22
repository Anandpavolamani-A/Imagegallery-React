import './Imagegallery.css';

function Imagegallery(props) {

    let imgobj1 = [{
        id: 1,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688582249/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272402_0_tf1cka.png',
        heading: 'Lenovo IdeaPad Gaming 3 15ACH6 Intel i7 (15.6 inch, 16GB, 1GB, Windows 11, 82K2022XIN)',
        additional: '1500 off on payment OTP page',
        rating: '4.9',
        reviews: '(63 Ratings & 58 Reviews)',
        price: '99,490',
        discount: 'MRP: ₹1,01,290',
        offer: '(Save ₹21,800) 31% Off',
        category: 'all lap'
    }, {
        id: 2,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688581834/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272534_0_apeoee.png',
        heading: 'HP 15s-fr5009TU Intel Core i3 12th Gen (15.6 inch, 8GB, 512GB, Windows 11, 7Q6Z9PA#ACJ)',
        additional: '1000 off on payment OTP page',
        rating: '4.5',
        reviews: '(2 Ratings & 1 Review)',
        price: '41,490',
        discount: 'MRP: ₹51,134',
        offer: '(Save ₹9,644) 19% Off',
        category: 'all lap'
    }, {
        id: 3,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685174113/Croma%20Assets/Computers%20Peripherals/Laptop/Images/273492_exxmjk.png',
        heading: 'ASUS TUF Gaming A15 FA577NU-LP082W AMD Ryzen 7 (15.6 inch, 16GB, 512GB, 90NR0EB8-M007B0)',
        additional: '3500 off on payment OTP page',
        rating: '4.8',
        reviews: '(193 Ratings & 185 Reviews)',
        price: '99,990',
        discount: 'MRP: ₹1,09,900',
        offer: '(Save ₹17,910) 18% Off',
        category: 'all lap'
    }, {
        id: 4,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1693988324/Croma%20Assets/Computers%20Peripherals/Laptop/Images/300278_ytz6sc.png',
        heading: 'acer Swift Go Intel Core i5 13th Gen (14 inch, 16GB, 512GB, Windows 11 Home, MS Office 2021,  NXKPZSI002)',
        additional: '3000 off on payment OTP page',
        rating: '4.2',
        reviews: '(2 Ratings & 1 Review)',
        price: '64,990',
        discount: 'MRP: ₹92,990',
        offer: ' (Save ₹28,000) 30% Off',
        category: 'all lap'
    }, {
        id: 5,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697016285/Croma%20Assets/Computers%20Peripherals/Laptop/Images/300236_0_u4clsp.png',
        heading: 'Lenovo IdeaPad 3 Intel Core i3 12th Gen (15.6 inch, 8GB, 512GB, Windows 11, MS Office 2021, Intel UHD, 82RK00VVIN)',
        additional: '2000 off on payment OTP page',
        rating: '4.8',
        reviews: '(4 Ratings & 3 Reviews)',
        price: '42,990',
        discount: 'MRP: ₹60,890',
        offer: ' (Save ₹17,900) 29% Off',
        category: 'all lap'
    }, {
        id: 6,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414470/Croma%20Assets/Computers%20Peripherals/Laptop/Images/259500_0_bz4aoj.png',
        heading: 'HP Pavilion DV2014TU Intel Core i5 12th Gen (14 inch, 16GB, 512GB, Windows 11, Natural Silver, 6K9C3PA#ACJ)',
        additional: '3000 off on payment OTP page',
        rating: '4.5',
        reviews: '(11 Ratings & 11 Reviews)',
        price: '65,990',
        discount: 'MRP: ₹79,444',
        offer: ' (Save ₹13,454) 17% Off',
        category: 'all lap'
    }, {
        id: 7,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662436197/Croma%20Assets/Communication/Mobiles/Images/252418_hz8qqi.png',
        heading: 'OnePlus 10R 5G (8GB RAM, 128GB, Forest Green)',
        additional: 'Additional 500 off on Cart',
        rating: '4.8',
        reviews: '(63 Ratings & 58 Reviews)',
        price: '34,999',
        discount: 'MRP: ₹38,999',
        offer: '(Save ₹4,000) 10% Off',
        category: 'all mob'
    }, {
        id: 8,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017854/Croma%20Assets/Communication/Mobiles/Images/270656_0_p6disg.png',
        heading: 'OnePlus Nord CE 3 Lite 5G (8GB RAM, 256GB, Chromatic Gray)',
        additional: '1000 off on payment OTP page',
        rating: '5',
        reviews: '(5 Ratings & 5 Reviews)',
        price: '21,999',
        discount: 'MRP: ₹27,999',
        offer: '(Save ₹6,000) 13% Off',
        category: 'all mob'
    }, {
        id: 9,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683563315/Croma%20Assets/Communication/Mobiles/Images/269146_0_d3sbbp.png',
        heading: 'OnePlus 11R 5G (8GB RAM, 128GB, Galactic Silver)',
        additional: '2000 off on payment OTP page',
        rating: '5',
        reviews: '(25 Ratings & 23 Reviews)',
        price: '39,999',
        discount: 'MRP: ₹41,999',
        offer: ' (Save ₹2,000) 10% Off',
        category: 'all mob'
    }, {
        id: 10,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1665510036/Croma%20Assets/Communication/Mobiles/Images/260515_0_icgksv.png',
        heading: 'SAMSUNG Galaxy Z Flip4 5G (8GB RAM, 128GB, Bora Purple)',
        additional: '5000 off on payment OTP page',
        rating: '4.2',
        reviews: '(2 Ratings & 1 Review)',
        price: '79,999',
        discount: 'MRP: ₹1,01,999',
        offer: ' (Save ₹22,000) 22% Off',
        category: 'all mob'
    }, {
        id: 11,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690528172/Croma%20Assets/Communication/Mobiles/Images/275452_c3l9zl.png',
        heading: 'SAMSUNG Galaxy Z Fold5 5G (12GB RAM, 256GB, Icy Blue)',
        additional: '6000 off on payment OTP page',
        rating: '4.8',
        reviews: '(4 Ratings & 3 Reviews)',
        price: '1,54,999',
        discount: 'MRP: ₹1,59,999',
        offer: ' (Save ₹5,000) 3% Off',
        category: 'all mob'
    }, {
        id: 12,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690526235/Croma%20Assets/Communication/Mobiles/Images/275461_rq8nij.png',
        heading: 'SAMSUNG Galaxy Z Flip5 5G (8GB RAM, 512GB, Graphite)',
        additional: '7000 off on payment OTP page',
        rating: '4.5',
        reviews: '(11 Ratings & 11 Reviews)',
        price: '1,09,999',
        discount: 'MRP: ₹1,13,999',
        offer: ' (Save ₹4,000) 4% Off',
        category: 'all mob'
    }, {
        id: 13,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697022306/Croma%20Assets/Communication/Mobiles/Images/275240_0_a0pebs.png',
        heading: 'realme C53 (4GB RAM, 128GB, Champion Gold) fast Charger',
        additional: '500 off on payment OTP page',
        rating: '5',
        reviews: '(1 Rating & 1 Review)',
        price: '9,999',
        discount: 'MRP: ₹19,999',
        offer: '(Save ₹10,000) 50% Off',
        category: 'all mob'
    }, {
        id: 14,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686294502/Croma%20Assets/Communication/Mobiles/Images/273445_cyupmk.png',
        heading: 'realme 11 Pro 5G (8GB RAM, 256GB, Sunrise Beige)',
        additional: '1000 off on payment OTP page',
        rating: '4.5',
        reviews: '(11 Ratings & 11 Reviews)',
        price: '24,499',
        discount: 'MRP: ₹27,999',
        offer: '(Save ₹3,500) 13% Off',
        category: 'all mob'
    }, {
        id: 15,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697021638/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/275377_0_qgjwsa.png',
        heading: 'boAt Airdopes 100 TWS Earbuds with Environmental Noise Cancellation (IPX4 Water Resistant, ASAP Charge, Opal Black)',
        additional: 'Festive Special Cart Offer',
        rating: '3.8',
        reviews: '(11 Ratings & 11 Reviews)',
        price: '899',
        discount: 'MRP: ₹4,400',
        offer: '(Save ₹3,591) 80% Off',
        category: 'all hp'
    },{
        id: 16,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697020391/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/300612_0_xyilqw.png',
        heading: 'realme Buds T300 TWS Earbuds with Active Noise Cancellation (IP55 Water Resistant, 40 Hours Playback, Stylish Black)',
        additional: 'Festive Special Cart Offer',
        rating: '5',
        reviews: '(110 Ratings & 98 Reviews)',
        price: '1,989',
        discount: 'MRP: ₹4,999',
        offer: '(Save ₹2,010) 50% Off',
        category: 'all hp'
    },{
        id: 17,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664411705/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/199716_0_wn8v1o.png',
        heading: 'Apple EarPods MMTN2ZM/A Wired Earphones with Mic (In Ear, White)',
        additional: 'Rs 300 Coupon',
        rating: '4.5',
        reviews: '(436 Ratings & 293 Reviews)',
        price: '1,549',
        discount: 'MRP: ₹1,900',
        offer: '(Save ₹351) 18% Off',
        category: 'all hp'
    },{
        id: 18,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688576009/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/272322_0_n63wn1.png',
        heading: 'boAt Rockerz 551ANC Bluetooth Headphone with Mic (Upto 100 Hours Playback, On Ear, Sage Green)',
        additional: 'Festive Special Cart Offer',
        rating: '4.5',
        reviews: '(11 Ratings & 11 Reviews)',
        price: '2,999',
        discount: 'MRP: ₹7,990',
        offer: '(Save ₹4,991) 62% Off',
        category: 'all hp'
    },{
        id: 19,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669124853/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/261151_0_ifwwyi.png',
        heading: 'realme Techlife RMA2109 Earbuds with AI Environment Noise Cancellation (IPX5 Water Resistant, Google Fast Pair, Black)',
        additional: 'Festive Special Cart Offer',
        rating: '4.7',
        reviews: '(140 Ratings & 136 Reviews)',
        price: '1,299',
        discount: 'MRP: ₹2,999',
        offer: '(Save ₹1,700) 57% Off',
        category: 'all hp'
    },{
        id: 20,
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694169360/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/300547_ukwxjr.png',
        heading: 'BOULT AUDIO Airbass W40 TWS Earbuds (IPX5 Water Resistant, Fast Charging, Ivory White)',
        additional: 'Festive Special Cart Offer',
        rating: '4.1',
        reviews: '(31 Ratings & 28 Reviews)',
        price: '1,399',
        discount: 'MRP: ₹2,999',
        offer: '(Save ₹1,600) 53% Off',
        category: 'all hp'
    }]
    return (
        <div className='cards df jce ai-c'>{imgobj1.map((val) => {
            if (val.category.includes(props.status)) {
                return (
                    
                        <div className='card-items' key={val.id}>
                            <h2>{val.heading}</h2>
                            <div className="image df ai-c jcc"><img src={val.img} alt="mobile" /></div>

                            <p className='additional'>{val.additional}</p>

                            <div className='df'><p className='rating'>{val.rating}<i class="fa fa-star" aria-hidden="true" style={{ margin: "0px 5px" }}></i></p>
                                <p className='rating'>{val.reviews}</p></div>

                            <p className='price'>₹{val.price}</p>

                            <p className='taxes'>(Incl. all Taxes)</p>

                            <div className='df'><p className='discount'>{val.discount}</p>
                                <p className='offer'>{val.offer}</p></div>

                            <div class='df'><p className='location'><i class="fa fa-map-marker" aria-hidden="true" style={{ margin: "0px 5px" }}></i>
                                Delivery at:</p>
                                <p className='para-color'>Chengalpattu, 600045</p></div>

                            <p className='delivery'>Standard Delivery by Tomorrow</p>

                            <button className='btn'>View more</button>
                        </div>
                    
                )
            }

        })}</div>
    )
    }
export default Imagegallery;
