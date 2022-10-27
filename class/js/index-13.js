let studentData = [];
let savedStudents = new Map();
let courses = [
    { val: 'html', txt: 'HTML1' },
    { val: 'css', txt: 'Style Sheet' },
    { val: 'js1', txt: 'JavaSciprt Basic' },
    { val: 'js2', txt: 'JavaSciprt Advance' },
    { val: 'php', txt: 'Back-End with PHP' },
    { val: 'cms', txt: 'Content Managment System' }
];
const stObj = function (stDetails, marks) {
    this.details = stDetails;
    this.marks = marks;
    this.avg = function () {
        let sum = 0;
        for (let mark of this.marks) {
            sum += mark.cmark;
        }
        return sum / this.marks.length;
    };
    this.max = function () {
        let max = 0;
        for (let mark of this.marks) {
            if (max < mark.cmark) {
                max = mark.cmark;
            }
        }
        return max;
    };
    this.updateMarks = function (markObj) {
        this.marks.push(markObj);
    };
}
function tablePoper() {
    $.each(studentData, function (idx, value) {
        let tr = $('<tr></tr>');
        let fnameTd = $(`<td>${value.first_name}</td>`);
        let lnameTd = $(`<td>${value.last_name}</td>`);
        let emailTd = $(`<td>${value.email}</td>`);
        let genderTd = $(`<td>${value.gender}</td>`);
        let countryTd = $(`<td>${value.Country}</td>`);
        tr.append(fnameTd, lnameTd, emailTd, genderTd, countryTd);
        tr.click(function (event) {
            modalContent(idx, value);
            $('#stDetails').fadeIn('slow');
        })
        $('tbody').append(tr);
    })
}
function modalContent(idx, stDetails) {
    let mCont = $('#stDetails .m-content');
    mCont.children().remove();
    mCont.append(`<h3>Name: ${stDetails.first_name} ${stDetails.last_name}</h3>`);
    mCont.append(`<h3>Email: ${stDetails.email}</h3>`);
    mCont.append(`<h3>Gender: ${stDetails.gender} | Country: ${stDetails.Country} | Language: ${stDetails.lang}</h3>`);
    let select = $('<select></select>');
    $.each(courses, function (idx, val) {
        select.append(`<option value='${val.val}'>${val.txt}</option>`);
    })
    select.change(function () {
        $(this).next().attr('disabled', false);
    })
    mCont.append(select);
    mCont.append("<input placeholder='write the mark' disabled/>");
    let saveBtn = $("<button>Save</button>");
    saveBtn.click(function () {
        let cName = $('select').val();
        let mark = parseFloat($(this).prev().val());
        if (savedStudents.has(idx)) {
            let studentObj = savedStudents.get(idx);
            studentObj.updateMarks({ cname: cName, cmark: mark });
            console.log(savedStudents);
        } else {
            let studentObj = new stObj(stDetails, [{ cname: cName, cmark: mark }]);
            savedStudents.set(idx, studentObj);
        }
        // $(this).parentsUntil('body').fadeOut();
        $('#stDetails').fadeOut('slow');
    });
    mCont.append(saveBtn);
    if (savedStudents.has(idx)) {
        let stObj = savedStudents.get(idx);
        $.each(stObj.marks, function (idx, mark) {
            mCont.append(`<h5>course Name:${mark.cname} | ${mark.cmark}</h5>`);
        })
        mCont.append(`<h4>Avg: ${stObj.avg()} | max: ${stObj.max()}</h4>`);
    }
}
$.getJSON('./data/studentsData.json', function (data) {
    studentData = data;
    tablePoper();
});
$('#stDetails .close').click(function (event) {
    $('#stDetails').fadeOut('slow');
})
document.getElementsByTagName("input")[0].addEventListener('change', function (event) {
    if (event.target.checked) {
        alert("Milad");
    } else {
        alert("marcelo");
    }
});
$('input[type=radio]').on('change', function (event) {
    let selected = $(event.target).val();
    $('tbody tr').filter(function () {
        let genderTd = $($(this).children()[3]).text();
        $(this).toggle(genderTd.indexOf(selected) > -1);
    })
})
