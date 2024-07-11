import React from 'react';

const TeamMemberCard = () => {
    return (
        <div style={{
            backgroundImage: 'url(https://media.istockphoto.com/id/1322275410/photo/profile-of-young-man.jpg?s=612x612&w=0&k=20&c=Ssbvdy81Z-SZfPvUyxS3sixqpdYIlB7bNQprGaSRSDc=)'
        }}
            className='team-member-card'
        >
            <div className="overlay">
                <div className="details">
                    <h3>John Doe</h3>
                    <p>Founder & CEO</p>
                    <div className="experiance">
                        <div className='item'>React.js</div>
                        <div className='item'>Next.js</div>
                        <div className='item'>Node.js</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TeamMemberCard;