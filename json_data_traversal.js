let jsonData={
    'categories':[
        {
          'name':'movies',
          genres:['comedy','drama','action'],
          items:[
              {
              'name':'scarface',
              released:'1983',
              genres:'action',
              'cast':['Alpacino','Michele Pfifer']
             },
             {
                name:'Terminator 2',
                released:'1991',
                genres:'action',
                cast:['Arnold Schwazy','Mr. Villain Robot']
             },
             {
                name:'One flew over the cuckoos nest',
                released:'1975',
                genres:'drama',
                cast:['Jack Nicolsomn','Mrs. Nurse']
             }
          ]  
        },
        {
            name:'music',
            genres:['classic','pop','rap','reggae','rock'],
            items:[
                {
                name:'Lionel Richie Album',
                artist:'Lionel Richie',
                released:'1984',
                genres:'pop',
                songs:['hello','say you say me']
               },
               {
                  name:'Thriller',
                  artist:'Michael Jackson',
                  released:'1984',
                  genres:'pop',
                  songs:['thriller','Beat it']
               },
               {
                  'name':'Shania Twain Album',
                  artist:'Shania Twain',
                  released:'1995',
                  'genres':'pop',
                  cast:['From this moment','Still the one']
               }
            ]  
          },
          {
            name:'literature',
            genres:['novel','short stories','poetry'],
            items:[
                {
                name:'Promise',
                released:'1977',
                genres:'novel',
                author:'Danielle Steele'
               },
               {
                  name:'War & Peace',
                  released:'1984',
                  genres:'novel',
                  author:'Leo Tolstoy'
               },
               {
                  'name':'Tagore Poetry Collection',
                  released:'1960',
                  'genres':'poetry',
                  author:'Rabindranath Thakore'
               }
            ]  
          }
    ]
};
//let prop='music' /// 'movies'
// jsonData[prop] .movies 
jsonData=JSON.stringify(jsonData);
jsonData=JSON.parse(jsonData);
console.log(jsonData);
console.log(typeof jsonData);

//let moviesData=jsonData["categories"][0];
////Filter method on array returns same or less number of items than the array
let moviesData=jsonData['categories'].filter(
  (e,i)=>{
    return (e.name=='movies');
  }
);

let scarFaceData=moviesData[0].items.filter(
  function(e,i){
    return e.name=='scarface';
  }
);

console.log('scarface data:',scarFaceData);

////We are only interested in the movie Scarface!
//moviesData.filter

console.log('movies data',moviesData);

//jsonObj=JSON.parse(jsonString);
/*
let arr1=[1,2,3,4,5];
let arr2=[1,2,3,4,5];

console.log(JSON.stringify(arr1)===JSON.stringify(arr2));
*/

////Write a function that will take our jsonData, and it will drill down to the literature item 'Promise' by 'Danielle Steele'.

function extractItem(jsonData,literatureName){
    let cat='categories';
    let litData=jsonData[cat].filter(
      (e,i)=>{
         return e.name=='literature';
      }
    )[0]; //[0] lets you acccess first item of the array

    let promiseData=litData.items.filter(
      (e,i)=>{
        return e.name==literatureName;
      }
    )[0];

   return promiseData;
}

console.log(extractItem(jsonData,'Promise'));

