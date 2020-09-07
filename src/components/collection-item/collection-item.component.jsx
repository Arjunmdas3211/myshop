import React from 'react';

import './collection-item.styles.scss';

// eslint-disable-next-line react/prop-types
const CollectionItem = ({name,price,imageUrl}) => (
<div className='collection-item'>
    <div className='image'
style={{background: `url(${imageUrl})`}} />
<div className='collection-footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>
</div>
</div>
);
export default CollectionItem;