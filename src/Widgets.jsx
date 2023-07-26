import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__articles">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon style={{ fontSize: 12 }}/>
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("React outperforms Angular","Top News - 6789")}
        {newsArticle("Covid is over","Top News - 374")}
        {newsArticle("AI Breakthrough in Healthcare","Tech News - 9832")} 
        {newsArticle("SpaceX launches Crewed Mission to Mars","Science News - 5521")} 
        {newsArticle("Stock Market Hits All-Time High","Business News - 7890")} 
        {newsArticle("World's Largest Wind Farm Powers Millions of Homes","Environment News - 2234")}
    </div>
  )
}

export default Widgets
