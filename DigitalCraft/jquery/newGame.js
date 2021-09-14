$(()=>{
    let pageNum = 0;
    let charArr= []

    function getNumber(pageNum){
        $.get("https://anapioficeandfire.com/api/characters?page=" + pageNum + "&pageSize=50")
        .done((respone)=>{

            if(respone.length > 0){
                pageNum += 1;
                charArr =[ ...charArr, ...respone];
                getNumber(pageNum);
            }
            else{
                console.log((charArr));
                let $listGroupContainer = $('.list-group')
                
                let liTags = charArr.map((char)=>{
                    return `<a href="${char.url}" class="list-group-item list-group-item-action">${char.name} <b>houses</b> ${char.allegiances.length}</a>`
                    
                    

                })
                $listGroupContainer.html(liTags.join(''))
                
            }

        })
    }
    getNumber(pageNum);
    console.log(`I am done${pageNum}`);
    let $div =(".list-group")
    $div.click((e)=>{
        e.preventDefault();
        console.log(e.target.herf);
        $.get(e.target.herf)
        .done((detailCharObj)={

            var $modalBody = $('.modal-body')
            var $modalTital = $('#exampleModalLabel')

            $modalTital.html(detailCharObj.name)

            $('#exampleModal').modal('show')

        })
    })

})
    // promis all..............

    // let fetchArr =[]
    // let url ="";
    // for(let page = 0; page<45; page++){

    //     url = fetch("https://anapioficeandfire.com/api/characters?page=" + page + "&pageSize=50")
    //     fetchArr.push(url);
    // }
    // let promise = Promise.all(fetchArr);

    // promise.then((resultArr)=>{
    //     return Promise.all(resultArr.map(char=>{
    //         return char.json()
    //     }))
    //     .then((dataArr)=>{
    //         console.log(dataArr);
    //         let charArr =[]
    //         dataArr.forEach((char) => {
    //         charArr = [...charArr,...char]
    //         }) 
    //         console.log(charArr);
    //         });

    //         })







    // let apiCall1 = fetch('https://anapioficeandfire.com/api/characters?page=1&pageSize=50')
    // let apiCall2 = fetch('https://anapioficeandfire.com/api/characters?page=1&pageSize=50')

    // let promise = promise.all([apiCall1, apiCall2])
    // promise.then((resultarr)=>{

    //     let results =[];
    //     results[0] = resultArr[0].json();
    //     results[1] = resultArr[1].json();

    //     return promise.all(results)

    // })

    // .then((dataArr)=>{
    //     console.log(dataArr);
    //     let charArr =[]
    //     dataArr.forEach((Char) => {
    //         charArr = [...charArr,...char]
    //     }) 
    //     console.log(charArray);
    //     });
    
// }) 