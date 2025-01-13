<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ALTHEPAL78's Portfolio</title>
    <link rel="stylesheet" href="src/css/main.css">
    <!-- Link the JavaScript file with the defer attribute -->
    <script src="src/js/main.js" defer></script>
    <!-- Add the favicon -->
    <link rel="icon" href="src/img/mylogo.jpg" type="image/jpeg">
</head>

<body>
    <div class="wrapper">
        <header>
            <nav>
                <div class="logo">
                    <img src="./src/img/mylogo.jpg" alt="">
                </div>
                <ul>
                    <li><a class="nav-button" href="#about">About Me</a></li>
                    <li><a class="nav-button" href="#projects">Projects</a></li>
                    <li><a class="nav-button" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

        <section id="hero">
            <div class="hero-content">
                <h1>Welcome to My Portfolio</h1>
                <p>I'm a web developer specializing in creating modern, responsive websites.</p>
            </div>
        </section>

        <section id="about">
            <h2>About Me</h2>
            <p>Hi, I'm ALTHEPAL78, a passionate web developer with a knack for creating elegant and efficient web solutions. With a background in CSS, JavaScript, and HTML, I bring a unique perspective to web development. My goal is to build user-friendly and visually appealing websites that deliver a seamless user experience.</p>
        </section>

        <section id="projects">
            <h2>Projects</h2>
            <div class="projects-container">
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df?fit=crop&w=600&h=400&q=80" alt="Project 1">
                    <div class="card-content">
                        <h3>Project One</h3>
                        <p>A brief description of Project One. This project involved using technologies such as HTML, CSS, and JavaScript.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=600&h=400&q=80" alt="Project 2">
                    <div class="card-content">
                        <h3>Project Two</h3>
                        <p>A brief description of Project Two. This project focused on building a responsive web application using React and Node.js.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=600&h=400&q=80" alt="Project 3">
                    <div class="card-content">
                        <h3>Project Three</h3>
                        <p>A brief description of Project Three. This project was developed using Python and Django, with a focus on backend development.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <form action="#" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>

        <footer>
            <p>&copy; 2024 ALTHEPAL78's Portfolio. All rights reserved.</p>
        </footer>
    </div>
    <!-- end of div wrapper -->

</body>

</html>