import React from 'react'
import LinkList from '../components/linkList/LinkList';

export default function Home() {
    return (
        <div>
            <div className="App">
                <div className="container-xl">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <LinkList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
