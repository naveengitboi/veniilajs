const projects = [
    {
        projectUrl: '/videoPlayer/index.html',
        projectName: "Video Player",
        description: "video player with Custom Controls",
        learnt: "While doing this project I gone through Different addeventlisteners which I never known they exist and can be used."
    },
    {
        projectUrl: '/videoPlayer/index.html',
        projectName: "Video Player",
        description: "video player with Custom Controls",
        learnt: "While doing this project I gone through Different addeventlisteners which I never known they exist and can be used."
    },
      {
        projectUrl: '/videoPlayer/index.html',
        projectName: "Video Player",
        description: "video player with Custom Controls",
        learnt: "While doing this project I gone through Different addeventlisteners which I never known they exist and can be used."
    }
]

console.log(projects)

const projectsListEle = document.querySelector('.projectsList');



projects.map((item) => {
    //bordersDiv
    const bordersDiv = document.createElement('div')
    bordersDiv.setAttribute('class', 'bordersDiv')
    //a tag
    const linkTag = document.createElement('a')
    linkTag.setAttribute('href', item.projectUrl)
    //Project Card
    const projectCard = document.createElement('div')
    projectCard.setAttribute('class', 'projectCard')
    //
    const projectDetails = document.createElement('div')
    projectDetails.setAttribute('class', 'projectDetails')

    //h3 
    const heading = document.createElement('h3');
    heading.setAttribute('class', 'heading');
    heading.textContent = `${item.projectName}`

    //p 
    const description = document.createElement('p');
    description.setAttribute('class', 'description');
    description.textContent = `${item.description}`


    //appending elements

    projectDetails.appendChild(heading);
    projectDetails.appendChild(description);

    projectCard.appendChild(projectDetails)
    
    linkTag.appendChild(projectCard)

    bordersDiv.appendChild(linkTag)
    projectsListEle.appendChild(bordersDiv)
})

