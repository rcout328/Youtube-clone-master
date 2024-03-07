const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '12c07e3957msh82e0c2bbd665338p15a37ajsnd3c0f029e252',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
