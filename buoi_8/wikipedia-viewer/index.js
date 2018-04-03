$(document).ready(() => {

    $(".article-search-form").on('submit', () => {
        event.preventDefault();
    })
    $(".article-search-form__input").on("keyup", async event => {
        $('.article-list').html('<p class="text-center">Loading</p>')
        event.preventDefault();
        setTimeout(listenToFormSubmitEvent, 1000);
    })
})

const listenToFormSubmitEvent = () => {
const formElement = $(".article-search-form__input");
$.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    method: "post",
    data: {
        action: "query",
        list: "search",
        format: "json",
        srprop: "snippet",
        origin: "*",
        srsearch: encodeURI($('#article-search-form__input').val())
    },
    success: function (response) {
        let x = '';
        console.log(response);

        const searchs = response.query.search;
        console.log(searchs[0].title);
        for (let i = 0; i < searchs.length; i++) {
            x += `<a href="https://en.wikipedia.org/?curid=` + searchs[i].title + `" target="_blank"
                class="article-view">
                 <h3 className="article-view__title">` + searchs[i].title + `</h3>
                 <p className="article-view__snippet">` + searchs[i].snippet + `</p>
                </a>`
        }
        $('.article-list').html($(x))
    }
})


/**
 * TODO:
 *  - Lấy từ khoá search của người dùng
 *  - Lấy data từ server wikipedia tương ứng với từ khoá search 
 *  - Từ data trả về, tạo một array DOM hiển thị các bài viết của wikipedia
 *  - Đưa các DOM trong array trên vào trong <div class="article-list"></div>
 */

}
