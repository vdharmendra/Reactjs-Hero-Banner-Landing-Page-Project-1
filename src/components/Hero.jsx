const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET <span className="heading-span-text">DESERVE</span> THE BEST</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam molestiae impedit laboriosam facilis, qui esse eius cum nihil excepturi dolore minima labore et, error veniam!</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>

                    <div className="brand-icons">
                        <img src="./img/amazon.png" alt="" />
                        <img src="./img/brand_logo.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img width="550" src="https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?t=st=1759051467~exp=1759055067~hmac=22a386460b48dd0d0b31f6bce736331d109e4dd944cb8ed5a9966757039e8e7d&w=1480" alt="" />
            </div>
        </main>
    )
};

export default HeroSection;