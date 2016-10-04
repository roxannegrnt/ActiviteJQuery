$(document).ready(function () {
    var turn = true;
    var joueur="";
    var cpt=0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            cpt++;
            var name="button"+cpt;
            $("<input type=\"button\" name="+name+">").appendTo('#page');
        }
        $('</br>').appendTo('#page');
    }
    $("input").click(function () {
        if (turn) {
            $(this).val("O");
            turn=false;
            joueur='O';
        }
        else{
            $(this).val("X");
            turn=true;
            joueur='X';
        }
        if (($("input[name='button1']").val()===joueur)&&($("input[name='button2']").val()===joueur)&&($("input[name='button3']").val()===joueur)) {
            alert(joueur+" vous avez gagné");
        }
        if (($("input[name='button4']").val()===joueur)&&($("input[name='button5']").val()===joueur)&&($("input[name='button6']").val()===joueur)) {
            alert(joueur+" vous avez gagné");
        }
        if (($("input[name='button7']").val()===joueur)&&($("input[name='button8']").val()===joueur)&&($("input[name='button9']").val()===joueur)) {
            alert(joueur+" vous avez gagné");
        }
        if (($("input[name='button1']").val()===joueur)&&($("input[name='button3']").val()===joueur)&&($("input[name='button6']").val()===joueur)) {
            alert(joueur+" vous avez gagné");
        }
        if (($("input[name='button3']").val()===joueur)&&($("input[name='button6']").val()===joueur)&&($("input[name='button9']").val()===joueur)) {
            alert(joueur+" vous avez gagné");
        }
        if (($("input[name='button1']").val()===joueur)&&($("input[name='button5']").val()===joueur)&&($("input[name='button8']").val()===joueur)) {
            alert(joueur+" vous avez gagné");
        }
        if (($("input[name='button3']").val()===joueur)&&($("input[name='button5']").val()===joueur)&&($("input[name='button7']").val()===joueur)) {
            alert(joueur+" vous avez gagné");
        }
    });
});


