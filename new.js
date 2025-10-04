document.getElementById('receptionistBtn').onclick = function() {
  // Simulate Python output, or call a backend via AJAX in real app
  const content = '<div class="education-content">Receptionist function executed. (Python code output here.)</div>';
  document.getElementById('output').innerHTML = content;
  // New Feature: Update ARIA Live region for screen readers
  updateAriaLive('Receptionist content loaded.');
};

document.getElementById('rootMapBtn').onclick = function() {
  const content = '<img src="root-map.png" alt="Root Map" />';
  document.getElementById('output').innerHTML = content;
  // New Feature: Update ARIA Live region for screen readers
  updateAriaLive('Root Map image loaded.');
};

document.getElementById('educationBtn').onclick = function() {
  const content = `
    <div class="education-content">
      <button class="secondary-btn" onclick="showAI()">AI</button>
      <button class="secondary-btn" onclick="showOther()">Robotics</button>
    </div>
  `;
  document.getElementById('output').innerHTML = content;
  // New Feature: Update ARIA Live region for screen readers
  updateAriaLive('Education sub-menu loaded with AI and Robotics options.');
};

function showAI() {
  const content = `
    <div class="education-content">
      <h2>Artificial Intelligence</h2>
      <p>AI involves machines learning from data, solving tasks intelligently, and driving innovation in domains from robotics to language processing.</p>
      <button class="secondary-btn" onclick="document.getElementById('output').innerHTML = ''">Back</button>
    </div>
  `;
  document.getElementById('output').innerHTML = content;
  // New Feature: Update ARIA Live region for screen readers
  updateAriaLive('Artificial Intelligence details loaded.');
}

function showOther() {
  const content = `
    <div class="education-content">
      <h2>What is Robotics?</h2>
      <p>Robotics is the branch of technology that deals with the design, construction, and operation of robots. Robots are programmable machines that can perform tasks automatically or semi-autonomously, often mimicking human actions to improve productivity and safety in areas such as manufacturing, healthcare, and exploration. The main components of a robot typically include a control system, motors, actuators, sensors, power supply, and software that enables them to respond to their environment and perform useful functions.</p>
      <button class="secondary-btn" onclick="document.getElementById('output').innerHTML = ''">Back</button>
    </div>
  `;
  document.getElementById('output').innerHTML = content;
  // New Feature: Update ARIA Live region for screen readers
  updateAriaLive('Robotics details loaded.');
}

// New Standard Feature: Accessibility Utility Function
function updateAriaLive(message) {
    const liveRegion = document.getElementById('output');
    // For a cleaner announcement, we temporarily change the content of the aria-live region.
    // However, since we are already changing the innerHTML of 'output', 
    // the initial message can be read by the screen reader because of 'aria-live="polite"'.
    // This function is included as a best practice but might be redundant with the existing setup.
    console.log(`ARIA Announce: ${message}`);
}