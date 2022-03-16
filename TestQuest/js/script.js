async function getResponse(){
    let response=await fetch('https://api.unsplash.com/photos/?client_id=ZEZpV4GoNlx4kLTRoMetgOTZCFzX4luSY92mKMIMsqo')
    let content= await response.text()
    content=JSON.parse(content)
    content=content.slice(0, 10)
    let list = document.querySelector('.galery-row')
    const isNull = (prop) => {
        let string = '';
        prop ? string = prop : console.log("Послана пустая строка")
        return string
    }
    for(let key in content){
        list.innerHTML += `
            <div class="post-row">
                <div class="autor-profile">
                    <div class="autor-img">
                        <img src="${content[key].user.profile_image.small}" alt="">
                    </div>
                    <div class="autor-name-row">
                        <div class="autor-name">
                            <a target="_blank" href="${content[key].user.links.html}"><b>${content[key].user.first_name} ${isNull(content[key].user.last_name)}</b></a> 
                        </div>
                        <div class="autor-login">
                            <a target="_blank" href="${content[key].user.links.html}">@${content[key].user.username}</a>
                        </div>
                    </div>
                </div>
                <div class="post-image">
                    <img src="${content[key].urls.full}" alt="">
                </div>
                <div class="views-selector">
                    <div class="views-col">
                        <span>51 200</span>
                    </div>
                    <div class="views-icon">
                        <img src="img/Vector.svg" alt="">
                    </div>
                </div>
            </div>
        `
        
    }
   
}
let content=getResponse()
console.log(content)


