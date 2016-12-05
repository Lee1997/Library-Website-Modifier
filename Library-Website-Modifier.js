(function() {
    'use strict';

    if(document.getTitle() == "For Current Students | Maynooth University")
    {
        var selectedBox = document.getElementsByClassName("n9");
        var anchor = selectedBox[0].getElementsByTagName('a');

        anchor[0].innerHTML = "Exam Papers";
        anchor[0].href = "https://www.maynoothuniversity.ie/library/exam-papers";
    }
})();