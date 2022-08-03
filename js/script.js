var r = document.getElementById('ds');
var s = document.getElementById('ds2').value;
var r1 = document.getElementById('unix');
var s1 = document.getElementById('unix2').value;
var r2 = document.getElementById('cn');
var s2 = document.getElementById('cn2').value
var r3 = document.getElementById('mfca');
var s3 = document.getElementById('mfca2').value
var r4 = document.getElementById('rm');
var s4 = document.getElementById('rm2').value
var r5 = document.getElementById('ds_lab');
var s5 = document.getElementById('ds_lab2').value
var r6 = document.getElementById('unix_lab');
var s6 = document.getElementById('unix_lab2').value
var r7 = document.getElementById('cn_lab');
var s7 = document.getElementById('cn_lab2').value

r7.addEventListener('input', function () {
    var t7 = this.value;
    console.log(t7)

    var t8 = grade(t7)


    console.log(t8)


    function grade(x) {
        if (x >= 90 && x <= 100) {
            var z = document.getElementById('cn_lab1').value = 10;
            document.getElementById('cn_lab1').innerHTML = z;
            return z;
        } else if (x >= 80 && x <= 89) {
            var z = document.getElementById('cn_lab1').value = 9;
            // alert(z)
            document.getElementById('cn_lab1').innerHTML = z;
            return z;
        } else if (x >= 70 && x <= 79) {
            var z = document.getElementById('cn_lab1').value = 8;
            // alert(z)
            document.getElementById('cn_lab1').innerHTML = z;
            return z;
        } else if (x >= 60 && x <= 69) {
            var z = document.getElementById('cn_lab1').value = 7;
            // alert(z)
            document.getElementById('cn_lab1').innerHTML = z;
            return z;
        } else if (x >= 55 && x <= 59) {
            var z = document.getElementById('cn_lab1').value = 6;
            // alert(z)
            document.getElementById('cn_lab1').innerHTML = z;
            return z;
        } else if (x >= 50 && x <= 54) {
            var z = document.getElementById('cn_lab1').value = 4;
            // alert(z)
            document.getElementById('cn_lab1').innerHTML = z;
            return z;
        } else if (x >= 0 && x <= 49) {
            var z = document.getElementById('cn_lab1').value = 0;
            // alert(z)
            document.getElementById('cn_lab1').innerHTML = z;
            return z;
        } else {
            alert('enter valid number')
        }
    }

})

r6.addEventListener('input', function () {
    var t6 = this.value;
    console.log(t6)

    var t7 = grade(t6)
    console.log(t7)


    function grade(x) {
        if (x >= 90 && x <= 100) {
            var z = document.getElementById('unix_lab1').value = 10;
            document.getElementById('unix_lab1').innerHTML = z;
            return z;
        } else if (x >= 80 && x <= 89) {
            var z = document.getElementById('unix_lab1').value = 9;
            // alert(z)
            document.getElementById('unix_lab1').innerHTML = z;
            return z;
        } else if (x >= 70 && x <= 79) {
            var z = document.getElementById('unix_lab1').value = 8;
            // alert(z)
            document.getElementById('unix_lab1').innerHTML = z;
            return z;
        } else if (x >= 60 && x <= 69) {
            var z = document.getElementById('unix_lab1').value = 7;
            // alert(z)
            document.getElementById('unix_lab1').innerHTML = z;
            return z;
        } else if (x >= 55 && x <= 59) {
            var z = document.getElementById('unix_lab1').value = 6;
            // alert(z)
            document.getElementById('unix_lab1').innerHTML = z;
            return z;
        } else if (x >= 50 && x <= 54) {
            var z = document.getElementById('unix_lab1').value = 4;
            // alert(z)
            document.getElementById('unix_lab1').innerHTML = z;
            return z;
        } else if (x >= 0 && x <= 49) {
            var z = document.getElementById('unix_lab1').value = 0;
            // alert(z)
            document.getElementById('unix_lab1').innerHTML = z;
            return z;
        } else {
            alert('enter valid number')
        }
    }

})

r5.addEventListener('input', function () {
    var t5 = this.value;
    console.log(t5)

    var t6 = grade(t5)
    console.log(t6)


    function grade(x) {
        if (x >= 90 && x <= 100) {
            var z = document.getElementById('ds_lab1').value = 10;
            document.getElementById('ds_lab1').innerHTML = z;
            return z;
        } else if (x >= 80 && x <= 89) {
            var z = document.getElementById('ds_lab1').value = 9;
            // alert(z)
            document.getElementById('ds_lab1').innerHTML = z;
            return z;
        } else if (x >= 70 && x <= 79) {
            var z = document.getElementById('ds_lab1').value = 8;
            // alert(z)
            document.getElementById('ds_lab1').innerHTML = z;
            return z;
        } else if (x >= 60 && x <= 69) {
            var z = document.getElementById('ds_lab1').value = 7;
            // alert(z)
            document.getElementById('ds_lab1').innerHTML = z;
            return z;
        } else if (x >= 55 && x <= 59) {
            var z = document.getElementById('ds_lab1').value = 6;
            // alert(z)
            document.getElementById('ds_lab1').innerHTML = z;
            return z;
        } else if (x >= 50 && x <= 54) {
            var z = document.getElementById('ds_lab1').value = 4;
            // alert(z)
            document.getElementById('ds_lab1').innerHTML = z;
            return z;
        } else if (x >= 0 && x <= 49) {
            var z = document.getElementById('ds_lab1').value = 0;
            // alert(z)
            document.getElementById('ds_lab1').innerHTML = z;
            return z;
        } else {
            alert('enter valid number')
        }
    }
})

r4.addEventListener('input', function () {
    var t4 = this.value;
    console.log(t4)

    var t5 = grade(t4)
    console.log(t5)


    function grade(x) {
        if (x >= 90 && x <= 100) {
            var z = document.getElementById('rm1').value = 10;
            document.getElementById('rm1').innerHTML = z;
            return z;
        } else if (x >= 80 && x <= 89) {
            var z = document.getElementById('rm1').value = 9;
            // alert(z)
            document.getElementById('rm1').innerHTML = z;
            return z;
        } else if (x >= 70 && x <= 79) {
            var z = document.getElementById('rm1').value = 8;
            // alert(z)
            document.getElementById('rm1').innerHTML = z;
            return z;
        } else if (x >= 60 && x <= 69) {
            var z = document.getElementById('rm1').value = 7;
            // alert(z)
            document.getElementById('rm1').innerHTML = z;
            return z;
        } else if (x >= 55 && x <= 59) {
            var z = document.getElementById('rm1').value = 6;
            // alert(z)
            document.getElementById('rm1').innerHTML = z;
            return z;
        } else if (x >= 50 && x <= 54) {
            var z = document.getElementById('rm1').value = 4;
            // alert(z)
            document.getElementById('rm1').innerHTML = z;
            return z;
        } else if (x >= 0 && x <= 49) {
            var z = document.getElementById('rm1').value = 0;
            // alert(z)
            document.getElementById('rm1').innerHTML = z;
            return z;
        } else {
            alert('enter valid number')
        }
    }

})

var r3 = document.getElementById('mfca');
var s3 = document.getElementById('mfca2').value
var t4;

r3.addEventListener('input', function () {
    var t3 = this.value;
    console.log(t3)

    var t4 = grade(t3)
    console.log(t4)


    function grade(x) {
        if (x >= 90 && x <= 100) {
            var z = document.getElementById('mfca1').value = 10;
            document.getElementById('mfca1').innerHTML = z;
            return z;
        } else if (x >= 80 && x <= 89) {
            var z = document.getElementById('mfca1').value = 9;
            // alert(z)
            document.getElementById('mfca1').innerHTML = z;
            return z;
        } else if (x >= 70 && x <= 79) {
            var z = document.getElementById('mfca1').value = 8;
            // alert(z)
            document.getElementById('mfca1').innerHTML = z;
            return z;
        } else if (x >= 60 && x <= 69) {
            var z = document.getElementById('mfca1').value = 7;
            // alert(z)
            document.getElementById('mfca1').innerHTML = z;
            return z;
        } else if (x >= 55 && x <= 59) {
            var z = document.getElementById('mfca1').value = 6;
            // alert(z)
            document.getElementById('mfca1').innerHTML = z;
            return z;
        } else if (x >= 50 && x <= 54) {
            var z = document.getElementById('mfca1').value = 4;
            // alert(z)
            document.getElementById('mfca1').innerHTML = z;
            return z;
        } else if (x >= 0 && x <= 49) {
            var z = document.getElementById('mfca1').value = 0;
            // alert(z)
            document.getElementById('mfca1').innerHTML = z;
            return z;
        } else {
            alert('enter valid number')
        }
    }
})

r2.addEventListener('input', function () {
    var t2 = this.value;
    console.log(t2)

    var t3 = grade(t2)
    console.log(t3)


    function grade(x) {
        if (x >= 90 && x <= 100) {
            var z = document.getElementById('cn1').value = 10;
            document.getElementById('cn1').innerHTML = z;
            return z;
        } else if (x >= 80 && x <= 89) {
            var z = document.getElementById('cn1').value = 9;
            // alert(z)
            document.getElementById('cn1').innerHTML = z;
            return z;
        } else if (x >= 70 && x <= 79) {
            var z = document.getElementById('cn1').value = 8;
            // alert(z)
            document.getElementById('cn1').innerHTML = z;
            return z;
        } else if (x >= 60 && x <= 69) {
            var z = document.getElementById('cn1').value = 7;
            // alert(z)
            document.getElementById('cn1').innerHTML = z;
            return z;
        } else if (x >= 55 && x <= 59) {
            var z = document.getElementById('cn1').value = 6;
            // alert(z)
            document.getElementById('cn1').innerHTML = z;
            return z;
        } else if (x >= 50 && x <= 54) {
            var z = document.getElementById('cn1').value = 4;
            // alert(z)
            document.getElementById('cn1').innerHTML = z;
            return z;
        } else if (x >= 0 && x <= 49) {
            var z = document.getElementById('cn1').value = 0;
            // alert(z)
            document.getElementById('cn1').innerHTML = z;
            return z;
        } else {
            alert('enter valid number')
        }
    }
})

r.addEventListener('input', fun1)

function fun1() {
    var t = this.value;
    console.log(t)

    t1 = grade(t);
    console.log(t1)

    function grade(x) {
        if (x >= 90 && x <= 100) {
            var z = document.getElementById('ds1').value = 10;
            document.getElementById('ds1').innerHTML = z;
            return z;
        } else if (x >= 80 && x <= 89) {
            var z = document.getElementById('ds1').value = 9;
            // alert(z)
            document.getElementById('ds1').innerHTML = z;
            return z;
        } else if (x >= 70 && x <= 79) {
            var z = document.getElementById('ds1').value = 8;
            // alert(z)
            document.getElementById('ds1').innerHTML = z;
            return z;
        } else if (x >= 60 && x <= 69) {
            var z = document.getElementById('ds1').value = 7;
            // alert(z)
            document.getElementById('ds1').innerHTML = z;
            return z;
        } else if (x >= 55 && x <= 59) {
            var z = document.getElementById('ds1').value = 6;
            // alert(z)
            document.getElementById('ds1').innerHTML = z;
            return z;
        } else if (x >= 50 && x <= 54) {
            var z = document.getElementById('ds1').value = 4;
            // alert(z)
            document.getElementById('ds1').innerHTML = z;
            return z;
        } else if (x >= 0 && x <= 49) {
            var z = document.getElementById('ds1').value = 0;
            // alert(z)
            document.getElementById('ds1').innerHTML = z;
            return z;
        } else {
            alert('enter valid number')
        }
        return t1;
    }
    return t1;
};

console.log(t1)


var r1 = document.getElementById('unix');
var s1 = document.getElementById('unix2').value;
var t1 = this.value;
console.log(t1)
// var t2 = grade(t1)
console.log(t2)
var t2;

r1.addEventListener('input', function () {
    var t1 = this.value;
    console.log(t1)

    var t2 = grade(t1)
    console.log(t2)


    function grade(x) {
        if (x >= 90 && x <= 100) {
            var z = document.getElementById('unix1').value = 10;
            document.getElementById('unix1').innerHTML = z;
            return z;
        } else if (x >= 80 && x <= 89) {
            var z = document.getElementById('unix1').value = 9;
            // alert(z)
            document.getElementById('unix1').innerHTML = z;
            return z;
        } else if (x >= 70 && x <= 79) {
            var z = document.getElementById('unix1').value = 8;
            // alert(z)
            document.getElementById('unix1').innerHTML = z;
            return z;
        } else if (x >= 60 && x <= 69) {
            var z = document.getElementById('unix1').value = 7;
            // alert(z)
            document.getElementById('unix1').innerHTML = z;
            return z;
        } else if (x >= 55 && x <= 59) {
            var z = document.getElementById('unix1').value = 6;
            // alert(z)
            document.getElementById('unix1').innerHTML = z;
            return z;
        } else if (x >= 50 && x <= 54) {
            var z = document.getElementById('unix1').value = 4;
            // alert(z)
            document.getElementById('unix1').innerHTML = z;
            return z;
        } else if (x >= 0 && x <= 49) {
            var z = document.getElementById('unix1').value = 0;
            // alert(z)
            document.getElementById('unix1').innerHTML = z;
            return z;
        } else {
            alert('enter valid number')
        }
    }
})

function calculate() {

    var a = parseInt(document.getElementById("ds").value);
    var b = parseInt(document.getElementById("unix").value);
    var c = parseInt(document.getElementById("cn").value);
    var d = parseInt(document.getElementById("mfca").value);
    var e = parseInt(document.getElementById("rm").value);
    var f = parseInt(document.getElementById("ds_lab").value);
    var g = parseInt(document.getElementById("unix_lab").value);
    var h = parseInt(document.getElementById("cn_lab").value);

    var aa = 4 * marks(a);
    var ab = 4 * marks(b);
    var ac = 4 * marks(c);
    var ad = 4 * marks(d);
    var ae = 2 * marks(e);
    var af = 2 * marks(f);
    var ag = 2 * marks(g);
    var ah = 2 * marks(h);


    var z1 = ((aa + ab + ac + ad + ae + af + ag + ah) / 24);


    document.getElementById("res").value = parseFloat(z1);
}



function marks(x) {
    if (x >= 90 && x <= 100) {
        var z = document.getElementById('cn1').value = 10;
        document.getElementById('cn1').innerHTML = z;
        return z;
    } else if (x >= 80 && x <= 89) {
        var z = document.getElementById('cn1').value = 9;
        // alert(z)
        document.getElementById('cn1').innerHTML = z;
        return z;
    } else if (x >= 70 && x <= 79) {
        var z = document.getElementById('cn1').value = 8;
        // alert(z)
        document.getElementById('cn1').innerHTML = z;
        return z;
    } else if (x >= 60 && x <= 69) {
        var z = document.getElementById('cn1').value = 7;
        // alert(z)
        document.getElementById('cn1').innerHTML = z;
        return z;
    } else if (x >= 55 && x <= 59) {
        var z = document.getElementById('cn1').value = 6;
        // alert(z)
        document.getElementById('cn1').innerHTML = z;
        return z;
    } else if (x >= 50 && x <= 54) {
        var z = document.getElementById('cn1').value = 4;
        // alert(z)
        document.getElementById('cn1').innerHTML = z;
        return z;
    } else if (x >= 0 && x <= 49) {
        var z = document.getElementById('cn1').value = 0;
        // alert(z)
        document.getElementById('cn1').innerHTML = z;
        return z;
    } else {
        alert('enter valid number')
    }

}

