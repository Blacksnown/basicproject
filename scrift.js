// Lưu trữ lượt truy cập (giả lập bằng localStorage)
let count = localStorage.getItem("visitCount") || 0;
count++;
localStorage.setItem("visitCount", count);
document.getElementById("counter").textContent = count;

// Xử lý form thành viên
document.getElementById("member-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;

  const infoBox = document.getElementById("member-info");
  infoBox.innerHTML = `
    <h3>Thông tin thành viên</h3>
    <p><strong>Tên:</strong> ${name}</p>
    <p><strong>Ngày sinh:</strong> ${dob}</p>
    <p><strong>Kỷ niệm:</strong> ${name} là một phần không thể thiếu của lớp 12A1!</p>
  `;
});
