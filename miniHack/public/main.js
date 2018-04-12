$(document).ready(() => {
    let box;
    $('#addRound').click(() => {
        let length = $('.round').length;
        length++;
        box = `<tr class="round">
            <th scope="row">${length}</th>
            <td><input type="text" data-user='${length}' data-round='1'/></td>
            <td><input type="text" data-user='${length}' data-round='2'/></td>
            <td><input type="text" data-user='${length}' data-round='3'/></td>
            <td><input type="text" data-user='${length}' data-round='4'/></td> 
        </tr>`;
        $('.add').append(box);
    });

})
$('body').keyup('input', function (e) {
    console.log(e.target.name);
    let listInput = $('input');
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    for (let i = 0; i < listInput.length; i++) {
        const element = listInput[i];
        let name = $(element).attr('data-round');
        if (name == 1) {
            if(listInput[i].value == ""){}
            else
                sum1 += parseInt(listInput[i].value);
            
            
        }
        if (name == 2) {
            if(listInput[i].value == ""){}
            else
            sum2 += parseInt(listInput[i].value);
        }
        if (name == 3) {
            if(listInput[i].value == ""){}
            else
            sum3 += parseInt(listInput[i].value);
        }
        if (name == 4) {
            if(listInput[i].value == ""){}
            else
            sum4 += parseInt(listInput[i].value);
        }
    }
    $($('.sum-score td')[0]).html(sum1);
    $($('.sum-score td')[1]).html(sum2);
    $($('.sum-score td')[2]).html(sum3);
    $($('.sum-score td')[3]).html(sum4);


})

let saveToDB = function () {
    $.ajax({
        url: '/updateGame',
        method : 'post',
        data : {
            name : ''
        },
        success: function (result) {
            $("#div1").html(result);
        }
    });
    
}