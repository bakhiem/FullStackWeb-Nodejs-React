$(document).ready(()=>{
    let box;
    $('#addRound').click(()=>{
        let length = $('.round').length;
        length++;
        
        
        box=`<tr class="round">
            <th scope="row" colspan="2">${length}</th>
            <td><input type="text" name="${length}1"/></td>
            <td><input type="text" name="${length}2"/></td>
            <td><input type="text" name="${length}3"/></td>
            <td><input type="text" name="${length}4"/></td> 
        </tr>`;
        $('.add').append(box);
    });

})
$('body').keyup('input',function (e) {
         console.log(e.target.name);
         let listInput = $('input');
         let sum1 = 0;
         let sum2 = 0;
         let sum3 = 0;
         let sum4 = 0;
         for (let i = 0; i < listInput.length; i++) {
             const element = listInput[i];
             let name = $(element).attr('name');
             if(name.endsWith("1")){
                sum1 += parseInt(listInput[i].value);
             }
             if(name.endsWith("2")){
                sum2 += parseInt(listInput[i].value);
             }
             if(name.endsWith("3")){
                sum3+= parseInt(listInput[i].value);
             }
             if(name.endsWith("4")){
                sum4 += parseInt(listInput[i].value);
             } 
         }
         $($('.sum-score td')[0]).html(sum1);
         $($('.sum-score td')[1]).html(sum2);
         $($('.sum-score td')[2]).html(sum3);
         $($('.sum-score td')[3]).html(sum4);
        

})

let saveToDB = function(){

}

