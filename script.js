"use strict";

// form validation
let formRegistration = document.getElementById('registration')


formRegistration.addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = {};
    let form = event.target

    // username
    let username = document.getElementById('usernamefield').value;

    if (username == "" && username.length < 5) {
        errors.username = 'This field can not be empty and must contain at least 5 characters'
    }
// email
let emailField = document.getElementById("email");

emailField.addEventListener("keyup", function () {
  let emailValue = document.getElementById("email").value;
  let errorEmail = document.getElementById("text");
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue.match(emailRegex)) {
    errorEmail.innerText = "Your Email is Valid";
    errorEmail.style.color = "green";
  } else {
    errorEmail.innerText = "Your Email is invalid";
    errorEmail.style.color = "red";
  }

  if (emailValue == "") {
    errorEmail.innerText = " ";
  }
});

emailField.addEventListener("focus", function (event) {
  event.target.style.border = "2px solid green";
  event.target.style.outline = "none";
});
// password

let password = document.getElementById('passwordfield').value;
let password2 = document.getElementById('passwordfield2').value;

if (password == "") {
    errors.pasww = "This field can not be empty";
  }
  if (password != password2) {
    errors.pasww2 = "Passwords do not match";
  }

  //chechkox
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "You must agree with terms and conditions";
  }

  //radio
  let gender = false;
  form.querySelectorAll('[name="gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select your gender";
  }

  console.log(errors);



  for (let item in errors) {


    let spanContent = document.getElementById("error_" + item);

    if (spanContent) {
      spanContent.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

// eye icons
let showPassword = document.getElementById("passwordfield",);
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function () {
  if (showPassword.type == "password") {
    showPassword.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
    showPassword.setAttribute("type", "password");
  }
});

let showPassword2 = document.getElementById("passwordfield2");
let toggleIcon2 = document.getElementById("toggleIcon2");

toggleIcon.addEventListener("click", function () {
  if (showPassword2.type == "password") {
    showPassword2.setAttribute("type", "text");
    toggleIcon2.classList.remove("fa-eye");
    toggleIcon2.classList.add("fa-eye-slash");
  } else {
    toggleIcon2.classList.remove("fa-eye-slash");
    toggleIcon2.classList.add("fa-eye");
    showPassword2.setAttribute("type", "password");
  }
});
// scroll tot top

let scrollBtn = document.getElementById('scrollTop')

scrollBtn.addEventListener('click', function() {
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
})

// event
document.getElementById("clickMe").addEventListener ("click", function () {
    alert("you clicked this button");
})

document.getElementById('clickMe').addEventListener ("mouseover", function () {
    clickMe.style.background = 'red';
})
document.getElementById('clickMe').addEventListener ("mouseout", function () {
    clickMe.style.background = 'white';
})



// slider section
let dataSlider = [
  {
    id: 1,
    imageUrl:
      "https://autoartmodels.de/wp-content/uploads/2020/04/76331a-scaled.jpg",
  },
    {
      id: 2,
      imageUrl:
        "https://autoartmodels.de/wp-content/uploads/2020/04/76331b-scaled.jpg ",    
    },
    {
      id: 3,
      imageUrl:
        "https://autoartmodels.de/wp-content/uploads/2020/04/76331f-scaled.jpg",
    },
    {
      id: 4,
      imageUrl:
        "https://autoartmodels.de/wp-content/uploads/2020/04/76331c-scaled.jpg",
    },
    {
      id: 5,
      imageUrl:
        "https://autoartmodels.de/wp-content/uploads/2020/04/76331e-scaled.jpg",
    },
    {
      id: 6,
      imageUrl:
        "https://autoartmodels.de/wp-content/uploads/2020/04/76331i-scaled.jpg",
    },
    {
      id: 7,
      imageUrl:
        "https://autoartmodels.de/wp-content/uploads/2020/04/76331k-scaled.jpg",
    },
    {
      id: 8,
      imageUrl:
        "https://autoartmodels.de/wp-content/uploads/2020/04/76331x-scaled.jpg",
    },
];

const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const sliderContent = document.getElementById('slider-content')
const dotItem = document.getElementsByClassName('dot');
let sliderIndex = 0;


function createDivTag(item) {
    const div = document.createElement("div");
    div.classList.add("slide");
    return div;
  }
  

  function createImgTag(item) {
    const img = document.createElement("img");
    img.setAttribute("src", item.imageUrl);
    img.setAttribute("alt", item.title);
    return img;
  }
  

  function createh2Tag(item) {
    const title = document.createElement("h2");
    title.textContent = item.title;
    return title;
  }
  
  function createDots(item) {
    const dotsParent = document.createElement("div");
    dotsParent.classList.add("dotsWraper");
  
    dataSlider.forEach((element) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.setAttribute("data-id", element.id - 1);
  
      dot.addEventListener("click", function (event) {
        let id = event.target.getAttribute("data-id");
        sliderIndex = id;
        setSlide();
      });
      dotsParent.appendChild(dot);
    });
  
    return dotsParent;
  }
  
  function setSlide() {
    sliderContent.innerHTML = " ";
    const slideDiv = createDivTag(dataSlider[sliderIndex]);
    const imgTag = createImgTag(dataSlider[sliderIndex]);
    const h2Tag = createh2Tag(dataSlider[sliderIndex]);
    const dots = createDots();
  
    slideDiv.appendChild(imgTag);
    slideDiv.appendChild(h2Tag);
    sliderContent.appendChild(slideDiv);
    sliderContent.appendChild(dots);
    currentDotActive();
  }
  
  function currentDotActive() {
      dotItem[sliderIndex].classList.add('active');
  }
  
  function arrowLeftClick() {
    if (sliderIndex == 0) {
      sliderIndex = dataSlider.length - 1;
      setSlide();
      return;
    }
    
    sliderIndex--;
    setSlide();
  }
  function arrowRightClick() {
    if (sliderIndex == dataSlider.length - 1) {
      sliderIndex = 0;
      setSlide();
      return;
    }
    sliderIndex++;
    setSlide();
  }
  
  arrowLeft.addEventListener("click", arrowLeftClick);
  arrowRight.addEventListener("click", arrowRightClick);

  setInterval(() => {
  arrowRightClick();
}, 3000);
  
  
  setSlide();
  
 

// accordion
let accordionContainer = document.querySelectorAll('.acc-container');

for (let item of accordionContainer) {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
  });
}
accordionContainer.forEach(element => {
  element.addEventListener('click', function() {
    this.classList.toggle('active');
  });
})
for (let i = 0; i < accordionContainer.length; i++) {
  accordionContainer[i].addEventListener('click', function() {
    this.classList.toggle('active');
  });
}


// burgerBar section
let navBar = document.getElementById('navigation');
let toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function(){
    navBar.classList.toggle('toggleNav');
    toggleButton.classList.toggle('activeMenu');
}) 

// document.getElementById('clickBody').addEventListener ('click', function(event) {
//     console.log(event);
// })
// document.getElementById('username').addEventListener ('keydown', function(y) {
//     y.target.classList.add('input-wraper');
// })
// document.getElementById('link').addEventListener ('click', function (event) {
//     event.preventDefault();
// })

// post info
let inputFilter = document.getElementById("filter");
let result = document.getElementById("result");
let listItems = [];

function getUsers() {
  fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
  })
    .then((response) => {
      if (response.status !== 200) {
        throw response.status;
      }
      return response.json();
    })
    .then((responseData) => {
      responseData.data.forEach((element) => {
        let li = document.createElement("li");

        li.innerHTML = `${element.first_name} ${element.last_name}`;
        listItems.push(li);

        result.appendChild(li);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

getUsers();

function filterData(searchItem) {
  listItems.forEach((item) => {

    if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

inputFilter.addEventListener("keyup", function (event) {
  filterData(event.target.value);
});