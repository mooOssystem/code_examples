'use strict';
import React from 'react';
import PropTypes from 'prop-types';
//components
import {Link} from 'react-router';

const LeftMenuItem = ({...props}) => {
    let itemLogo = {backgroundImage:"url("+props.img+")"};

    const notificationClass = props.notificationsCount ? 'notificationCount' : 'notVisible'
    return (
            <li className={props.itemClassName}>
                <Link to={props.url} activeClassName="active-menu" onlyActiveOnIndex={true}>
                    <div 
                        className='icon'
                        style={itemLogo}>
                    </div>
                    <p className='title'>
                        {props.title}
                    </p>
                    <p className={notificationClass}>
                        {props.notificationsCount}
                    </p>
                </Link>
            </li>
        );
};

LeftMenuItem.propTypes = {
    url:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    itemClassName:PropTypes.string.isRequired,
    notificationsCount: PropTypes.number.isRequired,
    title:PropTypes.string.isRequired
};

export default LeftMenuItem
