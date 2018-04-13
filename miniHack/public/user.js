$(document).ready(() => {
    getData();

    

})
let getData =function(){
    let infom = $('#info').val();
    let info = JSON.parse(infom);
    let box;
    let row = info.Player[0].round.length;
    for (let index = 0; index < row; index++) {
        box = `<tr class="round">
            <th scope="row">${index}</th>
            <td class="text-center"><input type="text" data-round='${index}' data-user='1' value='${info.Player[0].round[index].score}'/></td>
            <td class="text-center"><input type="text" data-round='${index}' data-user='2' value='${info.Player[1].round[index].score}'/></td>
            <td class="text-center"><input type="text" data-round='${index}' data-user='3' value='${info.Player[1].round[index].score}'/></td>
            <td class="text-center"><input type="text" data-round='${index}' data-user='4' value='${info.Player[1].round[index].score}'/></td> 
        </tr>`;
        $('.add').append(box);
    }
    cal();
}
let cal = function(){
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
                if(val == "" || !($.isNumeric(val))){
                    
                }
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
}