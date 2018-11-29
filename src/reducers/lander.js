import {UPDATE_COMPLETE} from '../actions/searchActions'
import React from 'react'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'; 
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ImageIcon from '@material-ui/icons/Image';
//import {PropTypes, Component} from 'react/addons';


//import Typography from '@material-ui/icons/Typography';
///import GetResults from '../components/results.js';

const searchHistory = [];

export const searchResults = (state = searchHistory, action) => {
    switch (action.type) { 
      case UPDATE_COMPLETE:
        const getTime = new Date();
        
        searchHistory.push({"location": action.payload, "dateTime": getTime.toDateString() + " " + getTime.getHours() + ":" + getTime.getMinutes() + ":" + getTime.getSeconds()}); 
       //Exploring HOC <GetResults location={action.payload} />
            return (
                <div>
                    {
                       searchHistory.map((history, idx) => {  
                        return (
                        <div className='historyDetails' key={idx}> 
                            <List className='listName'>
                                <ListItem>
                                    <BeachAccessIcon>
                                        <ImageIcon />
                                    </BeachAccessIcon>
                                    <ListItemText primary={history.location} secondary={history.dateTime}/> 
                                </ListItem>
                            </List>
                        </div>
                        
                    )})
                   } 
                 
                </div>
            ); 
      default:
        return state;
    }
  };

  