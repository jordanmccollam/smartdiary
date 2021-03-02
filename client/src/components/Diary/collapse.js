import React from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const NewEntry = (props) => {
    const { collapsed, setCollapsed } = props;

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    }

    return collapsed ? <BsChevronDown onClick={toggleCollapse} className='collapse-btn' /> : <BsChevronUp onClick={toggleCollapse} className='collapse-btn' />
    
}

export default NewEntry;