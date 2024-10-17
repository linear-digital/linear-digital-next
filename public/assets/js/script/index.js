// Hero Area 
// Hero Area 


const getHero = async () => {
    const heroTitle = document.getElementById('hero-title')
    const heroDesc = document.getElementById('hero-desc')

    const ur = 'https://server.lineardigital.co/api/titles/65240a3908b45b9c479349ff'
    const res = await fetch(ur)
    const data = await res.json();
    heroTitle.innerHTML = data.title
    heroDesc.innerHTML = data.description
}
getHero();

// service Area
// service Area

const getService = async () => {
    const title = document.getElementById('service-title')
    const desc = document.getElementById('service-desc')
    const service1_Name = document.getElementById('service1-name')
    const service1_Desc = document.getElementById('service1-desc')
    const service2_Name = document.getElementById('service2-name')
    const service2_Desc = document.getElementById('service2-desc')
    const service3_Name = document.getElementById('service3-name')
    const service3_Desc = document.getElementById('service3-desc')

    const ur = 'https://server.lineardigital.co/api/titles/65240ab608b45b9c47934a08'
    const res = await fetch(ur)
    const data = await res.json();
    title.innerHTML = data.title
    desc.innerHTML = data.description

    const ur2 = 'https://server.lineardigital.co/api/services'
    const res2 = await fetch(ur2)
    const services = await res2.json();
    service1_Name.innerHTML = services[0].name
    service1_Desc.innerHTML = services[0].desc
    service2_Name.innerHTML = services[1].name
    service2_Desc.innerHTML = services[1].desc
    service3_Name.innerHTML = services[2].name
    service3_Desc.innerHTML = services[2].desc
}
getService();

// About Area
// About Area
// About Area

const getAbout = async () => {
    const title = document.getElementById('about-title')
    const desc = document.getElementById('about-desc')


    const ur = 'https://server.lineardigital.co/api/titles/65240b4708b45b9c47934a0e'
    const res = await fetch(ur)
    const data = await res.json();
    title.innerHTML = data.title
    desc.innerHTML = data.description

}

getAbout();

// Why People’s Like Us
// Why People’s Like Us
// Why People’s Like Us

const getWhy = async () => {
    const title = document.getElementById('why-title')
    const desc = document.getElementById('why-desc')

    const ur = 'https://server.lineardigital.co/api/titles/652ed33c185f243a20a18115'
    const res = await fetch(ur)
    const data = await res.json();
    title.innerHTML = data.title
    desc.innerHTML = data.description
}

getWhy();

// Our Project Area
// Our Project Area
// Our Project Area

const getProject = async () => {
    const portfolio_App = document.querySelector('.portfolio-web') //Portfolio web


    const url = 'https://server.lineardigital.co/api/portfolio/get/web'
    const res = await fetch(url)
    const data = await res.json();
    data.forEach((item) => {

        portfolio_App.innerHTML += `
        <div class="swiper-slide">
                <div class="project-item-three">
                    <div class="project-content-three">
                        <h2 class="title"><a href="project-details.html">
                        ${item.name}
                        </a></h2>
                        <p>
                        ${item.description?.slice(0, 70)}
                        </p>
                    </div>
                    <div class="project-thumb-three">
                        <a href="${item.images[0]}"><img src="${item.images[0]}" alt=""></a>
                    </div>
                    <div class="project-details-btn">
                        <a href="project-details.html">View Case Studies</a>
                    </div>
                </div>
            </div>
        `
    })
}


const getPortfolioWebApp = async () => {

    const portfolio_Web_App = document.querySelector('.portfolio-web-app') //Portfolio web App

    const url = 'https://server.lineardigital.co/api/portfolio/get/web-app'
    const res = await fetch(url)
    const data = await res.json();
    data.forEach((item) => {

        portfolio_Web_App.innerHTML += `
        <div class="swiper-slide">
                <div class="project-item-three">
                    <div class="project-content-three">
                        <h2 class="title"><a href="project-details.html">
                        ${item.name}
                        </a></h2>
                        <p>
                        ${item.description?.slice(0, 70)}
                        </p>
                    </div>
                    <div class="project-thumb-three">
                        <a href="project-details.html"><img src="${item.images[0]}" alt=""></a>
                    </div>
                    <div class="project-details-btn">
                        <a href="project-details.html">View Case Studies</a>
                    </div>
                </div>
            </div>
        `
    })
}


const getPortfolioPrint = async () => {

    const portfolio_Web_App = document.querySelector('.portfolio-print') //Portfolio web Print Design

    const url = 'https://server.lineardigital.co/api/portfolio/get/print'
    const res = await fetch(url)
    const data = await res.json();
    data.forEach((item) => {

        portfolio_Web_App.innerHTML += `
        <div class="swiper-slide">
                <div class="project-item-three">
                    <div class="project-content-three">
                        <h2 class="title"><a href="project-details.html">
                        ${item.name}
                        </a></h2>
                        <p>
                        ${item.description?.slice(0, 70)}
                        </p>
                    </div>
                    <div class="project-thumb-three">
                        <a href="project-details.html"><img src="${item.images[0]}" alt=""></a>
                    </div>
                    <div class="project-details-btn">
                        <a href="project-details.html">View Case Studies</a>
                    </div>
                </div>
            </div>
        `
    })
}
const getPortfolioEditorial = async () => {

    const portfolio_Web_App = document.querySelector('.portfolio-editorial') //portfolio-editorial 

    const url = 'https://server.lineardigital.co/api/portfolio/get/print'
    const res = await fetch(url)
    const data = await res.json();
    data.forEach((item) => {
        portfolio_Web_App.innerHTML += `
        <div class="swiper-slide">
                <div class="project-item-three">
                    <div class="project-content-three">
                        <h2 class="title"><a href="project-details.html">
                        ${item.name}
                        </a></h2>
                        <p>
                        ${item.description?.slice(0, 70)}
                        </p>
                    </div>
                    <div class="project-thumb-three">
                        <a href="project-details.html"><img src="${item.images[0]}" alt=""></a>
                    </div>
                    <div class="project-details-btn">
                        <a href="project-details.html">View Case Studies</a>
                    </div>
                </div>
            </div>
        `
    })
}


getPortfolioEditorial(); // Editorial
getProject(); //Portfolio web
getPortfolioWebApp(); //Portfolio web App
getPortfolioPrint(); //Portfolio Print



