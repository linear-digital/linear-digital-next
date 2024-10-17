'use client'

import TeamMemberCard from '@/Components/Card/TeamMemberCard';
import { fetcher } from '@/util/fetcher';
import React from 'react';
import useSWR from 'swr';
export interface ITeamProps {
    _id: string;
    name: string;
    title: string;
    photoUrl: string;
    details: string[];
}
const Team = () => {
    const { data } = useSWR('https://server.lineardigital.co/api/team', fetcher);
    const team = data as ITeamProps[];
    return (
        <div className='container py-5'>
            <div className=""
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                justifyItems: "center",
            }}
            >
                {
                    team?.map((item: any) => {
                        return (
                            <TeamMemberCard key={item._id} item={item}
                            edit
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Team;