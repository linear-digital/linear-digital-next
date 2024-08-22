'use client'

import { ITeamProps } from '@/app/admin/team/_UI/Team';
import React from 'react';
import BlankDialog from '../Dialog/Dialog';
import { Button } from 'antd';
import UpateMember from './UpdateMember';

const TeamMemberCard = ({ item, edit }: { item: ITeamProps, edit?: boolean }) => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='team-member-card-container'>
            <div style={{
                backgroundImage: `url('${item?.photoUrl}')`,
            }}
                className='team-member-card'
            >
                <div className="overlay">
                    <div className="details">
                        <h3>{item?.name}</h3>
                        <p>{item?.title}</p>
                        <div className="experiance">
                            {
                                item?.details?.map((item) => <p className='item'>{item}</p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
           {
               open &&  <BlankDialog open={open} setOpen={setOpen} title={"Update Member"}>
               <UpateMember member={item}/>
            </BlankDialog>
           }
            {
                edit && <Button type='primary' className='mt-2' onClick={() => setOpen(true)}>
                    Update Member
                </Button>
            }
        </div>
    );
};

export default TeamMemberCard;