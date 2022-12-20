import axios from 'axios';

function cricketIndex(){
    return new Promise((done, err) => {
		err('Use One of Our Methods, Please Check API for reference on Methods')
	})
}

cricketIndex.series = () => {
    return new Promise((done, err) => {
        var options = {
        method: 'GET',
        url: 'https://cricket-live-score4.p.rapidapi.com/apis/series',
        headers: {
            'x-rapidapi-host': 'cricket-live-score4.p.rapidapi.com',
            'x-rapidapi-key': '8c814ae4b2msh4c71f4a56db5ab7p10ce95jsn62be1cf0a03e'
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })
}

cricketIndex.fixtures = () => {
    return new Promise((done, err) => {
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
            headers: {
                'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
                'x-rapidapi-key': '8c814ae4b2msh4c71f4a56db5ab7p10ce95jsn62be1cf0a03e'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })
}
 

cricketIndex.fixturesByDate = (datee) => {
    return new Promise((done, err) => {
        var options = {
            method: 'GET',
            url: `https://cricket-live-data.p.rapidapi.com/fixtures-by-date/${datee}`,
            headers: {
                'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
                'x-rapidapi-key': '8c814ae4b2msh4c71f4a56db5ab7p10ce95jsn62be1cf0a03e'
            }
        };
        axios.request(options).then(function (response) {
        var dataa = console.log(response.data.results)
        }).catch(function (error) {
        console.error(error);
        });
    })
}

cricketIndex.news = () => { 
    return new Promise((done, err) => {
        var options = {
            method: 'GET',
            url: 'https://t20-cricket-news.p.rapidapi.com/news',
            headers: {
                'x-rapidapi-host': 't20-cricket-news.p.rapidapi.com',
                'x-rapidapi-key': '8c814ae4b2msh4c71f4a56db5ab7p10ce95jsn62be1cf0a03e'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
        console.error(error);
        });
    })
}


cricketIndex.resultsByDate = (datee) => {
    return new Promise((done, err) => { 
        var options = {
            method: 'GET',
            url: `https://cricket-live-data.p.rapidapi.com/results-by-date/${datee}`,
            headers: {
                'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
                'x-rapidapi-key': '8c814ae4b2msh4c71f4a56db5ab7p10ce95jsn62be1cf0a03e'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })
}

cricketIndex.liveMatch = () => {
    return new Promise((done, err) => {
        var options = {
            method: 'GET',
            url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
            params: {Category: 'cricket'},
            headers: {
              'x-rapidapi-host': 'livescore6.p.rapidapi.com',
              'x-rapidapi-key': '8c814ae4b2msh4c71f4a56db5ab7p10ce95jsn62be1cf0a03e'
            }
          };
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    })
}
cricketIndex.resultsByDate('2021-11-17');
export default cricketIndex;