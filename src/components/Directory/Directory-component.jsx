import React from 'react'
import './Directory-styles.scss'
import MenuItem from '../menu-item/menu-item-component';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https:/i.ibb.co/px2tCc3/jackets.png',
                    id:2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'women',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/women.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'men',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, title, imageUrl, size, linkUrl }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        ))
                }
            </div>
        )
            
    }
    
}

export default Directory;