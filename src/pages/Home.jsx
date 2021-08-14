import React, { useState } from 'react'
import { useLinkLayerValue } from '../context/LinkContext'
import LinkList from '../components/LinkList'
import '../App.css'
import { LocalHospitalTwoTone } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const Home = () => {
    const [{ links }, dispatch] = useLinkLayerValue();

    return (
        <div>


            <div className="link-container">
                <div className="link-add">
                    <div className="link-add-left">
                        <Link to="/submit" >
                            <LocalHospitalTwoTone style={{ fontSize: 170, color: "white" }} />
                        </Link>
                    </div>
                    <b className="link-add-right">SUBMIT A LINK</b>
                </div>
                <div className="sort">
                    Sort
                </div>
                <LinkList links={links} />
            </div>


        </div>
    )
}

export default Home