// 當 contact 表單送出時顯示訊息（不會送到後端）
document.addEventListener("DOMContentLoaded",()=>{
  const form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit",(e)=>{
      e.preventDefault();
      alert("感謝你的訊息，我會儘快回覆！"); // 或顯示在頁面上
      form.reset();
    });
  }
});
