    let btn = document.querySelectorAll(".btn");
    let link = document.querySelectorAll(".book-save a");
    let main_save = document.querySelector(".main-saves");




    let web_name = document.querySelector("#web-name")
    let web_url = document.querySelector("#url-name")
    let submit = document.querySelector("#submit");

    submit.addEventListener("click" , (e)=>{
    e.preventDefault()
        let book_info = `
    <div class="book-save">
        <img src="https://www.google.com/s2/favicons?domain=${web_name.value.toLowerCase()}.com&sz=256" alt="img">

        <h2>${web_name.value}</h2>

        <a href="https://${web_url.value.toLowerCase()}">https://${web_url.value.toLowerCase()}</a>

        <div class="open-mark">
            <button class="btn">OPEN</button>

            <svg viewBox="0 0 24 24" width="40" height="40" class="neon-open">
                <path d="M14 3h7v7"/>
                <path d="M21 3L10 14"/>
                <path d="M21 14v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4"/>
            </svg>
        </div>

        <svg viewBox="0 0 24 24" width="40" height="40" class="delete-icon">
            <path d="M3 6h18"/>
            <path d="M8 6V4h8v2"/>
            <path d="M6 6l1 14h10l1-14"/>
            <path d="M10 10v6"/>
            <path d="M14 10v6"/>
        </svg>
    </div>
    `;
    main_save.insertAdjacentHTML("beforeend", book_info);

    })

    let searchBox = document.querySelector("#search");
    let bookmarks = document.querySelectorAll(".book-save");

    searchBox.addEventListener("input", () => {
        let searchValue = searchBox.value.toLowerCase();

        let bookmarks = document.querySelectorAll(".book-save");

        bookmarks.forEach( bookmark => {
            let title = bookmark.querySelector("h2").textContent.toLowerCase();
            
            if(title.includes(searchValue)){
                bookmark.style.display = "";              
        }else{
                bookmark.style.display ="none";
            
            }
        });
    });/    /   

    main_save.addEventListener("click", (e) => {

        if(e.target.classList.contains("btn")){
            const card = e.target.closest(".book-save");
            const link = card.querySelector("a");

            link.click();
        }

    });

    let undo = document.querySelector(".undo-icon");
    let deletedItems = [];

    main_save.addEventListener("click", (e) => {
        if (e.target.closest(".delete-icon")) {
            const item = e.target.closest(".book-save");

            deletedItems.push({
                element: item,
                parent: item.parentNode,
                nextSibling: item.nextElementSibling
            });

            item.remove();
        }
    });


    undo.addEventListener("click", () => {
        if (deletedItems.length == 0) {
    
        alert("nothing to restore")
    return};

        const item = deletedItems.pop(); // Last deleted comes back first

        if (item.nextSibling) {
            item.parent.insertBefore(item.element, item.nextSibling);
        } else {
            item.parent.appendChild(item.element);
        }
    });
