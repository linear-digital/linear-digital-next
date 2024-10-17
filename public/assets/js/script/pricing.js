
const priceing_Url = 'https://server.lineardigital.co/api/pricing'


const getpricingGraphic = async () => {
    const gp1 = document.getElementById('graphic-pricing-1');
    const gp2 = document.getElementById('graphic-pricing-2');
    const gp3 = document.getElementById('graphic-pricing-3');
    const wp1 = document.getElementById('web-pricing-1');
    const wp2 = document.getElementById('web-pricing-2');
    const wp3 = document.getElementById('web-pricing-3');

    const res = await fetch(priceing_Url);
    const data = await res.json();
    const pricing = data.pricing
    gp1.innerHTML = `
    <div class="pricing-item">
        <div class="pricing-icon">
            <img src="/assets/img/icon/pricing_icon01.png" alt="">
        </div>
        <div class="pricing-top">
            <h2 class="title">${pricing[0].name}</h2>
            <p>
                ${pricing[0].description}
            </p>
        </div>
        <div class="pricing-price">
            <h2 class="price"><span>$</span>${pricing[0].price}<strong></strong></h2>
        </div>
        <div class="pricing-list">
            <h4 class="title">Everything in Starter</h4>
            <ul class="list-wrap">
                <li class="${!pricing[0].service1 && "hidden"}"><i class="far fa-check"></i>${pricing[0].service1}</li>
                <li class="${!pricing[0].service2 && "hidden"}"><i class="far fa-check"></i>${pricing[0].service2}</li>
                <li class="${!pricing[0].service3 && "hidden"}"><i class="far fa-check"></i>${pricing[0].service3}</li>
                <li class="${!pricing[0].service4 && "hidden"}"><i class="far fa-check"></i>${pricing[0].service4}</li>
                <li class="${!pricing[0].service5 && "hidden"}"><i class="far fa-check"></i>${pricing[0].service5}</li>
                <li class="${!pricing[0].service6 && "hidden"}"><i class="far fa-check"></i>${pricing[0].service6}</li>
                <li class="${!pricing[0].service7 && "hidden"}"><i class="far fa-check"></i>${pricing[0].service7}</li>
                <li class="${!pricing[0].service8 && "hidden"}"><i class="far fa-check"></i>${pricing[0].service8}</li>
                <li class="${!pricing[0].service9 && "hidden"}"><i class="far fa-check"></i>${pricing[0].service9}</li>
                <li class="${!pricing[0].service10 && "hidden"}"><i class="far fa-check"></i>${pricing[0].service10}</li>
            </ul>
        </div>
        <div class="pricing-btn">
            <a href="#" class="btn">Select This Plan</a>
        </div>
    </div>
    `

    gp2.innerHTML = `
    <div class="pricing-item active">
        <div class="pricing-icon">
            <img src="/assets/img/icon/pricing_icon01.png" alt="">
        </div>
        <div class="pricing-top">
            <h2 class="title">${pricing[1].name}</h2>
            <p>
                ${pricing[1].description}
            </p>
        </div>
        <div class="pricing-price">
            <h2 class="price"><span>$</span>${pricing[1].price}<strong></strong></h2>
        </div>
        <div class="pricing-list">
            <h4 class="title">Everything in Starter</h4>
            <ul class="list-wrap">
                <li class="${!pricing[1].service1 && "hidden"}"><i class="far fa-check"></i>${pricing[1].service1}</li>
                <li class="${!pricing[1].service2 && "hidden"}"><i class="far fa-check"></i>${pricing[1].service2}</li>
                <li class="${!pricing[1].service3 && "hidden"}"><i class="far fa-check"></i>${pricing[1].service3}</li>
                <li class="${!pricing[1].service4 && "hidden"}"><i class="far fa-check"></i>${pricing[1].service4}</li>
                <li class="${!pricing[1].service5 && "hidden"}"><i class="far fa-check"></i>${pricing[1].service5}</li>
                <li class="${!pricing[1].service6 && "hidden"}"><i class="far fa-check"></i>${pricing[1].service6}</li>
                <li class="${!pricing[1].service7 && "hidden"}"><i class="far fa-check"></i>${pricing[1].service7}</li>
                <li class="${!pricing[1].service8 && "hidden"}"><i class="far fa-check"></i>${pricing[0].service8}</li>
                <li class="${!pricing[1].service9 && "hidden"}"><i class="far fa-check"></i>${pricing[1].service9}</li>
                <li class="${!pricing[1].service10 && "hidden"}"><i class="far fa-check"></i>${pricing[1].service10}</li>
            </ul>
        </div>
        <div class="pricing-btn">
            <a href="#" class="btn">Select This Plan</a>
        </div>
    </div>
    `
    gp3.innerHTML = `
    <div class="pricing-item">
        <div class="pricing-icon">
            <img src="/assets/img/icon/pricing_icon01.png" alt="">
        </div>
        <div class="pricing-top">
            <h2 class="title">${pricing[2].name}</h2>
            <p>
                ${pricing[2].description}
            </p>
        </div>
        <div class="pricing-price">
            <h2 class="price"><span>$</span>${pricing[2].price}<strong></strong></h2>
        </div>
        <div class="pricing-list">
            <h4 class="title">Everything in Starter</h4>
            <ul class="list-wrap">
                <li class="${!pricing[2].service1 && "hidden"}"><i class="far fa-check"></i>${pricing[2].service1}</li>
                <li class="${!pricing[2].service2 && "hidden"}"><i class="far fa-check"></i>${pricing[2].service2}</li>
                <li class="${!pricing[2].service3 && "hidden"}"><i class="far fa-check"></i>${pricing[2].service3}</li>
                <li class="${!pricing[2].service4 && "hidden"}"><i class="far fa-check"></i>${pricing[2].service4}</li>
                <li class="${!pricing[2].service5 && "hidden"}"><i class="far fa-check"></i>${pricing[2].service5}</li>
                <li class="${!pricing[2].service6 && "hidden"}"><i class="far fa-check"></i>${pricing[2].service6}</li>
                <li class="${!pricing[2].service7 && "hidden"}"><i class="far fa-check"></i>${pricing[2].service7}</li>
                <li class="${!pricing[2].service8 && "hidden"}"><i class="far fa-check"></i>${pricing[2].service8}</li>
                <li class="${!pricing[2].service9 && "hidden"}"><i class="far fa-check"></i>${pricing[2].service9}</li>
                <li class="${!pricing[2].service10 && "hidden"}"><i class="far fa-check"></i>${pricing[2].service10}</li>
            </ul>
        </div>
        <div class="pricing-btn">
            <a href="#" class="btn">Select This Plan</a>
        </div>
    </div>
    `
    wp1.innerHTML = `
    <div class="pricing-item">
        <div class="pricing-icon">
            <img src="/assets/img/icon/pricing_icon01.png" alt="">
        </div>
        <div class="pricing-top">
            <h2 class="title">${pricing[3].name}</h2>
            <p>
                ${pricing[3].description}
            </p>
        </div>
        <div class="pricing-price">
            <h2 class="price"><span>$</span>${pricing[3].price}<strong></strong></h2>
        </div>
        <div class="pricing-list">
            <h4 class="title">Everything in Starter</h4>
            <ul class="list-wrap">
                <li class="${!pricing[3].service1 && "hidden"}"><i class="far fa-check">  </i>${pricing[3].service1}</li>
                <li class="${!pricing[3].service2 && "hidden"}"><i class="far fa-check">  </i>${pricing[3].service2}</li>
                <li class="${!pricing[3].service3 && "hidden"}"><i class="far fa-check">  </i>${pricing[3].service3}</li>
                <li class="${!pricing[3].service4 && "hidden"}"><i class="far fa-check">  </i>${pricing[3].service4}</li>
                <li class="${!pricing[3].service5 && "hidden"}"><i class="far fa-check">  </i>${pricing[3].service5}</li>
                <li class="${!pricing[3].service6 && "hidden"}"><i class="far fa-check">  </i>${pricing[3].service6}</li>
                <li class="${!pricing[3].service7 && "hidden"}"><i class="far fa-check">  </i>${pricing[3].service7}</li>
                <li class="${!pricing[3].service8 && "hidden"}"><i class="far fa-check">  </i>${pricing[3].service8}</li>
                <li class="${!pricing[3].service9 && "hidden"}"><i class="far fa-check">  </i>${pricing[3].service9}</li>
                <li class="${!pricing[3].service10 && "hidden"}"><i class="far fa-check"></i>${pricing[3].service10}</li>
            </ul>
        </div>
        <div class="pricing-btn">
            <a href="#" class="btn">Select This Plan</a>
        </div>
    </div>
    `

    wp2.innerHTML = `
    <div class="pricing-item active">
    <div class="pricing-icon">
        <img src="/assets/img/icon/pricing_icon01.png" alt="">
    </div>
    <div class="pricing-top">
        <h2 class="title">${pricing[4].name}</h2>
        <p>
            ${pricing[4].description}
        </p>
    </div>
    <div class="pricing-price">
        <h2 class="price"><span>$</span>${pricing[4].price}<strong></strong></h2>
    </div>
    <div class="pricing-list">
        <h4 class="title">Everything in Starter</h4>
        <ul class="list-wrap">
            <li class="${!pricing[4].service1 && "hidden"}"><i class="far fa-check"></i>${pricing[4].service1}</li>
            <li class="${!pricing[4].service2 && "hidden"}"><i class="far fa-check"></i>${pricing[4].service2}</li>
            <li class="${!pricing[4].service3 && "hidden"}"><i class="far fa-check"></i>${pricing[4].service3}</li>
            <li class="${!pricing[4].service4 && "hidden"}"><i class="far fa-check"></i>${pricing[4].service4}</li>
            <li class="${!pricing[4].service5 && "hidden"}"><i class="far fa-check"></i>${pricing[4].service5}</li>
            <li class="${!pricing[4].service6 && "hidden"}"><i class="far fa-check"></i>${pricing[4].service6}</li>
            <li class="${!pricing[4].service7 && "hidden"}"><i class="far fa-check"></i>${pricing[4].service7}</li>
            <li class="${!pricing[4].service8 && "hidden"}"><i class="far fa-check"></i>${pricing[0].service8}</li>
            <li class="${!pricing[4].service9 && "hidden"}"><i class="far fa-check"></i>${pricing[4].service9}</li>
            <li class="${!pricing[4].service10 && "hidden"}"><i class="far fa-check"></i>${pricing[4].service10}</li>
        </ul>
    </div>
    <div class="pricing-btn">
        <a href="#" class="btn">Select This Plan</a>
    </div>
</div>
    `
    wp3.innerHTML = `
    <div class="pricing-item">
    <div class="pricing-icon">
        <img src="/assets/img/icon/pricing_icon01.png" alt="">
    </div>
    <div class="pricing-top">
        <h2 class="title">${pricing[5].name}</h2>
        <p>
            ${pricing[5].description}
        </p>
    </div>
    <div class="pricing-price">
        <h2 class="price"><span>$</span>${pricing[5].price}<strong></strong></h2>
    </div>
    <div class="pricing-list">
        <h4 class="title">Everything in Starter</h4>
        <ul class="list-wrap">
            <li class="${!pricing[5].service1 && "hidden"}"><i class="far fa-check"></i>${pricing[5].service1}</li>
            <li class="${!pricing[5].service2 && "hidden"}"><i class="far fa-check"></i>${pricing[5].service2}</li>
            <li class="${!pricing[5].service3 && "hidden"}"><i class="far fa-check"></i>${pricing[5].service3}</li>
            <li class="${!pricing[5].service4 && "hidden"}"><i class="far fa-check"></i>${pricing[5].service4}</li>
            <li class="${!pricing[5].service5 && "hidden"}"><i class="far fa-check"></i>${pricing[5].service5}</li>
            <li class="${!pricing[5].service6 && "hidden"}"><i class="far fa-check"></i>${pricing[5].service6}</li>
            <li class="${!pricing[5].service7 && "hidden"}"><i class="far fa-check"></i>${pricing[5].service7}</li>
            <li class="${!pricing[5].service8 && "hidden"}"><i class="far fa-check"></i>${pricing[5].service8}</li>
            <li class="${!pricing[5].service9 && "hidden"}"><i class="far fa-check"></i>${pricing[5].service9}</li>
            <li class="${!pricing[5].service10 && "hidden"}"><i class="far fa-check"></i>${pricing[5].service10}</li>
        </ul>
    </div>
    <div class="pricing-btn">
        <a href="#" class="btn">Select This Plan</a>
    </div>
</div>
    `

}

getpricingGraphic()


const generalPrice = async () => {
    const priceContainer = document.getElementById('general-container')

    const res = await fetch('https://server.lineardigital.co/api/generalprice')
    const data = await res.json()

    data.map(d => {
        priceContainer.innerHTML += `
        <div class="d-flex align-items-center price-car" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" style="width: 20px; height: 20px;" class="text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span class="ms-1"> ${d.title}</span>
        </div>
        `
    })




}

generalPrice()