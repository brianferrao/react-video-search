import axios from 'axios';

const KEY = 'AIzaSyDgijBHJ3uXzksZlylcslaBevTpT8RlI8c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        key: KEY
    }
});
