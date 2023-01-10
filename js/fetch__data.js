fetch("https://raw.githubusercontent.com/omidfarhangnia/CONSULT-Landing-Page/main/json/Latest-Blog-Post.json")
.then((response) => response.json())
.then((data) => fillBlogSection(data))

const BLOGS__CONTAINER = document.querySelector(".blogs__container");
let blogNum = 0;

function fillBlogSection(data) {
    let blogs__container = "";
    for(blog of data){
        blogNum++;
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      
        // each blog has | img__url | date | label | speaker | title | title__link |
        let blog__image = `<img class="blog__image" src="${blog.img__url}" alt="">`,
            blog__date = `<div class="blog__date bg-tomato d-flex flex-column align-items-center justify-content-center p-4"><span class="day text-white">${blog.date.day}</span><span class="month text-black text-uppercase">${monthNames[blog.date.month - 1]}</span><span class="year text-white">${blog.date.year}</span></div>`,
            blog__speaker = `<div class="blog__speaker text-uppercase user-select-none"><i class="fa fa-user me-1"></i>${blog.speaker}</div>`,
            blog__label = `<div class="blog__label text-uppercase user-select-none"><i class="fa fa-bookmark me-1"></i> ${blog.label}</div>`,
            blog__title = `<div class="blog__title mt-2"><a href="${blog.title__link}" class="text-decoration-none text-capitalize">${blog.title}</a></div>`,
            main__container = 
            `
            <div class="blogs blog--num--${blogNum} d-flex flex-column">
                ${blog__image}
                <div class="text__container d-flex">
                    ${blog__date}
                    <div class="about__blog d-flex flex-column p-4">
                        <div class="labelAndSpeaker d-flex gap-3">
                            ${blog__speaker}
                            ${blog__label}
                        </div>
                        ${blog__title}
                    </div>
                </div>
            </div>
            `;
        blogs__container += main__container;
    }

    BLOGS__CONTAINER.innerHTML = blogs__container;
}