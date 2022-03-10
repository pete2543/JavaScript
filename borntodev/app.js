function G() {
  let grade, grade2, grade3, grade4, grade5;
  let credit_1 = parseInt(document.getElementById("credit_1").value);
  let grade_1 = parseInt(document.getElementById("grade_1").value);
  let credit_2 = parseInt(document.getElementById("credit_2").value);
  let grade_2 = parseInt(document.getElementById("grade_2").value);
  let credit_3 = parseInt(document.getElementById("credit_3").value);
  let grade_3 = parseInt(document.getElementById("grade_3").value);
  let credit_4 = parseInt(document.getElementById("credit_4").value);
  let grade_4 = parseInt(document.getElementById("grade_4").value);
  let credit_5 = parseInt(document.getElementById("credit_5").value);
  let grade_5 = parseInt(document.getElementById("grade_5").value);
  //grade1
  if (grade_1 == 4) {
    grade = 4.0;
  } else if (grade_1 == 3.5) {
    grade = 3.5;
  } else if (grade_1 == 3.0) {
    grade = 3.0;
  } else if (grade_1 == 2.5) {
    grade = 2.5;
  } else if (grade_1 == 2.0) {
    grade = 2.0;
  } else if (grade_1 == 1.5) {
    grade = 1.5;
  } else if (grade_1 == 1.0) {
    grade = 1.0;
  } else if (grade_1 == 0) {
    grade = 0.0;
  }
  //grade2
  if (grade_2 == 4.0) {
    grade2 = 4.0;
  } else if (grade_2 == 3.5) {
    grade2 = 3.5;
  } else if (grade_2 == 3.0) {
    grade2 = 3.0;
  } else if (grade_2 == 2.5) {
    grade2 = 2.5;
  } else if (grade_2 == 2.0) {
    grade2 = 2.0;
  } else if (grade_2 == 1.5) {
    grade2 = 1.5;
  } else if (grade_2 == 1.0) {
    grade2 = 1.0;
  } else if (grade_2 == 0) {
    grade2 = 0.0;
  }
  //grade3
  if (grade_3 == 4.0) {
    grade3 = 4.0;
  } else if (grade_3 == 3.5) {
    grade3 = 3.5;
  } else if (grade_3 == 3.0) {
    grade3 = 3.0;
  } else if (grade_3 == 2.5) {
    grade3 = 2.5;
  } else if (grade_3 == 2.0) {
    grade3 = 2.0;
  } else if (grade_3 == 1.5) {
    grade3 = 1.5;
  } else if (grade_3 == 1.0) {
    grade3 = 1.0;
  } else if (grade_3 == 0) {
    grade3 = 0.0;
  }
  //grade4
  if (grade_4 == 4.0) {
    grade4 = 4.0;
  } else if (grade_4 == 3.5) {
    grade4 = 3.5;
  } else if (grade_4 == 3.0) {
    grade4 = 3.0;
  } else if (grade_4 == 2.5) {
    grade4 = 2.5;
  } else if (grade_4 == 2.0) {
    grade4 = 2.0;
  } else if (grade_4 == 1.5) {
    grade4 = 1.5;
  } else if (grade_4 == 1.0) {
    grade4 = 1.0;
  } else if (grade_4 == 0) {
    grade4 = 0.0;
  }
  //grade5
  if (grade_5 == 4.0) {
    grade5 = 4.0;
  } else if (grade_5 == 3.5) {
    grade5 = 3.5;
  } else if (grade_5 == 3.0) {
    grade5 = 3.0;
  } else if (grade_5 == 2.5) {
    grade5 = 2.5;
  } else if (grade_5 == 2.0) {
    grade5 = 2.0;
  } else if (grade_5 == 1.5) {
    grade5 = 1.5;
  } else if (grade_5 == 1.0) {
    grade5 = 1.0;
  } else if (grade_5 == 0) {
    grade5 = 0.0;
  }
  let g = grade + grade2 + grade3 + grade4 + grade5;
  let sum_cre = credit_1 + credit_2 + credit_3 + credit_4 + credit_5;
  let total =
    grade * credit_1 +
    grade2 * credit_2 +
    grade3 * credit_3 +
    grade4 * credit_4 +
    grade5 * credit_5;
  let GPA = total / sum_cre;
  if (GPA >= 3.0 && GPA <4.0) {
      alert("🤖คุณได้เกรดเฉลี่ย: "+GPA.toFixed(2)+"\n🥰เก่งมากเลยไอ้ต้าววพยามเเบบนี้ไปเรื่อยๆนะ!! 🥰")
  }else if (GPA >=2.16 && GPA <= 2.99) {
    alert("🤖คุณได้เกรดเฉลี่ย: "+GPA.toFixed(2)+"\nเทอมนี้ทำได้ดีเเล้วนะไอ้ต้าวว สู้นะ!!😁")
  }else{
    alert("🤖คุณได้เกรดเฉลี่ย: "+GPA.toFixed(2)+"\nพยามเข้านะไอ้ต้าวอย่าได้ท้อไปเลยสักวันต้องเป็นของเรา!!😣")
  }
  document.getElementById("score").value = GPA.toFixed(2);
 
}
//console.log(G());
