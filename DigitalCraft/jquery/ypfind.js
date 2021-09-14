$(()=>{
    var ypURL = ["https://www.yellowpages.com/search?search_terms=restaurants&geo_location_terms=Houston%2C+TX",
            "https://www.yellowpages.com/search?search_terms=restaurants&geo_location_terms=Houston%2C%20TX&page=2",
            "https://www.yellowpages.com/search?search_terms=restaurants&geo_location_terms=Houston%2C%20TX&page=3"
        ]
        ypURL.forEach(url =>{
            $.get(url)
            .done(response =>{
                let $results = $(response).find('.title, .business-name')
                for(let r of $results){
                    try{
                        console.log(`${r.innerText}`)
                    }
                    catch{}
                }
            })
        })
  })