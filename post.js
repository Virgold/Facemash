  
async function getPosts() {
    let posts = await axios.get ("https://jsonplaceholder.typicode.com/posts");
    allPosts = posts.data.splice(0,10);
    displayPosts();
}


const getUsers = async () => {
   let res = await axios.get('https://randomuser.me/api/?results=10');
    users = res.data.results;
    displayPosts();
    console.log(users);
};



function displayPosts(){
    allPosts.forEach((_post,index) => {
        //Create GeneralDiv
        let GeneralDiv = document.createElement("div");
        GeneralDiv.classList.add("my-5", "shadow", "rounded-lg");
        GeneralDiv.style.width = "700px"

        //Creating RowDiv
        let RowDiv = document.createElement("div");
        RowDiv.classList.add("row","mb-0","p-3");

        //Creating ColDiv
        let ColDiv1 = document.createElement('div')
        ColDiv1.classList.add("col-md-5","align-items-center")

        //Creating RowFlexDiv
        let RowFlexDiv = document.createElement('div');
        RowFlexDiv.classList.add("d-flex","align-items-center");
        RowFlexDiv.style.gap = "1rem";

        //Creating RowFlex Image
        let RowFlexImg = document.createElement('img');
        RowFlexImg.setAttribute('src',users[index].picture.medium);
        // RowFlexImg.setAttribute('src',"https://www.forbes.com/advisor/wp-content/uploads/2020/09/leverage-investing.jpg");
        RowFlexImg.setAttribute('style',"width: 20px; height:20px; border-radius:50%");

        //Creating  RowFlex Span
        let RowFlexSpan = document.createElement('span')
        RowFlexSpan.textContent = users[index].name.title+'.'+users[index].name.first+' '+users[index].name.last;

        //Creating RowFlex Icon
        let RowFlexIcon1 = document.createElement('i');
        RowFlexIcon1.classList.add("fa","fa-star");
        
        //Creating ColDiv2
        let ColDiv2 = document.createElement('div')
        ColDiv2.classList.add("col-md-5","text-end","offset-md-2");

        //Creating RowFlex Icon 2
        let RowFlexIcon2 = document.createElement('i');
        RowFlexIcon2.classList.add("fa","fa-ellipsis-h");

        //Creating TextDiv
        let TextDiv = document.createElement('div');
        TextDiv.classList.add("mb-3","p-3")

        //Creating TextElements1
        let TextElements1 = document.createElement("p");
        TextElements1.textContent = "@"+ users[index].login.username;

        //Creating TextElements2
        let TextElements2 = document.createElement("p");
        TextElements2.textContent =  users[index].phone;


        //Creating PostDiv
        let PostDiv = document.createElement("div");
        PostDiv.classList.add("POST");
        //Creating Post Image
        let PostImg = document.createElement("img");
        // PostImg.setAttribute('src',"https://www.forbes.com/advisor/wp-content/uploads/2020/09/leverage-investing.jpg");
        PostImg.setAttribute('src',users[index].picture.medium);
        PostImg.style.width = "100%"
        //Creating Post div Details
        let PostImgText = document.createElement("div");
        PostImgText.classList.add("bg-light","p-3");

        //Creating post Div Text
        let PostDivText1 = document.createElement("p");
        PostDivText1.classList.add("small");
        PostDivText1.textContent =  users[index].email;

        //Creating post Div Text
        let PostDivText2 = document.createElement("p");
        PostDivText2.classList.add("mb-0");
        PostDivText2.textContent =  users[index].cell;



        //Creating ActionDetails div
        let ActionDetails = document.createElement('div')
        ActionDetails.classList.add("d-flex", "p-3", "g-1", "justify-content-between")

        //Creating ActionIconsDiv
        let ActionIconsDiv = document.createElement('div');
        //Creating ActionIcon1
        let ActionIcon1 = document.createElement('i');
        ActionIcon1.classList.add("fa","fa-thumbs-up", "text-primary");
        //Creating ActionIcon2
        let ActionIcon2 = document.createElement('i');
        ActionIcon2.classList.add("fa","fa-heart", "text-danger");
        //Creating ActionIcon2
        let ActionIcon3 = document.createElement('small');
        ActionIcon3.textContent = '2.4k';

        //Creating ActionLinkDiv
        let ActionLinkDiv = document.createElement('div');
        //Creating ActionLink1
        let ActionLink1 = document.createElement('a');
        ActionLink1.classList.add("text-secondary");
        ActionLink1.textContent = "88 comments";
        //Creating ActionLink2
        let ActionLink2 = document.createElement('a');
        ActionLink2.classList.add("text-secondary");
        ActionLink2.textContent = "66 shares";

      
        //Creating Reaction Div
        let ReactionsDiv = document.createElement('div');
        ReactionsDiv.classList.add("p-3","d-flex","justify-content-around","border-top");
       

        i=1;
        while(i<=3){
            let IconArray = ["fa-thumbs-up","fa-comment","fa-share"];
            // let ReactionIconDiv = document.createElement('div');
            let ReactionIcon = document.createElement("i");
            ReactionIcon.classList.add("fa",IconArray[i -1]);
            if (ReactionIcon.classList.contains("fa-thumbs-up")){
              ReactionIcon.innerHTML = "Like";
            }
            if (ReactionIcon.classList.contains("fa-comment")){
              ReactionIcon.innerHTML = "Comment";
            }
            if (ReactionIcon.classList.contains("fa-share")){
              ReactionIcon.innerHTML = "Share";
            }
            // ReactionIcon.setAttribute('onclick',"myFunction(this)")
            // ReactionIconDiv.appendChild(ReactionIcon);
            ReactionsDiv.appendChild(ReactionIcon);
            ReactionIcon.onclick = function (e) {
                if (e.target.classList.contains("fa-thumbs-up")) {
                  e.target.classList.toggle("text-primary");
                }
                if (e.target.classList.contains("fa-comment")){   
                     //Create input for comment
                            
                     let CommentDiv = document.createElement('div');
                     CommentDiv.classList.add("bg-dark","d-flex","p-2","flex-row","justify-content-around","d-none");
                    //  CommentDiv.classList.toggle("d-block");
                    //  CommentDiv.setAttribute('style',"display: block")

                    // CommentDiv.classList.toggle("d-block");
                    // if (CommentDiv.classList.contains("d-block")){
                    //   CommentDiv.classList.replace("d-block","d-none");
                    // }
                    
                     PostDiv.appendChild(CommentDiv);
                     let CommentInput = document.createElement('input');
                     CommentInput.type = "text";
                     CommentInput.setAttribute('placeholder',"write a comment...");
                     CommentInput.classList.add("form-control","text-white","ms-2");
                     RowFlexImg.classList.add("mt-1");
                     RowFlexImg.setAttribute('style',"width: 32px; height:32px; border-radius:50%");
                     CommentDiv.appendChild(RowFlexImg);
                     CommentDiv.appendChild(CommentInput);
                     CommentDiv.classList.toggle('d-none');

                  // const getComments = async () => {
                  //   let comments = await axios.get('https://jsonplaceholder.typicode.com/comments');
                  //   comment = comments.data.splice(0,10);
                  //   let postComment = comment.map((text,index) => {
                  //     console.log(comment);
                  //     return`
                  //     <div class="bg-dark d-flex p-2 flex-row">
                  //     <img src="${users[index].picture.large}"
                  //     alt="" style="width: 35px; height:35px; border-radius:50%" class="mt-2 me-2">
                  //       <div>
                  //         <label for="userComment" class="form-label m-0 text-white">@${text.name}</label>
                  //         <input type="text" value="${text.body}" class="form-control text-white w-100" id="userComment" disabled></input>
                  //       </div>
                  //     </div>
                  //     `
                  //     }).join('');
                  //     CommentDiv.classList.toggle('d-none');
                  //     PostDiv.insertAdjacentHTML('afterend',postComment);
                  // }
                  // getComments();
                }
                else if(e.target.classList.contains("fa-comment")){
                  PostDiv.removeChild(CommentDiv);
                 };

                if (e.target.classList.contains("fa-share")) {
                  e.target.classList.toggle("text-success");
                }
            };
            console.log(ReactionIcon)
            i++
        };

        
        TextDiv.appendChild(TextElements1);
        TextDiv.appendChild(TextElements2);

        //Adding Row items
        RowFlexDiv.appendChild(RowFlexImg);
        RowFlexDiv.appendChild(RowFlexSpan);
        RowFlexDiv.appendChild(RowFlexIcon1);
        ColDiv2.appendChild(RowFlexIcon2);
        ColDiv1.appendChild(RowFlexDiv);
        RowDiv.appendChild(ColDiv1);
        RowDiv.appendChild( ColDiv2);

        //Adding Post items
        PostDiv.appendChild(PostImg);
        PostDiv.appendChild(PostImgText);
        PostDiv.appendChild(ActionDetails);
        PostDiv.appendChild(ReactionsDiv);
        PostImgText.appendChild(PostDivText1);
        PostImgText.appendChild(PostDivText2);
        
        //Adding Action items
        ActionDetails.appendChild(ActionIconsDiv);
        ActionDetails.appendChild(ActionLinkDiv);
        ActionLinkDiv.appendChild(ActionLink1);
        ActionLinkDiv.appendChild(ActionLink2);
        ActionIconsDiv.appendChild(ActionIcon1);
        ActionIconsDiv.appendChild(ActionIcon2);
        ActionIconsDiv.appendChild(ActionIcon3);

        // //Adding ReactionsDiv
        // ReactionsDiv.appendChild(ReactionIconDiv);

       

        //Adding general items
        GeneralDiv.appendChild(RowDiv);
        GeneralDiv.appendChild(TextDiv);
        GeneralDiv.appendChild(PostDiv);
        app.appendChild(GeneralDiv);
    });
};

getPosts();
getUsers();



//  //Creating col Element
//  let colElement = document.createElement("div");

//  //creating flexed div
//  let flexedDiv = document.createElement("div");

//  //creating flexed div image 
//  let flexedDivImg = document.createElement("img")

//  //creating flexed div span 
//  let flexedDivSpan = document.createElement("span")
//  flexedDivSpan.textContent = "Arsenal";

//  //Adding image source and styles to flexedDivImg
//  flexedDivImg.setAttribute('src',"https://media.istockphoto.com/photos/price-manipulation-concept-picture-id637330068?k=20&m=637330068&s=612x612&w=0&h=PokrlzFRI7dt4NWe8E7vJlLUfWvij0goNuwk_fSENp8=")

//  flexedDivImg.classList.add("flexedDivImage");

//  //creating flexed div icon
//  let flexedDivIcon = document.createElement("i")
//  flexedDivIcon.classList.add("flexedDivImage")

//  //Adding classes to colElement 
//  colElement.classList.add("col-md-5", "align-items-center")

//  //Adding classes to flexedDiv
//  flexedDiv.classList.add("d-flex", "align-items-center")
//  flexedDiv.style.gap = "1rem";