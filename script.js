
const projects = [
    { name: 'Counter App', description: 'A simple counter app built with React.' },
    { name: 'Grade Calculator', description: 'A grade calculator app built with React.' },
    { name: 'Number Comparator App', description: 'An app to compare two numbers built with React.' },
    { name: 'Multiplication Table', description: 'A multiplication table generator built with React.' },
    { name: 'Number Table', description: 'A number table generator built with React.' },
    { name: 'Render Products', description: 'A product rendering app built with React.' },
  ];
  

  const projectList = document.getElementById('project-list');
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project';
  
    const projectName = document.createElement('h2');
    projectName.textContent = project.name;
  
    const projectDescription = document.createElement('p');
    projectDescription.innerHTML = `<strong>Description:</strong> ${project.description}`;
  
    const projectLink = document.createElement('p');
    projectLink.innerHTML = `<strong>Live Demo:</strong> <a href="https://username.github.io/React-projects/${project.name.replace(/ /g, '-')}/" target="_blank">View ${project.name}</a>`;
  
    projectCard.appendChild(projectName);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(projectLink);
  
    projectList.appendChild(projectCard);
  });