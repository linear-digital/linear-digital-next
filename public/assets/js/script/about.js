
const title = document.getElementById('title');
const description = document.getElementById('description');

const fetchAbout = async () => {
    const response = await fetch('https://server.lineardigital.co/api/about/653682ba045f7641d923efca');
    const data = await response.json();
    console.log(data)
    title.innerHTML = data.title;
    description.innerHTML = data.description;
}
fetchAbout();