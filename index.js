function luongNV() {
    let payOneDay = parseFloat(document.getElementById("payOneDay").value);
    let day = parseFloat(document.getElementById("day").value);

    if (isNaN(payOneDay) || isNaN(day)) {
        alert("Vui lòng nhập đúng giá trị cho lương và số ngày làm việc");
        return;
    }

    let pay = payOneDay * day;

    let div = document.createElement("DIV");
    div.innerHTML = "Lương nhân viên: " + pay + " VND";
    div.style.margin = "15px 0px";
    document.getElementById("bai-01").appendChild(div);
}

function calcAverageNumber() {
    let number01 = parseFloat(document.getElementById("number01").value);
    let number02 = parseFloat(document.getElementById("number02").value);
    let number03 = parseFloat(document.getElementById("number03").value);
    let number04 = parseFloat(document.getElementById("number04").value);
    let number05 = parseFloat(document.getElementById("number05").value);

    if (isNaN(number01) || isNaN(number02) || isNaN(number03) || isNaN(number04) || isNaN(number05)) {
        alert("Vui lòng nhập đúng giá trị cho tất cả các số thực");
        return;
    }

    let average = (number01 + number02 + number03 + number04 + number05) / 5;

    let div = document.createElement("DIV");
    div.innerHTML = "Giá trị trung bình của 5 số thực trên là: " + average;
    div.style.margin = "15px 0px";
    document.getElementById("bai-02").appendChild(div);
}

function usdAndVnd() {
    let priceUSD = parseFloat(document.getElementById("priceUSD").value);
    let usd = parseFloat(document.getElementById("usd").value);

    if (isNaN(priceUSD) || isNaN(usd)) {
        alert("Vui lòng nhập đúng giá trị cho giá USD và số tiền USD bạn muốn đổi!");
        return;
    }

    let vnd = usd * priceUSD;

    let div = document.createElement("DIV");
    div.innerHTML = "Số tiền sau quy đổi VND là: " + vnd + " VND";
    div.style.margin = "15px 0px";
    document.getElementById("bai-03").appendChild(div);
}

function calcRec() {
    let lengthRec = parseFloat(document.getElementById("lengthRec").value);
    let widthRec = parseFloat(document.getElementById("widthRec").value);

    if (isNaN(lengthRec) || isNaN(widthRec)) {
        alert("Vui lòng nhập đúng giá trị cho chiều dài và chiều rộng");
        return;
    }

    let area = lengthRec * widthRec;
    let perimeter = (lengthRec + widthRec) * 2;

    let div1 = document.createElement("DIV");
    div1.innerHTML = "Diện tích hình chữ nhật là: " + area + " m²";
    div1.style.margin = "15px 0px";
    document.getElementById("bai-04").appendChild(div1);

    let div2 = document.createElement("DIV");
    div2.innerHTML = "Chu vi hình chữ nhật là: " + perimeter + " m";
    div2.style.margin = "15px 0px";
    document.getElementById("bai-04").appendChild(div2);
}

function calcNumber() {
    let number = parseInt(document.getElementById("number").value);

    if (isNaN(number) || number < 10 || number > 99) {
        alert("Vui lòng nhập số có 2 chữ số");
        return;
    }

    let digit1 = number % 10;
    let digit2 = Math.floor(number / 10);
    let sum = digit1 + digit2;

    let div = document.createElement("DIV");
    div.innerHTML = "Tổng 2 ký số là: " + sum;
    div.style.margin = "15px 0px";
    document.getElementById("bai-05").appendChild(div);
}
