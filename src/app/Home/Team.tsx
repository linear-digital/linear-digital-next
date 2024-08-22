'use client'
import TeamMemberCard from '@/Components/Card/TeamMemberCard';
import { fetcher } from '@/util/fetcher';
import React from 'react';
import useSWR from 'swr';
import { ITeamProps } from '../admin/team/_UI/Team';

const Team = () => {
    const {data} = useSWR('https://ld.mdtamiz.com/api/team', fetcher);

    const team = data as ITeamProps[];
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
                       {
                           team?.map((item) => <TeamMemberCard key={item._id} item={item} edit={false}/>)
                       }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;