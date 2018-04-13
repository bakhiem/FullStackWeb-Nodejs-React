$(document).ready(() => {
    let box;
    $('#addRound').click(() => {
        let length = $('.round').length;
        length++;
        box = `<tr class="round">
            <th scope="row">${length}</th>
            <td class="text-center"><input type="text" data-round='${length}' data-user='1'/></td>
            <td class="text-center"><input type="text" data-round='${length}' data-user='2'/></td>
            <td class="text-center"><input type="text" data-round='${length}' data-user='3'/></td>
            <td class="text-center"><input type="text" data-round='${length}' data-user='4'/></td> 
        </tr>`;
        $('.add').append(box);
        $.ajax({
            url: '/addRound',
            method : 'post',
            data : {
                id: $('#getId').attr('data-id')
            },
            success: function () {
                console.log("Success")
            }
        });
        
    });


    $('body').keyup('input', function (e) {
        let listInput = $('input');
        let sum1 = 0;
        let sum2 = 0;
        let sum3 = 0;
        let sum4 = 0;
        for (let i = 0; i < listInput.length; i++) {
            const element = listInput[i];
            let name = $(element).attr('data-user');
            let val = listInput[i].value;
          
            
            if (name == 1) {
                if(val == "" || !($.isNumeric(val))){}
                else{
                    sum1 += parseInt(val);
                }
                  
            }
            else if (name == 2) {
                if(val == "" || !($.isNumeric(val))){}
                else{
                    sum2 += parseInt(val);
                }
               
            }
            else if (name == 3) {
                if(val == "" || !($.isNumeric(val))){}
                else{
                    sum3 += parseInt(val);
                }
               
            }
            else if (name == 4) {
                if(val == "" || !($.isNumeric(val))){}
                else{
                    sum4 += parseInt(val);
                }
               
            }
        }
        let sum = sum1 + sum2 + sum3  + sum4;
        $($('.sum-score th')).html('Sum of Score('+ sum +')');
        $($('.sum-score td')[0]).html(sum1);
        $($('.sum-score td')[1]).html(sum2);
        $($('.sum-score td')[2]).html(sum3);
        $($('.sum-score td')[3]).html(sum4);
        if($.isNumeric(e.target.value)){
            $.ajax({
                url: '/updateGame',
                method : 'post',
                data : {
                    player : $(e.target).attr('data-user'),
                    round : $(e.target).attr('data-round'),
                    score: e.target.value,
                    id: $('#getId').attr('data-id')
                },
                success: function () {
                   console.log(success)
                }
            });
        }
        
    })
})

