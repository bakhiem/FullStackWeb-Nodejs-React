$(document).ready(() => {

    $(".article-search-form").on('submit', () => {
        event.preventDefault();
    })
    listenToFormSubmitEvent()
})
/**
 * myDebounce
 */
var myDebounce;
const debounceCustom = (search,time) =>{
    myDebounce =  setTimeout(() => {
        search()
    }, time);
}
function myStopDebounce() {
    clearTimeout(myDebounce);
}
/**
 * myThrottle
 */
var myThrottle = 1;
var myState = 1;
const throttleCustom = (search,time) =>{
    if(myThrottle == 1){
        search();
        myThrottle = 0;
       var throttleTimeout =  setTimeout(() => {
            myThrottle = 1;
            search();
        }, time);
    }
}

const listenToFormSubmitEvent = () => {
    //const throttleSearch = _.throttle(search,5000)
    $(".article-search-form__input").on("keyup",async event => {
        clearData();
         //use throttle
        throttleCustom(search,1000);
       
        //use debounce
        // myStopDebounce();
        // debounceCustom(search,1000)
    });
}
function getUserSearchQuery(){
    return $('#article-search-form__input').val();
}
async function search() {
    const searchQuery = getUserSearchQuery();
    const data = await searchWiki(); //vì hàm có async nên phải có await,ko thì nó sẽ return undefined
     if(searchQuery != getUserSearchQuery()){return} 
    processData(data)
}
function clearData(){
    $('.article-list').empty();
}
async function searchWiki() {
    return await $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        data: {
            action: "query",
            list: "search",
            format: "json",
            srprop: "snippet",
            origin: "*",
            srsearch: encodeURI(getUserSearchQuery())
            //dung encodeURI de chuyen dau cach(neu co) ve %20
        }
        // ,success: processData 
    })
}

function processData(data) {
    //map chuyển từ array article thành array các thẻ <a></a>
    if(!(data.query && data.query.search)){return }
    const elementArray = data.query.search.map( articles => {
        return `<a href="https://en.wikipedia.org/?curid=${articles.title}" target="_blank"
    class="article-view">
     <h3 className="article-view__title">${articles.title}</h3>
     <p className="article-view__snippet">${articles.snippet}</p>
    </a>`
    }).join('')
   
    // cách 2
    // for (let articles of data.query.search) {
    //     const x = `<a href="https://en.wikipedia.org/?curid=${articles.title}" target="_blank"
    // class="article-view">
    //  <h3 className="article-view__title">${articles.title}</h3>
    //  <p className="article-view__snippet">${articles.snippet}</p>
    // </a>`
    //     $('.article-list').append(x);
    // }
    $('.article-list').append(elementArray);
}