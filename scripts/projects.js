fetch("assets/data/projects.json")
  .then((response) => response.json())
  .then((data) => {
    const projects = data.projects;
    createProjectCards(projects);
  })
  .catch((error) => {
    console.error("Error fetching projects:", error);
    document.querySelector(".projects").innerHTML =
      "<p>Error loading projects. Please try again later.</p>";
  });


function createProjectCards(projects) {
  const projectList = document.querySelector(".projects");
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <div class="image-placeholder ${!project.image ? 'no-image' : ''}">
        ${project.image 
          ? `<img src="${project.image}" alt="${project.name}" onerror="this.style.display='none'">`
          : '<!-- Project image will go here -->'
        }
      </div>
      <h3>${project.name}</h3>
      <div class="overlay">
        <div class="overlay-content">
          <p>${project.description}</p>
          <div class="tech-stack">
            ${project.techs.map((tech) => `<span>${tech}</span>`).join("")}
          </div>
        </div>
        <div class="overlay-footer">
          ${project.link 
            ? `<a href="${project.link}" target="_blank" class="project-link">View Project</a>`
            : `<span class="project-link disabled">Project Link Unavailable</span>`
          }
        </div>
      </div>
    `;
    projectList.appendChild(card);
  });
}