import TeamMemberCard from '@/Components/Card/TeamMemberCard';
import React from 'react';

const Team = () => {
    return (
        <div>
            <section className="pricing-area pb-120 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title title-style-two text-center white-title mb-50 ">
                                <h2 className="title text-black">Meet our team</h2>
                                <p >Find the perfect fit! Choose from tiered plans with features tailored to your
                                    needs. All at budget-friendly prices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-container">
                        <TeamMemberCard />
                        <TeamMemberCard />
                        <TeamMemberCard />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;