
const teamTitle = document.querySelector('.team-title');
const teamDesc = document.querySelector('#team-description');
const getTeam = async () => {
    const res = await fetch('https://server.lineardigital.co/api/team')
    const data = await res.json();
    const tres = await fetch('https://server.lineardigital.co/api/titles/65369178d701163943d3f98d')
    const tdata = await tres.json();

    teamTitle.innerHTML = tdata.title;
    teamDesc.innerHTML = tdata.description;

    setTeamMember(data)
}

getTeam();

const setTeamMember = (team) => {
    const teamContainer = document.querySelector('.team-active');
    team.map(member => {
        teamContainer.innerHTML +=
            `<div class="col-lg-4" key="${member._id}">
                <div class="team-item">
                    <div class="team-thumb">
                        <a href="team-details.html"><img class="member-photo" src="${member.photoUrl}" alt=""></a>
                    </div>
                    <div class="team-content">
                        <h2 class="title">
                            <a href="team-details.html">${member.name}</a>
                        </h2>
                        <span>${member.title}</span>
                        <div class="team-social">
                            <ul class="list-wrap">
                                <li>
                                <a href="#">
                                    <i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-behance"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `
    });
}
