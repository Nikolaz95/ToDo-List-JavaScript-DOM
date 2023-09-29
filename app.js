

const addText = document.getElementById('skriva-tekst');
console.log(addText)
const ulList = document.querySelector('.ullista');
console.log(ulList)
const finishUl = document.getElementById('finish');
console.log(finishUl)
const newForm = document.getElementById('new-form');
console.log(newForm)

const lenght = 0;

newForm.onsubmit = function () {
    return false;
}

document.body.onload = function () {
    rem();
}

edit_todoList = function (n) {
    document.querySelector(`.text${n}`).removeAttribute('disable')
}

add_todoList = function (t) {
    let ul =document.createElement("ul");
    console.log(ul)
    let li = document.createElement("li");
    console.log(li)
    let div1 = document.createElement("div");
    console.log(div1)
    let div2 = document.createElement("div");
    console.log(div2)
    let input = document.createElement("input");
    console.log(input)
    let span = document.createElement("span");
    console.log(span)
    let btnChange = document.createElement("button");
    console.log(btnChange)
    let btnFinish = document.createElement("button");
    console.log(btnFinish)
    let btnDelete = document.createElement("button");
    console.log(btnDelete)


    div1.classList.add("task");
    div2.classList.add("kontent-ele");

    // kod za input  form type teks


    input.value = document.querySelector("#skriva-tekst").value;
    input.setAttribute("type", "text");
    input.classList.add("text1");
    input.setAttribute("disabled", "");
    span.classList.add("buttons");

    console.log(input)

    /* button change */

    btnChange.classList.add("change");
    btnChange.onclick = function () {
        if (input.hasAttribute("disabled")) {
            input.removeAttribute("disabled");
            btnChange.innerHTML = `<i class="fa-solid fa-check" style="color: #11ff00;"></i> Save`;
        } else {
            btnChange.innerHTML = `<i class="fa-solid fa-pen-to-square" style="color: #005eff;"></i> Change`;

            input.setAttribute("disabled", "");
        }
    };

    btnChange.innerHTML = `<i class="fa-solid fa-pen-to-square" style="color: #005eff;"></i> Change`;


    /* finnish button */

    btnFinish.classList.add("finish");
    btnFinish.onclick = function () {
        finishUl.appendChild(li);
        btnFinish.remove();
    };

    btnFinish.innerHTML = `<i class="fa-solid fa-check-double" style="color: #37ff00;"></i> Finnish`;

    /* Delete button */

    btnDelete.classList.add("delete");
    btnDelete.onclick = function () {
        li.remove();
        ul.remove();
    };

    btnDelete.innerHTML = `<i class="fa-solid fa-trash-can" style="color: #c22e2e;"></i> Delete `;

    span.appendChild(btnChange);
    span.appendChild(btnFinish);
    span.appendChild(btnDelete);

    div2.appendChild(input);
    div2.appendChild(span);

    div1.appendChild(div2);
    li.appendChild(div1);
    ul.appendChild(li);

    if (document.querySelectorAll("#nema_t").length > 0) {
        document.querySelector("#nema_t").remove();
    }

    if (document.querySelector("#skriva-tekst").value == "") {
        if (document.querySelectorAll("#nema_t").length > 0) {
            document.querySelector("#nema_t").remove();
        }

        document.querySelector("#new-form").innerHTML += `<p id="nema_t" style="color:red;"> Can't be empty place !! <i class="fa-solid fa-circle-exclamation fa-beat" style="color: #ff0000;"></i></p>`;
    } else {
        ulList.appendChild(ul);

        document.querySelector("#skriva-telst").value = "";
    }

    return false;

}

rem = function (e) {
    document.querySelectorAll(".ullista ul, #finish li").forEach(function (el) {
        el.remove();
    });

    return false;
}