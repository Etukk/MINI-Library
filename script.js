document.querySelector('.burger').onclick = function () {
  document.querySelector('.nav-links').classList.toggle('active');
};

// Toggle password visibility — მხოლოდ თუ არსებობს ელემენტი
const togglePwd = document.getElementById("togglePassword");
if (togglePwd) {
  togglePwd.onclick = function () {
    const pwd = document.getElementById("password");
    pwd.type = pwd.type === "password" ? "text" : "password";
  };
}

// Form validation — მხოლოდ თუ არსებობს ფორმა
const form = document.getElementById("registerForm");
if (form) {
  form.onsubmit = function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwdRegex = /^(?=.*[ა-ჰA-Za-z])(?=.*\d)[ა-ჰA-Za-z\d]{6,}$/;

    if (!emailRegex.test(email)) {
      alert("შეიყვანე სწორი ელ. ფოსტა!");
      return;
    }

    if (!pwdRegex.test(password)) {
      alert("პაროლი უნდა იყოს მინ. 6 სიმბოლო და უნდა შეიცავდეს ციფრებს!");
      return;
    }

    alert("ფორმა წარმატებით გაიგზავნა!");
  };
}



// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


// Cookie Banner
window.onload = () => {
  const banner = document.getElementById("cookieBanner");
  const btn = document.getElementById("acceptCookies");

  banner.style.display = "block";

  btn.onclick = () => {
    banner.style.display = "none";
  };
};



fetch("https://jsonplaceholder.typicode.com/comments?_limit=3")
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    var container = document.getElementById("reviewBox");

    data.forEach(function(item) {
      var div = document.createElement("div");
      div.className = "info-box";

      div.innerHTML = 
        "<h3>🧑‍💬 ავტორი: " + item.name + "</h3>" +
        "<p><strong>📧 ელფოსტა:</strong> " + item.email + "</p>" +
        "<p><strong>💬 კომენტარი:</strong> " + item.body + "</p>";

      container.appendChild(div);
    });
  })
  // .catch(function() {
  //   document.getElementById("reviewBox").innerHTML = "მონაცემების ჩატვირთვა ვერ მოხერხდა.";
  // });
