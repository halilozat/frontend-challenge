import React from 'react'
import Link from './Link'

export default function LinkList({ links }) {
    
    
    
    
    return (
        <div className="link-list">
            {
                links && links.map((link) => <Link key={link.id} link={link} />)
            }
        </div>
    )
}
