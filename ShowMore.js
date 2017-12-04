import React from 'react';
import PropTypes from 'prop-types';
//utils
import translation from '../../../../utils/Translation';
const hideStyle = {
    display:'none',
};


const ShowMore = ({ ...props }) => {
    let showOrNot = props.showMore ? null : hideStyle;
    let more = translation.vocabulary('userDocs.more');
    return(
        <div 
            className="showMore"
            style={showOrNot}
        >
            <p
            onClick={props.onShowMoreDocuments}
            >
                {more}
            </p>
        </div>
        )
};

ShowMore.propTypes = {
    showMore:PropTypes.bool,
    onShowMoreDocuments:PropTypes.func,
};

export default ShowMore;