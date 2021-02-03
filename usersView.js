import {usersList} from './usersList.js';
import {usersChart} from './usersChart.js';
import {userToolbar} from './userToolbar.js';
export let usersView = {
    margin:20,
    padding:10,
    id:"Users view", 
          rows:[userToolbar,
            usersList,
            usersChart]
};