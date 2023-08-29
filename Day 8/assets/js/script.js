var nama = "Shasa" // digunakan sebelum es 6
let usia = 19; // variable dapat berubah
const PI = 3.14; // variable tidak dapat berubah

// console log berguna memunculkan output pada log
console.log(nama);

// tipe data string
let pesan = "Isi pesan";
let sapaan = 'Isi sapaan';

console.log(pesan);

let age = 10;
let nilai = 90.5;

//tipe data boolean
// berfungsi mengecek keadaan
// true/false
let isLogin = false

if(isLogin) {
    console.log('User sudah login');
} else {
    console.log('User belum login')
}

let human = {
    name: "Budi",
    age: 20,
    addres: "Jl.Jalan",
    isMarried: false,
}

// mangakses satu variable
console.log(human.name);
// mengakses beberapa variabel dalam object
console.log(human);

// array
// urutan dimulai dari 0
let buah = ["apel", "semangka", "melon"]
// akses satu
console.log(buah[0]);
// akses semua
console.log(buah);

function sapa(){
    console.log("Halo User 😒🥶")
}

sapa()

function hallo() {
    console.log('HALLO')
    console.log('HALLO 2')

}

hallo()

function sapaUser(nama) {
    console.log("Hallo " + nama + "😍")
}

// memanggil function dengan parameter
sapaUser("Mark")

//tambah
function tambah(angka1, angka2) {
    return angka1 + angka2;
}

console.log(tambah(1, 2))

//kurang
function kurang(angka1, angka2) {
    return angka1 - angka2;
}

console.log(kurang(1, 2))

//bagi
function bagi(angka1, angka2) {
    return angka1 / angka2;
}

console.log(bagi(1, 2))

//kali
function kali(angka1, angka2) {
    return angka1 * angka2;
}

console.log(kali(1, 2))
