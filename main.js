const loginForm = document.querySelector(".login-form");
const inp_username = document.querySelector("#username");
const inp_password = document.querySelector("#password");

//โจทย์ : ให้สร่าง code เพื่อ validate (ตรวจสอบ) ค่าที่ submit จาก form ดังนี้
// 1. ทุก input ต้องไม่ใส่ค่าว่าง
// 2. username ความยาวต้องมากกว่า 3 ตัวอักษร
// 3. password ความยาวต้องมากกว่า 4 ตัวอักษร

// ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีเเดง
// ถ้า validate ผ่านให้ไปที่ htttp://www.example.com

const hdlLogin = (e) => {
  e.preventDefault();
  console.log(loginForm.elements);
  let allInput = loginForm.elements;
  let inputObj = {};
  let isValid = true;
  for (let el of allInput) {
    // ตรวจสอบค่าว่าง
    if (el.value.trim() === "") {
      el.style.border = "2px solid red";
      isValid = false;
    } else {
      el.style.border = ""; // ตั้งค่าสไตล์เส้นขอบใหม่
    }

    // ตรวจสอบความยาวของชื่อผู้ใช้
    if (el.id === "username" && el.value.length <= 3) {
      el.style.border = "2px solid red";
      isValid = false;
    }

    // ตรวจสอบความยาวของรหัสผ่าน
    if (el.id === "password" && el.value.length <= 3) {
      el.style.border = "2px solid red";
      isValid = false;
    }

    inputObj[el.id] = el.value;
  }

  // หากอินพุตทั้งหมดถูกต้อง ให้ไปที่ URL ที่ระบุ
  if (isValid) {
    window.location.href = "http://www.example.com";
  }
  
};

loginForm.addEventListener("submit", hdlLogin);