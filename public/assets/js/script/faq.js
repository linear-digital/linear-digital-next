const faqContainer = document.querySelector('.faqContainer')



const getFaq = async () => {
    const res = await fetch('https://server.lineardigital.co/api/faq')
    const data = await res.json()

    data.map((d) => {

        faqContainer.innerHTML += `
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne${d._id}">
            <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseOne${d._id}" aria-expanded="false"
                aria-controls="collapseOne">
                ${d.title}
            </button>
        </h2>
        <div id="basicAccordionCollapseOne${d._id}" class="accordion-collapse collapse"
            aria-labelledby="headingOne${d._id}" data-mdb-parent="#basicAccordion" >
            <div class="accordion-body">
                ${d.desc}
            </div>
        </div>
    </div>
        `
    })
}

getFaq()

