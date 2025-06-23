// Switch Tabs
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.add('hidden');
    });
    document.getElementById(tabId).classList.remove('hidden');
  }

  // Student Logic
  const studentForm = document.getElementById("studentForm");
  const studentJobs = document.getElementById("studentJobs");
  const appliedJobs = document.getElementById("appliedJobs");

  let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
  let students = JSON.parse(localStorage.getItem("students")) || [];
  let applications = JSON.parse(localStorage.getItem("applications")) || [];

  studentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("studentName").value;
    const email = document.getElementById("studentEmail").value;
    const course = document.getElementById("studentCourse").value;

    students.push({ name, email, course });
    localStorage.setItem("students", JSON.stringify(students));
    alert("Student Registered!");
    studentForm.reset();
  });

  // Display Jobs to Students
  function renderJobs() {
    studentJobs.innerHTML = "";
    jobs.forEach((job, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${job.title}</strong> at ${job.company}
        <button onclick="applyJob(${index})" style="float:right;">Apply</button>
      `;
      studentJobs.appendChild(li);
    });
  }

  // Apply to Job
  function applyJob(index) {
    const studentName = prompt("Enter your name to confirm application:");
    if (!studentName) return;

    const job = jobs[index];
    applications.push({ studentName, job });
    localStorage.setItem("applications", JSON.stringify(applications));
    alert(`You applied to ${job.title} at ${job.company}`);
    renderAppliedJobs();
  }

  // Show Applied Jobs
  function renderAppliedJobs() {
    appliedJobs.innerHTML = "";
    const namePrompt = prompt("Enter your name to load applied jobs:");
    const studentApps = applications.filter(app => app.studentName === namePrompt);
    studentApps.forEach(app => {
      const li = document.createElement("li");
      li.textContent = `${app.job.title} at ${app.job.company}`;
      appliedJobs.appendChild(li);
    });
  }

  // ===== Recruiter Logic =====
  const jobForm = document.getElementById("jobForm");
  const recruiterJobs = document.getElementById("recruiterJobs");

  jobForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("jobTitle").value;
    const company = document.getElementById("jobCompany").value;

    jobs.push({ title, company });
    localStorage.setItem("jobs", JSON.stringify(jobs));
    alert("Job Posted!");
    jobForm.reset();
    renderJobs();
    renderRecruiterJobs();
  });

  // Show Recruiter Jobs
  function renderRecruiterJobs() {
    recruiterJobs.innerHTML = "";
    jobs.forEach(job => {
      const li = document.createElement("li");
      li.textContent = `${job.title} at ${job.company}`;
      recruiterJobs.appendChild(li);
    });
  }

  // ===== Admin Logic =====
  function loadAdminData() {
    const allStudents = document.getElementById("allStudents");
    const allApplications = document.getElementById("allApplications");

    allStudents.innerHTML = "";
    allApplications.innerHTML = "";

    students.forEach(student => {
      const li = document.createElement("li");
      li.textContent = `${student.name} (${student.course}) - ${student.email}`;
      allStudents.appendChild(li);
    });

    applications.forEach(app => {
      const li = document.createElement("li");
      li.textContent = `${app.studentName} applied to ${app.job.title} at ${app.job.company}`;
      allApplications.appendChild(li);
    });
  }

  // Initial Rendering
  renderJobs();
  renderRecruiterJobs();
